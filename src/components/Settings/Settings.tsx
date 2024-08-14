import { Container, Row, Form, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import '../Transition.scss';

interface SettingsViewProps {
  apiKey: string;
  demoMode: boolean;
  onApiKeyChange: (newApiKey: string) => void;
  onDemoModeToggle: () => void;
}

const Settings: React.FC<SettingsViewProps> = ({ apiKey, demoMode, onApiKeyChange, onDemoModeToggle }) => {
  return (
    <Container className='m-4 w-auto section-container'>
      <h1 className='mb-4'>Settings</h1>
      <Row>
        <Form className="d-flex align-items-center" style={{ maxWidth: "500px" }}>
          <label htmlFor="demo-mode-switch" className="me-2">Demo mode: </label>
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
            aria-label="Demo Mode toggle switch"
            id="demo-mode-switch"
            className="ms-4"
            style={{ transform: "scale(1.5)" }}
            checked={demoMode}
            onChange={onDemoModeToggle}
          />
        </Form>
      </Row>
      <Row className="mt-3">
        <Form className="d-flex flex-wrap flex-row align-items-center" style={{ maxWidth: "500px", gap: "10px" }}>
          <label htmlFor="api-key-input" className="me-2">AccuWeather API Key: </label>
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
          <div className='d-flex flex-row' style={{ gap: '10px' }}>
          <FormControl
            type="password"
            placeholder="API Key"
            aria-label="API Key"
            id="api-key-input"
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            disabled={demoMode} // Disable when demo mode is on
          />
          </div>
        </Form>
      </Row>
      
    </Container>
  );
};

export default Settings;