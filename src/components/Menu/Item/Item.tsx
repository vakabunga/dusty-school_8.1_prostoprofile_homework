import React from 'react';
import { FC } from 'react';

import { cnMenu } from '../Menu.classname';

type ItemProps = {
  text: string;
  listStyleImage: {};
};

const Item: FC<ItemProps> = ({ text, listStyleImage }) => {
  return (
    <li className={cnMenu('ListItem')} style={listStyleImage}>
      <span className={cnMenu('ListItemSpan')}>{text}</span>
    </li>
  );
};

export { Item };
