import { createGlobalTheme } from '@vanilla-extract/css';
import { colour } from './colours.css';
import { typography } from './typography.css';

export const tokens = createGlobalTheme(':root', {
  colour,
  ...typography,
})
