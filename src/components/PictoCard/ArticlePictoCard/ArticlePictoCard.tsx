import React from 'react';
import { Tag } from '../../Tag';
import { BasePictoCard, BasePictoCardProps } from '../BasePictoCard';
import * as styles from './styles.css';

export type ArticlePictoCardProps = Omit<BasePictoCardProps, 'children'> & {
  category: string;
  articleTitle: string;
  publicationDate: Date;
  categoryLink: string;
};

export const ArticlePictoCard: React.VFC<ArticlePictoCardProps> = ({
  articleTitle, className, imgAttributes, category, publicationDate, categoryLink,
}) => (
  <BasePictoCard className={className} imgAttributes={imgAttributes}>
    <div className={styles.contents}>
      <Tag label={category} href={categoryLink} />
      {articleTitle}
      <div className={styles.publicationDate}>{new Intl.DateTimeFormat('en-AU').format(publicationDate)}</div>
    </div>
  </BasePictoCard>
);
