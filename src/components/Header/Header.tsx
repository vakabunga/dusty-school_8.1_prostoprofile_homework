import React, { FC } from 'react';
import './Header.css';
import { cnHeader } from './Header.classname';
import Back from '../../img/back.svg';

type HeaderProps = {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <div className={cnHeader()}>
      <img className={cnHeader('Image')} src={Back} alt="back" />
      <p className={cnHeader('Text')}>{text}</p>
    </div>
  );
}

export { Header };
