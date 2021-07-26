import React, { ButtonHTMLAttributes } from 'react';
import {joinClassNames} from "../../utils";
import { buttonClassName } from './styles.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
}

export const Button = ({
  label,
  className,
  ...props
}: ButtonProps) => (
        <button
          type="button"
          className={joinClassNames(buttonClassName, className)}
          // className={joinClassNames(className)}
          {...props}
      >
        {label}
      </button>
);
