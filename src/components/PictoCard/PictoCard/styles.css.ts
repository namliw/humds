import { style } from '@vanilla-extract/css';
import { tokens } from '../../../tokens/index.css';

export const contents = style({
  display: 'grid',
  gridTemplate: 'auto / 1fr',
  rowGap: tokens.spacing.space16,
  justifyItems: 'center',
});
