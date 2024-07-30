import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.scss'; // Ensure this is the correct path to your SCSS file
import Weather from './components/Weather';
import Settings from './components/Settings';
import About from './components/About';

const App = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowOffcanvas(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
    <div className="parent-container">
      <div className="content">
        <Navbar bg="light" expand="lg" className='shadow'>
          <Container>
            <Navbar.Brand href="#" className='d-flex'>
              {/* <img src='src/assets/sun-colors.png' className='brand-image px-2'></img> */}
              React Weather
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOffcanvasToggle} />
            <Navbar.Collapse id="offcanvasNavbar">
              <Nav className="d-none d-lg-flex">
                <Nav.Link as={Link} to="/" href="#home" title='Home'>
                  <i className="fas fa-cloud-sun"></i> Weather {/* Font Awesome weather icon */}
                </Nav.Link>
                <Nav.Link as={Link} to="/settings" href="#settings" title='Settings'>
                  <i className="fas fa-cog"></i> Settings {/* Font Awesome settings icon */}
                </Nav.Link>
                <Nav.Link as={Link} to="/about" href="#about" title='About'>
                  <i className="fas fa-question-circle"></i> About {/* Font Awesome help icon */}
                </Nav.Link>
                <Nav.Link href="https://github.com/ptr-cs/react-weather-app" title='GitHub' target="_blank">
                  <i className="fab fa-github"></i> GitHub {/* Font Awesome GitHub icon */}
                </Nav.Link>
              </Nav>
              <Form className="d-flex d-none mx-2 d-lg-flex">
                <FormControl
                  type="search"
                  placeholder="Enter a location..."
                  className="me-2"
                  aria-label="Search"
                />
              <Button variant="outline-success">Fetch</Button>
            </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} className="custom-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" href="#home" onClick={handleOffcanvasClose}>
                <i className="fas fa-cloud-sun"></i> Weather {/* Font Awesome weather icon */}
              </Nav.Link>
              <Nav.Link as={Link} to="/settings" href="#settings" onClick={handleOffcanvasClose}>
                <i className="fas fa-cog"></i> Settings {/* Font Awesome settings icon */}
              </Nav.Link>
              <Nav.Link as={Link} to="/about" href="#about" onClick={handleOffcanvasClose}>
                <i className="fas fa-question-circle"></i> About {/* Font Awesome help icon */}
              </Nav.Link>
              <Nav.Link href="https://github.com/ptr-cs/react-weather-app" target="_blank" onClick={handleOffcanvasClose}>
                <i className="fab fa-github"></i> GitHub {/* Font Awesome GitHub icon */}
              </Nav.Link>
            </Nav>
            <Form className="d-flex d-lg-flex my-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer className="footer shadow">
        <Container className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <span>&copy; {new Date().getFullYear()} React Weather. All rights reserved.</span>
          <Nav.Link href="https://www.accuweather.com" target="_blank" className="accuweather-button px-1">
            <span>Weather API provided by:</span>
            <img src="src/assets/accuweather.png" alt="AccuWeather" className='p-1' />
          </Nav.Link>
        </Container>
      </footer>
    </div>
    </Router>
  );
};

export default App;