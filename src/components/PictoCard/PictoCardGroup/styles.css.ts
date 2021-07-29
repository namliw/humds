import { style } from '@vanilla-extract/css';
import { tokens, mediaQuery } from '../../../tokens/index.css';

export const pictoCardGroup = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1fr', // Mobile
  rowGap: tokens.spacing.space40,
  columnGap: tokens.spacing.space40,
  '@media': {
    [mediaQuery.desktop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    // @todo Enable this once multiple media queries works
    // [mediaQuery.tablet]: {
    //   gridTemplateColumns: 'repeat(2, 1fr)',
    // },
  },
});
