import { style } from '@vanilla-extract/css';
import { tokens } from '../../../tokens/index.css';

const HIGHLIGHT_OVERFLOW = '2px';

export const navItem = style({
  position: 'relative',
  font: tokens.font.navItem,
  color: tokens.colour.squirtle,
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: tokens.letterSpacing.navItem,
  zIndex: 0,
  ':hover': {
    color: tokens.colour.poliwill,
  },
  '::after': {
    content: "''",
    position: 'absolute',
    display: 'block',
    width: `calc(100% + (${HIGHLIGHT_OVERFLOW} * 2))`,
    top: '100%',
    bottom: 0,
    left: `-${HIGHLIGHT_OVERFLOW}`,
    zIndex: -1,
  },
  selectors: {
    '&:hover:after': {
      backgroundColor: tokens.colour.bulbasaur,
      transition: 'top .3s ease-in-out',
      top: '50%',
      bottom: `-${HIGHLIGHT_OVERFLOW}`,
    },
  },
});

export const navItemActive = style({
  color: tokens.colour.poliwill,
  '::after': {
    backgroundColor: tokens.colour.pikachu,
    top: '50%',
    bottom: `-${HIGHLIGHT_OVERFLOW}`,
  },
  selectors: {
    '&:hover:after': {
      backgroundColor: tokens.colour.pikachu,
    },
  },
});
