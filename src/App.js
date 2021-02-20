import React from 'react';
import './App.css';

import NavBar from "./components/Navbar";

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
    <NavBar sections={sections} />
  )
}

export default App;
