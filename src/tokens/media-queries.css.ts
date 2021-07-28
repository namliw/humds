const breakpointTablet = '768px';
const breakpointMobile = '576px';

const desktop = `screen and (min-width: calc(${breakpointTablet} + 1px))`;
const tablet = `screen and (min-width: calc(${breakpointMobile} + 1px)) and (max-width: ${breakpointTablet})`;
const mobile = `screen and (max-width: ${breakpointMobile})`;

export const mediaQuery = {
  desktop,
  tablet,
  mobile,
};
