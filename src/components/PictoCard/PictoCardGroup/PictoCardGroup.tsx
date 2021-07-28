import React, { HTMLAttributes } from 'react';
import { BasePictoCard } from '../BasePictoCard';

export type PictoCardGroupProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactElement<typeof BasePictoCard> | React.ReactElement<typeof BasePictoCard>[]
};

export const PictoCardGroup: React.VFC<PictoCardGroupProps> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
)
