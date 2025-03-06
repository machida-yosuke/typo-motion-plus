import type { FC } from 'react';
import { GridCard } from './GridCard';
import type { GridCardProps } from './GridCard';

interface CardGridProps {
  cards: Array<GridCardProps>;
}

export const CardGrid: FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          aria-label="カードグリッド"
        >
          {cards.map((card) => (
            <GridCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}; 