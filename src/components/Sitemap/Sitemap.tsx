import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <Container className='m-4 w-auto section-container'>
      <h1 className='mb-4'>Site Map</h1>
        <nav>
        <ul>
            <li><Link to="/">Weather</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://github.com/ptr-cs/react-weather-app" target="_blank">GitHub</a></li>
        </ul>
        </nav>
    </Container>
  );
};

export default Sitemap;