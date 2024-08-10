import { Container, Row, Col } from 'react-bootstrap';
import { WiRaindrop } from 'react-icons/wi';

interface DewPointProps {
  value: number;
  unit: string;
}

function DewPoint({ value, unit }: DewPointProps) {
  return (
    <Container>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiRaindrop size={48} className="me-2 weather-icon" />
          <span>{value}°</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Dew Point ({unit})</span>
        </Col>
      </Row>
    </Container>
  );
}

export default DewPoint;