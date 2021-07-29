import { createGlobalTheme } from '@vanilla-extract/css';
import { colour } from './colours.css';
import { spacing } from './spacing.css';
import { typography } from './typography.css';

export * from './media-queries.css';

// CSS variables
export const vars = createGlobalTheme(':root', {
  colour,
  spacing,
  ...typography,
});
