import { type FC, lazy, Suspense } from 'react';

export interface GridCardProps {
  title: string;
  description: string;
  type: string;
}

const Card1 = lazy(() => import('./cards/Card1').then(module => ({ default: module.Card1 })));

const CardComponents: Record<string, FC<GridCardProps>> = {
  'card1': Card1,
};

export const GridCard: FC<GridCardProps> = ({ type, ...props }) => {
  const CardComponent = CardComponents[type];

  if (!CardComponent) {
    console.warn(`Card type "${type}" not found`);
    return null;
  }

  return (
    <Suspense fallback={<div className="animate-pulse bg-gray-200 rounded-lg h-[200px]" />}>
      <CardComponent type={type} {...props} />
    </Suspense>
  );
}; 