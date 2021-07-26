import React, { ButtonHTMLAttributes } from 'react';
import { joinClassNames } from "../../utils";
import * as styles from './styles.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
}

export const Button: React.VFC<ButtonProps> = ({ label, className, ...props }) => (
  <button className={joinClassNames(styles.button, className)} {...props}>
    {label}
  </button>
);
