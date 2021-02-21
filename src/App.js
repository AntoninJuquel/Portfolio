import React, { useRef } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  const sections = {
    "About": {
      ref: aboutRef
    },
    "Experience": {
      ref: experienceRef
    },
    "Projects": {
      ref: projectsRef
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
      <Projects refProp={projectsRef} />
    </>
  )
}

export default App;
