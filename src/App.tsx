import { useState } from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
    </div>
  )
}

export default App
