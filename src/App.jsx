import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './components/shared/Routes';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
