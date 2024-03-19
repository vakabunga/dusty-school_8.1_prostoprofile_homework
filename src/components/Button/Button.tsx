import React, { FC } from 'react';
import './Button.css';
import { cnButton } from './Button.classname';

type ButtonProps = {
  text: string;
};

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className={cnButton()}>{text}</button>
  );
};

export { Button };
