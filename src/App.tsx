import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.scss'; // Ensure this is the correct path to your SCSS file

const App = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const isLargeScreen = window.innerWidth >= 992;

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
    <div className="parent-container">
      <div className="content">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#" className='d-flex'>
              {/* <img src='src/assets/sun-colors.png' className='brand-image px-2'></img> */}
              React Weather
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOffcanvasToggle} />
            <Navbar.Collapse id="offcanvasNavbar">
              <Nav className="d-none d-lg-flex">
                <Nav.Link href="#home" title='Home'>
                  <i className="fas fa-cloud-sun"></i> Weather {/* Font Awesome weather icon */}
                </Nav.Link>
                <Nav.Link href="#settings" title='Settings'>
                  <i className="fas fa-cog"></i> Settings {/* Font Awesome settings icon */}
                </Nav.Link>
                <Nav.Link href="#about" title='About'>
                  <i className="fas fa-question-circle"></i> About {/* Font Awesome help icon */}
                </Nav.Link>
                <Nav.Link href="https://github.com" title='GitHub' target="_blank">
                  <i className="fab fa-github"></i> GitHub {/* Font Awesome GitHub icon */}
                </Nav.Link>
              </Nav>
              <Form className="d-flex d-none mx-2 d-lg-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
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
              <Nav.Link href="#home" onClick={handleOffcanvasClose}>
                <i className="fas fa-cloud-sun"></i> Weather {/* Font Awesome weather icon */}
              </Nav.Link>
              <Nav.Link href="#settings" onClick={handleOffcanvasClose}>
                <i className="fas fa-cog"></i> Settings {/* Font Awesome settings icon */}
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleOffcanvasClose}>
                <i className="fas fa-question-circle"></i> About {/* Font Awesome help icon */}
              </Nav.Link>
              <Nav.Link href="https://github.com" target="_blank" onClick={handleOffcanvasClose}>
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
      </div>
      <footer className="footer">
        <Container className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <span>&copy; {new Date().getFullYear()} React Weather. All rights reserved.</span>
          <Nav.Link href="https://www.accuweather.com" target="_blank" className="accuweather-button px-1">
            <span>Weather API provided by:</span>
            <img src="src/assets/accuweather.png" alt="AccuWeather" className='p-1' />
          </Nav.Link>
        </Container>
      </footer>
    </div>
  );
};

export default App;