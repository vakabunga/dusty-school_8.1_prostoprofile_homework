import React from 'react';
import { Header } from '../Header/Header';
import { Avatar } from '../Avatar/Avatar';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';

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
      <Menu />
      <Button text={profile.buttonText}/>
    </div>
  );
};

export { Profile };
