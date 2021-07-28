import { style } from '@vanilla-extract/css';
import { tokens } from '../../../tokens/index.css';

export const navItem = style({
  color: tokens.colour.squirtle,
  font: tokens.font.navItem,
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: tokens.letterSpacing.navItem,
  position: 'relative',
  // ':hover': {
  //     color: tokens.colour.poliwill,
  // },
  '::after': {
    content: '"asdasdas"',
    width: '100%',
    height: '100px',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    left: 0,
    boxSizing: 'border-box',
    backgroundColor: '#56bda3',
  },
});
