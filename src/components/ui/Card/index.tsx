import type { FC } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title: string;
  description: string;
}

export const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}; 