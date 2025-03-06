import { type FC, useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import type { CardProps } from '@/components/ui/Card';

interface CardGridProps {
  cards: Array<CardProps>;
}

interface CardModule {
  styles: string;
  init: () => void;
}

export const CardGrid: FC<CardGridProps> = ({ cards }) => {
  const [loadedModules, setLoadedModules] = useState<Record<string, CardModule>>({});
  const isInitializedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const loadCardModules = async () => {
      const modules: Record<string, CardModule> = {};

      await Promise.all(
        cards.map(async (card) => {
          if (isInitializedRef.current[card.title]) {
            return;
          }

          try {
            const moduleName = card.title;
            
            const [cssModule, jsModule] = await Promise.all([
              import(`@/styles/cards/${moduleName}.css`),
              import(`@/scripts/cards/${moduleName}.ts`)
            ]);

            modules[card.title] = {
              styles: cssModule.default,
              init: jsModule.default
            };

            jsModule.default();
            isInitializedRef.current[card.title] = true;
          } catch (error) {
            console.warn(`Failed to load modules for card: ${card.title}`, error);
          }
        })
      );

      setLoadedModules(prevModules => ({
        ...prevModules,
        ...modules
      }));
    };

    loadCardModules();

    return () => {
      isInitializedRef.current = {};
    };
  }, [cards]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          aria-label="カードグリッド"
        >
          {cards.map((card) => (
            <article 
              key={card.title}
              className={`h-full ${loadedModules[card.title]?.styles || ''}`}
              data-card-type={card.title}
            >
              <Card {...card} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}; 