import { Container, Row, Col } from 'react-bootstrap';
import { WiHorizonAlt } from 'react-icons/wi';

interface VisibilityProps {
  value: number;
  unit: string;
}

function Visibility({ value, unit }: VisibilityProps) {
  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiHorizonAlt size={48} className="me-2 weather-icon" />
          <span>{value}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Visibility ({unit})</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Visibility;