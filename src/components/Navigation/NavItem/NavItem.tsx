import React, { AnchorHTMLAttributes } from 'react';
import { joinClassNames } from '../../../utils';
import * as styles from './styles.css';

export type NavItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string;
};

export const NavItem: React.VFC<NavItemProps> = ({
  text, className, ...props
}) => (
  <a className={joinClassNames(className, styles.navItem)} {...props}>
    {text}
  </a>
);
