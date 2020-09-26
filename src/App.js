import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Footer from './components/Footer';
import HomePage from './pages/main pages/HomePage';
import AboutPage from './pages/main pages/AboutPage';
import ContactPage from './pages/main pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const content = {
    brand: 'JUQUEL Antonin',
    pages: [
      {
        id: 1,
        title: 'Home',
        path: '/Portfolio/home',
        render: <HomePage />
      },
      {
        id: 2,
        title: 'About',
        path: '/Portfolio/about',
        render: <AboutPage />
      },
      {
        id: 3,
        title: 'Contact',
        path: '/Portfolio/contact',
        render: <ContactPage />
      },
    ]
  }


  const renderLinks = () => {
    return content.pages.map(page => {
      return <Link key={page.id} className='nav-link' to={page.path}>{page.title}</Link>
    })
  }

  const renderRoutes = () => {
    return content.pages.map(route => {
      return <Route key={route.id} path={route.path} render={() => route.render} />
    })
  }

  return (
    <Router>

      <Container className='p-0' fluid={true}>

        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>{content.brand}</Navbar.Brand>

          <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
          <Navbar.Collapse id='navbar-toggle'>
            <Nav className='ml-auto'>
              {renderLinks()}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path='/Portfolio/' render={() => (
          <Redirect to='/Portfolio/home' />
        )} />

        {renderRoutes()}

        <ScrollToTop />
        <Footer />

      </Container>
    </Router>
  );
}

export default App;
