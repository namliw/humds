import { style } from '@vanilla-extract/css';
import { vars, tokens } from '../../../tokens/index.css';

export const pictoCardGroup = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1fr', // Mobile
  rowGap: vars.spacing.space40,
  columnGap: vars.spacing.space40,
  '@media': {
    [tokens.mediaQuery.large]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    // @todo Enable this once multiple media queries works
    // [tokens.mediaQuery.medium]: {
    //   gridTemplateColumns: 'repeat(2, 1fr)',
    // },
  },
});
