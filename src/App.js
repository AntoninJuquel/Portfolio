import React, { useRef } from 'react';
import './App.css';

import { ThemeProvider, createMuiTheme, makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { orange, red } from '@material-ui/core/colors';

import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
})

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: 52
  },
  subTitle:{
    fontSize: 32
  },
  container:{
    marginTop: 250,
    marginBottom: 250
  },
  textField: {
    background: 'linear-gradient(90deg, #cccccc,#FFFFFF, #cccccc)',
    border: 0,
    borderRadius: 3,
    color: 'white',
  },
  buttonWrapper: {
    marginTop: 10
  },
  modal: {
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    padding: '6px 16px',
  },
  brand: {
    flexGrow: 1
  },
  brandText: {
    cursor: 'pointer'
  }
});

function App() {

  const classes = useStyles()

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
    <ThemeProvider theme={theme}>
      <NavBar sections={sections} classes={classes} isMobile={useMediaQuery(useTheme().breakpoints.down("sm"))} />
      <Introduction classes={classes} />
      <About refProp={aboutRef} contactRef={contactRef} classes={classes} />
      <Experience refProp={experienceRef} classes={classes} />
      <Projects refProp={projectsRef} classes={classes} />
      <Blog refProp={blogRef} classes={classes} />
      <Contact refProp={contactRef} classes={classes} />
    </ThemeProvider>
  )
}

export default App;
