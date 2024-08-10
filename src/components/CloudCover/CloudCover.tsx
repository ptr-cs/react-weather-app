import { Container, Row, Col } from 'react-bootstrap';
import { WiCloudy } from 'react-icons/wi';

interface CloudCoverProps {
  value: number;
  unit: string;
}

function CloudCover({ value, unit }: CloudCoverProps) {
  return (
    <Container>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          <WiCloudy size={48} className="me-2 weather-icon" />
          <span>{value}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Cloud Cover ({unit})</span>
        </Col>
      </Row>
    </Container>
  );
}

export default CloudCover;