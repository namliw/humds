import { style } from '@vanilla-extract/css';
import { tokens } from '../../../tokens/index.css';

export const pictocard = style({
  position: 'relative',
  backgroundColor: tokens.colour.geodude,
});

export const imgContainer = style({
  position: 'relative',
  paddingTop: 'calc(200% /3)',
  overflow: 'hidden',
});

export const img = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  minWidth: '100%',
  minHeight: '100%',
});

export const contents = style({
  padding: tokens.spacing.space24,
  font: tokens.font.pictocardTitle,
  color: tokens.colour.poliwill,
  textTransform: 'uppercase',
});
