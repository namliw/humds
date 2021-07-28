import { style } from '@vanilla-extract/css';
import { tokens } from '../../tokens/index.css';

export const button = style({
  border: `1px solid ${tokens.colour.poliwill}`,
  backgroundColor: 'transparent',
  padding: `${tokens.spacing.space8} ${tokens.spacing.space16}`,
  font: tokens.font.tag,
  letterSpacing: tokens.letterSpacing.button,
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: tokens.colour.poliwill,
  cursor: 'pointer',
  transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  ':hover': {
    backgroundColor: tokens.colour.pikachu,
    borderColor: tokens.colour.pikachu,
    transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  },
});
