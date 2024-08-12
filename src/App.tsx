import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.scss'; // Ensure this is the correct path to your SCSS file
import Weather from './components/Weather/Weather';
import Settings from './components/Settings/Settings';
import About from './components/About/About';
import Sitemap from './components/Sitemap/Sitemap';
import { useAppContext } from './context/AppContext';

const App = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  
  const { state, handleApiKeyChange, handleDemoModeToggle, getLocationInfo, getCurrentConditions } = useAppContext();

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);
  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const [searchInput, setSearchInput] = useState('');
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  
  useEffect(() => {
    // This effect runs whenever locationData changes
    if (state.locationData) {
      if (state.locationData !== null) {
        getCurrentConditions(state.locationData["Key"]);
      }
      // Here you can perform further actions based on the new locationData
    }
  }, [state.locationData]); // Dependency array includes locationData

  const handleSearchButton = async () => {
    await doLocationSearch(); 
  }
  
  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await doLocationSearch();
  };
  
  const doLocationSearch = async () => {
    if (searchInput.trim()) {
      await getLocationInfo(searchInput);
    }
  }

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
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="content">
        <Navbar bg="light" expand="lg" className='shadow'>
          <Container>
            <Navbar.Brand className='d-flex'>
              React Weather
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOffcanvasToggle} />
            <Navbar.Collapse id="offcanvasNavbar">
              <Nav className="d-none d-lg-flex">
                <Nav.Link as={Link} to="/">
                  <i className="fas fa-cloud-sun"></i> Weather
                </Nav.Link>
                <Nav.Link as={Link} to="/settings">
                  <i className="fas fa-cog"></i> Settings
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  <i className="fas fa-question-circle"></i> About
                </Nav.Link>
                <Nav.Link href="https://github.com/ptr-cs/react-weather-app" target="_blank">
                  <i className="fab fa-github"></i> GitHub
                </Nav.Link>
              </Nav>
              <Form className="d-flex d-none mx-2 d-lg-flex" onSubmit={handleSearchSubmit}>
                <FormControl
                  type="search"
                  placeholder="Enter a city..."
                  className="me-2 get-weather-input"
                  aria-label="Enter a city to get weather data for"
                  value={searchInput}
                  onChange={handleSearchChange}
                />
              <Button variant="primary" onClick={handleSearchButton} className='get-weather-button'>Get Weather</Button>
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
              <Nav.Link as={Link} to="/" onClick={handleOffcanvasClose}>
                <i className="fas fa-cloud-sun"></i> Weather {/* Font Awesome weather icon */}
              </Nav.Link>
              <Nav.Link as={Link} to="/settings" onClick={handleOffcanvasClose}>
                <i className="fas fa-cog"></i> Settings {/* Font Awesome settings icon */}
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleOffcanvasClose}>
                <i className="fas fa-question-circle"></i> About {/* Font Awesome help icon */}
              </Nav.Link>
              <Nav.Link href="https://github.com/ptr-cs/react-weather-app" target="_blank" onClick={handleOffcanvasClose}>
                <i className="fab fa-github"></i> GitHub {/* Font Awesome GitHub icon */}
              </Nav.Link>
            </Nav>
            <Form className="d-flex d-lg-flex my-2 flex-wrap gap" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Enter a City..."
                className="me-2 get-weather-input"
                aria-label="Enter a city to get weather data for"
                value={searchInput}
                onChange={handleSearchChange}
              />
              <Button variant="primary" onClick={handleSearchButton} className='get-weather-button'
              >Get Weather</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
        <div id="main-content">
        <Routes >
          <Route path="/" element={<Weather weatherData={state.weatherData} locationData={state.locationData}/>} />
          <Route path="/settings" element={<Settings apiKey={state.apiKey}
              demoMode={state.demoMode}
              onApiKeyChange={handleApiKeyChange}
              onDemoModeToggle={handleDemoModeToggle} />} />
          <Route path="/about" element={<About />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
        </div>
      </div>
      <footer className="footer shadow border-top">
        <Container className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <span>&copy; {new Date().getFullYear()} React Weather.</span>
          <Link className='mx-2 text-body' to="/sitemap">Site Map.</Link>
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