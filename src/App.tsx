import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';

const menuHeader = {
  text: 'Profile'
}

function App() {
  return (
    <div className="App">
      <Header text={menuHeader.text} />
    </div>
  );
}

export { App };
