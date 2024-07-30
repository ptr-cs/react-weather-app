import { Container, Row, Col } from 'react-bootstrap';
import { FaCalendar, FaClock } from 'react-icons/fa';

interface LocationInfoProps {
  city: string;
  state: string;
  date: string;
  timestamp: string;
}

function LocationInfo({ city, state, date, timestamp }: LocationInfoProps) {
  return (
    <Container>
      <Row className="d-flex justify-content-start align-items-center">
        <Col xs="auto" className="text-left fs-2">
          <span>{`${city}, ${state}`}</span>
        </Col>
        <Col xs="auto" className="text-left">
          <FaCalendar size={18} className="me-2 weather-icon" />
          <span>{date}</span>
        </Col>
        {/* <Col xs="auto" className="text-left">
          <FaClock size={18} className="me-2 weather-icon" />
          <span>{timestamp}</span>
        </Col> */}
      </Row>
    </Container>
  );
}

export default LocationInfo;