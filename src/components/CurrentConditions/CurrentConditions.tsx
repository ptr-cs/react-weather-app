import { Container, Row, Col } from 'react-bootstrap';

const CurrentConditions = ({ description }: { description: string }) => {
  return (
<Container className="h-100 d-flex flex-column">
      <Row className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center p-4 fs-2">
          {/* <FaCloudSun size={48} className="me-2" /> */}
          <span>{description}</span>
        </Col>
      </Row>
      <Row className="auto-height">
        <Col className="d-flex justify-content-start align-items-end">
          <span>Current Conditions</span>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentConditions;