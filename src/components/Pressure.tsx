import { Container, Row, Col } from 'react-bootstrap';
import { WiBarometer } from 'react-icons/wi';

interface PressureProps {
  value: number;
  unit: string;
}

function Pressure({ value, unit }: PressureProps) {
  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiBarometer size={48} className="me-2 weather-icon" />
          <span>{value}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Pressure ({unit})</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Pressure;