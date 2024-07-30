import { Container, Row, Col } from 'react-bootstrap';
import { WiDaySunny } from 'react-icons/wi';

const UVIndex = ({ value }: { value: number }) => {
  return (
    <Container className='h-100 d-flex flex-column'>
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
        <Col className="d-flex align-items-center justify-content-center fs-2">
          <WiDaySunny size={48} className="me-2 weather-icon" />
          <span>{value}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>UV Index</span>
        </Col>
      </Row>
    </Container>
  );
};

export default UVIndex;