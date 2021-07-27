import React, { HTMLAttributes } from 'react';

export type PictoCardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
}

export const PictoCard: React.FC<PictoCardProps> = ({ children, imgSrc, imgAlt, ...props }) => (
  <div {...props}>
    <img src={imgSrc} alt={imgAlt} />
    {children}
  </div>
);
