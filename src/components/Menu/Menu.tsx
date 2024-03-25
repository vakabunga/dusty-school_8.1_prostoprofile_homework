import React from 'react';
import { FC } from 'react';

import { Item } from './Item/Item';
import { cnMenu } from './Menu.classname';

import Key from '../../img/key.svg';
import Chat from '../../img/chat.svg';
import Bell from '../../img/bell.svg';
import Storage from '../../img/storage.svg';
import Help from '../../img/help.svg';
import Invite from '../../img/invite.svg';

import './Menu.css';

type MenuProps = {
  menuClassName? : string;
};

const menuList = [
  {
    name: 'Account',
    imageUrl: {"list-style-image": `url(${Key})`}
  },
  {
    name: 'Chat Settings',
    imageUrl: {'list-style-image': `url(${Chat})`}
  },
  {
    name: 'Notifications',
    imageUrl: {'list-style-image': `url(${Bell})`}
  },
  {
    name: 'Storage',
    imageUrl: {'list-style-image': `url(${Storage})`}
  },
  {
    name: 'Help',
    imageUrl: {'list-style-image': `url(${Help})`}
  },
  {
    name: 'Invite a friend',
    imageUrl: {'list-style-image': `url(${Invite})`}
  }
];


const Menu: FC<MenuProps> = (menuClassName) => {
  return (
    <div className={cnMenu(null, menuClassName.menuClassName)}>
      <ul className={cnMenu('List')}>
        {menuList.map((item, index) => <Item key={index} text={item.name} listStyleImage={item.imageUrl} />)}
      </ul>
    </div>
  );
};

export { Menu };
