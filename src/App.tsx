import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Avatar } from './components/Avatar/Avatar';
import { Menu } from './components/Menu/Menu';
import { Button } from './components/Button/Button';

const profile = {
  header: 'Profile',
  name: 'Jane Doe',
  bio: 'This is a small bio description to let users express themselves',
  buttonText: 'Logout'
}

function App() {
  return (
    <div className="App">
      <Header text={profile.header} />
      <Avatar name={profile.name} bio={profile.bio} />
      <Menu />
      <Button text={profile.buttonText}/>
    </div>
  );
}

export { App };
