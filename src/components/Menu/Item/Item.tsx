import React from 'react';
// import { CSSProperties } from 'react';
import { FC } from 'react';
import './Item.css';

type ItemProps = {
  listItemClass: string;
  text: string;
  listStyleImage: {};
  spanListItemClass: string;
}

const Item: FC<ItemProps> = ({ listItemClass, text, listStyleImage, spanListItemClass }) => {
  return (
    <li className={listItemClass} style={listStyleImage}>
      <span className={spanListItemClass}>{text}</span>
    </li>
  );
}

export { Item };
