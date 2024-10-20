import { Container } from 'react-bootstrap';
import '../Transition.scss';

const About = () => {
  return (
    <Container className="section-container d-flex flex-column align-items-center text-center mt-4">
      <h1>About</h1>
      <img src="/sun-colors.png" alt="" style={{ maxWidth: '256px' }} />
      <p className="mt-3 fs-4">
        This app is a simple single-page application (SPA) that displays weather information using the AccuWeather API. The UI is built using React and Bootstrap, and the app is hosted via Azure. The complete source code is available on GitHub (link in the menu).
      </p>
    </Container>
  );
};

export default About;