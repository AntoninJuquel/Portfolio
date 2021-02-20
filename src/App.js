import React, { useRef } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';

function App() {

  const aboutRef = useRef(null)

  const sections = {
    "About": {
      ref: aboutRef
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
      <About refProp={aboutRef} />
    </>
  )
}

export default App;
