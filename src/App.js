import React, { useRef } from 'react';
import './App.css';

import { ThemeProvider, useTheme, useMediaQuery } from "@material-ui/core";
import { LanguageProvider } from './providers/LanguageContext';
import { ModalProvider } from './providers/ModalContext';

import useStyles from "./utilities/Styles";
import theme from "./utilities/Theme";

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  const classes = useStyles()

  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"))

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
    <LanguageProvider >
      <ThemeProvider theme={theme}>
        <ModalProvider classes={classes}>
          <NavBar sections={sections} classes={classes} isMobile={isMobile} />
          <Introduction classes={classes} />
          <About refProp={aboutRef} contactRef={contactRef} classes={classes} />
          <Experience refProp={experienceRef} classes={classes} />
          <Projects refProp={projectsRef} classes={classes} isMobile={isMobile} />
          <Blog refProp={blogRef} classes={classes} />
          <Contact refProp={contactRef} classes={classes} />
        </ModalProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App;
