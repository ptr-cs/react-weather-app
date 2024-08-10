import { Container, Row, Col } from 'react-bootstrap';
import { WiHumidity } from 'react-icons/wi';

interface RelativeHumidityProps {
  value: number;
  unit: string;
}

function RelativeHumidity({ value, unit }: RelativeHumidityProps) {
  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiHumidity size={48} className="me-2 weather-icon" />
          <span>{value}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Rel. Humidity ({unit})</span>
        </Col>
      </Row>
    </Container>
  );
}

export default RelativeHumidity;