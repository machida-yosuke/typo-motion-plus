import type { FC } from 'react';
import styles from './CarouselCard.module.css';

export interface CarouselCardProps {
  title: string;
  description: string;
}

export const CarouselCard: FC<CarouselCardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}; 