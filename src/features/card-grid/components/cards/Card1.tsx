import { useEffect, type FC } from 'react';
import styles from './Card1.module.css';

export interface Card1Props {
  title: string;
  description: string;
}

export const Card1: FC<Card1Props> = ({ title, description }) => {
  useEffect(() => {
    console.log('Card1');
  }, []);
  
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </article>
  );
}; 