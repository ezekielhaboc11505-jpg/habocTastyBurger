import React from 'react';
import Navbar from './components/Navbar';
import BurgerList from './components/BurgerList';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <BurgerList />
    </>
  );
};

export default App;
