import React, { FC } from 'react';
import './Header.css';
import { cnHeader } from './Header.classname';
// import back from './back.svg';

type HeaderProps = {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <div className={cnHeader()}>
      <img className={cnHeader('Image')} src='../../img/back.svg' alt="back" />
      <button className={cnHeader('Button')}>{text}</button>
    </div>
  );
}

export { Header };
