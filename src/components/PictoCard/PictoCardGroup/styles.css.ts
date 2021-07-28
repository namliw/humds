import { style } from '@vanilla-extract/css';
import { tokens, mediaQuery } from '../../../tokens/index.css';

export const pictoCardGroup = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: 'repeat(4, 1fr)',
  rowGap: tokens.spacing.space40,
  columnGap: tokens.spacing.space40,
  '@media': {
    [mediaQuery.desktop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [mediaQuery.tablet]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [mediaQuery.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});
