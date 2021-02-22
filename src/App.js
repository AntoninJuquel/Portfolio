import React, { useRef } from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {

  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const blogRef = useRef(null)

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
      ref: blogRef
    },
    "Contact": {
      ref: contactRef
    }
  }

  return (
    <>
      <NavBar sections={sections} />
      <Introduction />
      <About refProp={aboutRef} contactRef={contactRef} />
      <Experience refProp={experienceRef} />
      <Projects refProp={projectsRef} />
      <Blog refProp={blogRef}/>
      <Contact refProp={contactRef} />
    </>
  )
}

export default App;
