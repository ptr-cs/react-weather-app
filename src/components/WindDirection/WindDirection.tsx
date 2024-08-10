import { Container, Row, Col } from 'react-bootstrap';
import { WiWindDeg } from 'react-icons/wi';

const WindDirection = ({ value }: { value: number }) => {
  let direction = '';

  if (value >= 337.5 || value < 22.5) {
    direction = 'N';
  } else if (value >= 22.5 && value < 67.5) {
    direction = 'NE';
  } else if (value >= 67.5 && value < 112.5) {
    direction = 'E';
  } else if (value >= 112.5 && value < 157.5) {
    direction = 'SE';
  } else if (value >= 157.5 && value < 202.5) {
    direction = 'S';
  } else if (value >= 202.5 && value < 247.5) {
    direction = 'SW';
  } else if (value >= 247.5 && value < 292.5) {
    direction = 'W';
  } else if (value >= 292.5 && value < 337.5) {
    direction = 'NW';
  }
  
  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiWindDeg size={48} className="weather-icon me-2" />
          <span>{value}°</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Wind Dir. ({direction})</span>
        </Col>
      </Row>
    </Container>
  );
};

export default WindDirection;