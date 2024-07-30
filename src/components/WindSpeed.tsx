import { Container, Row, Col } from 'react-bootstrap';
import { WiWindy } from 'react-icons/wi';

const WindSpeed = ({ value, unit }: { value: number, unit: string }) => {
  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiWindy size={48} className="weather-icon me-2" />
          <span>{value}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Wind Speed ({unit})</span>
        </Col>
      </Row>
    </Container>
  );
};

export default WindSpeed;