import { style } from '@vanilla-extract/css';
import { tokens } from '../../../tokens/index.css';

const OVERLAY_OVERFLOW = '2px';

export const navItem = style({
  color: tokens.colour.squirtle,
  font: tokens.font.navItem,
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: tokens.letterSpacing.navItem,
  position: 'relative',
  ':hover': {
    color: tokens.colour.poliwill,
  },
  '::after': {
    content: "''",
    width: `calc(100% + (${OVERLAY_OVERFLOW} * 2))`,
    display: 'block',
    position: 'absolute',
    bottom: 0,
    top: '100%',
    zIndex: -1,
    left: `calc(${OVERLAY_OVERFLOW} * -1)`,
  },
  selectors: {
    '&:hover:after': {
      backgroundColor: tokens.colour.bulbasaur,
      transition: 'top .3s ease-in-out',
      top: '50%',
      bottom: `calc(${OVERLAY_OVERFLOW} * -1)`,
    },
  },
});

export const navItemActive = style({
  color: tokens.colour.poliwill,
  '::after': {
    backgroundColor: tokens.colour.pikachu,
    top: '50%',
    bottom: `calc(${OVERLAY_OVERFLOW} * -1)`,
  },
  selectors: {
    '&:hover:after': {
      backgroundColor: tokens.colour.pikachu,
    },
  },
});
