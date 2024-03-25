import React from 'react';

import { cnProfile } from './Profile.classname';

import { Header } from '../Header/Header';
import { Avatar } from '../Avatar/Avatar';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

import './Profile.css';

const profile = {
  header: 'Profile',
  name: 'Jane Doe',
  bio: 'This is a small bio description to let users express themselves',
  buttonText: 'Logout'
};

const Profile = () => {
  return (
    <div>
      <Header text={profile.header} />
      <Avatar name={profile.name} bio={profile.bio} />
      <Menu menuClassName={cnProfile('Menu')}/>
      <Button text={profile.buttonText}/>
    </div>
  );
};

export { Profile };
