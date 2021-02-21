import React, { useRef } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';

function App() {

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)

  const sections = {
    "About": {
      ref: aboutRef
    },
    "Experience": {
      ref: experienceRef
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
      <Experience refProp={experienceRef} />
    </>
  )
}

export default App;
