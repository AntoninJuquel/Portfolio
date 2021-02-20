import React from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';

function App() {

  const sections = {
    "About": {

    },
    "Experience": {

    },
    "Projects": {

    },
    "Blog": {

    },
    "Contact": {

    }
  }

  return (
    <>
      <NavBar sections={sections} />
      <Introduction />
    </>
  )
}

export default App;
