import { Container, Row, Form, FormControl, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import './Transition.scss';

interface SettingsViewProps {
  apiKey: string;
  demoMode: boolean;
  onApiKeyChange: (newApiKey: string) => void;
  onDemoModeToggle: () => void;
}

const Settings: React.FC<SettingsViewProps> = ({ apiKey, demoMode, onApiKeyChange, onDemoModeToggle }) => {
  console.log(`demoMode: ${demoMode}`);
  return (
    <Container className='m-4 w-auto section-container'>
      <Row>
        <Form className="d-flex flex-wrap flex-row align-items-center" style={{ maxWidth: "500px", gap: "10px" }}>
          <label className="me-2">AccuWeather API Key: </label>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-api-key">
                This API key is used to fetch weather data from AccuWeather.
              </Tooltip>
            }
          >
            <span>
              <FaInfoCircle className="text-muted" />
            </span>
          </OverlayTrigger>
          <FormControl
            type="password"
            placeholder="API Key"
            aria-label="API Key"
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            disabled={demoMode} // Disable when demo mode is on
          />
          <Button disabled={demoMode} variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Row>
      <Row className="mt-3">
        <Form className="d-flex align-items-center" style={{ maxWidth: "500px" }}>
          <label className="me-2">Demo mode: </label>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-demo-mode">
                Enable this option to use the application in demo mode without real data (no API Key is needed).
              </Tooltip>
            }
          >
            <span>
              <FaInfoCircle className="text-muted" />
            </span>
          </OverlayTrigger>
          <Form.Check
            type="switch"
            id="demo-mode-switch"
            className="ms-4"
            style={{ transform: "scale(1.5)" }}
            checked={demoMode}
            onChange={onDemoModeToggle}
          />
        </Form>
      </Row>
    </Container>
  );
};

export default Settings;