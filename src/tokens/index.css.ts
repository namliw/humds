import { createGlobalTheme } from '@vanilla-extract/css';
import { colour } from './colours.css';
import { spacing } from './spacing.css';
import { typography } from './typography.css';

export const tokens = createGlobalTheme(':root', {
  colour,
  ...typography,
  spacing,
})
