import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Avatar } from './components/Avatar/Avatar';
import { Menu } from './components/Menu/Menu';

const menuHeader = {
  text: 'Profile'
}

const userAvatar = {
  name: 'Jane Doe',
  bio: 'This is a small bio description to let users express themselves'
}

function App() {
  return (
    <div className="App">
      <Header text={menuHeader.text} />
      <Avatar name={userAvatar.name} bio={userAvatar.bio} />
      <Menu />
    </div>
  );
}

export { App };
