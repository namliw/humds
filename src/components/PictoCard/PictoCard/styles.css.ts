import { style } from '@vanilla-extract/css';
import { vars } from '../../../tokens/index.css';

export const contents = style({
  display: 'grid',
  gridTemplate: 'auto / 1fr',
  rowGap: vars.spacing.space16,
  justifyItems: 'center',
});
