import { style } from '@vanilla-extract/css';
import { tokens } from '../../tokens/index.css';

export const button = style({
  border: `1px solid ${tokens.colour.pikachu}`,
  backgroundColor: tokens.colour.pikachu,
  padding: `${tokens.spacing.space16} ${tokens.spacing.space32}`,
  font: tokens.font.button,
  letterSpacing: tokens.letterSpacing.button,
  textTransform: 'uppercase',
  color: tokens.colour.poliwill,
  cursor: 'pointer',
  transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  ':hover': {
    backgroundColor: tokens.colour.white,
    borderColor: tokens.colour.poliwill,
    transition: 'background-color .3s ease-in-out,color .3s ease-in-out,border-color .3s ease-in-out',
  },
});
