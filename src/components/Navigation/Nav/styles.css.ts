import { style } from '@vanilla-extract/css';
import { tokens } from '../../../tokens/index.css';

export const nav = style({
  display: 'flex',
});

export const itemContainer = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  padding: '0',
  margin: '0',
});

export const childItem = style({
  marginLeft: tokens.spacing.space32,
  selectors: {
    '&:first-child': {
      marginLeft: '0',
    },
  },
});
