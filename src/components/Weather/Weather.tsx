import { Container, Row, Col } from 'react-bootstrap';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import WindSpeed from '../WindSpeed/WindSpeed';
import DewPoint from '../DewPoint/DewPoint';
import CloudCover from '../CloudCover/CloudCover';
import Visibility from '../Visibility/Visibility';
import Pressure from '../Pressure/Pressure';
import Temperature from '../Temperature/Temperature';
import UVIndex from '../UVIndex/UVIndex';
import RelativeHumidity from '../RelativeHumidity/RelativeHumidity';
import WindDirection from '../WindDirection/WindDirection';
import PastPrecipitation from '../PastPrecipitation/PastPrecipitation';
import WindChill from '../WindChill/WindChill';
import LocationInfo from '../LocationInfo/LocationInfo';
import './Weather.scss';
import { WeatherData, LocationData } from '../../context/AppContext';

interface WeatherProps {
  weatherData: WeatherData | null;
  locationData: LocationData | null;
}

const Weather: React.FC<WeatherProps> = ({ weatherData, locationData }) => {
  let pastPrecipitationData = [];
  
  if (!weatherData || !locationData) {
    return <>
      <div className="section-container d-flex w-75 mt-4 mx-auto flex-wrap flex-column w-50 justify-content-center align-items-center" style={{ gap: '10px' }}>
        <h1>Welcome to React Weather!</h1>
        <img src="src/assets/sun-colors.png" alt="Sun Colors" style={{ maxWidth: '256px' }} />
        <p className='fs-4'>
          You can proceed using the demo mode to explore the app's features. To view real-time weather data, navigate to the Settings page, switch off demo mode, enter your API key, and search for a city; the weather results will be on the Weather page.
        </p>
      </div>
    </>
    // return <div className="d-flex justify-content-center align-items-center">Loading...</div>;
  } else {
    pastPrecipitationData = [
      weatherData[0]["PrecipitationSummary"]["PastHour"]["Imperial"]["Value"],
      weatherData[0]["PrecipitationSummary"]["Past3Hours"]["Imperial"]["Value"],
      weatherData[0]["PrecipitationSummary"]["Past6Hours"]["Imperial"]["Value"],
      weatherData[0]["PrecipitationSummary"]["Past9Hours"]["Imperial"]["Value"],
      weatherData[0]["PrecipitationSummary"]["Past12Hours"]["Imperial"]["Value"],
      weatherData[0]["PrecipitationSummary"]["Past18Hours"]["Imperial"]["Value"],
      weatherData[0]["PrecipitationSummary"]["Past24Hours"]["Imperial"]["Value"]
    ]
  }
  
  
  
  return (
    <div className="d-flex justify-content-center">
      <Container className='m-4 w-auto'>
      <Row>
        <Col sm={12} id='locationInfo' className='shadow'>
          <LocationInfo city={locationData["LocalizedName"]} state={locationData["AdministrativeArea"]["ID"]} date={weatherData[0]["LocalObservationDateTime"]} />
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={12} id='currentConditions' className="d-flex flex-column shadow">
          <CurrentConditions description={weatherData[0]["WeatherText"]} />
        </Col>
        <Col md={2} sm={6} id='windSpeed' className='shadow'>
          <WindSpeed value={weatherData[0]["Wind"]["Speed"]["Imperial"]["Value"]} unit="mph" />
        </Col>
        <Col md={2} sm={6}>
          <Row id='dewPoint' className='shadow'>
            <DewPoint value={weatherData[0]["DewPoint"]["Imperial"]["Value"]} unit="F" />
          </Row>
          <Row id='cloudCover' className='shadow'>
            <CloudCover value={weatherData[0]["CloudCover"]} unit="%" />
          </Row>
        </Col>
        <Col md={2} sm={6} id='visibility' className='shadow'>
          <Visibility value={weatherData[0]["Visibility"]["Imperial"]["Value"]} unit="miles" />
        </Col>
        <Col md={2} sm={6} id='pressure' className='shadow'>
          <Pressure value={weatherData[0]["Pressure"]["Imperial"]["Value"]} unit="inHg" />
        </Col>
      </Row>
      <Row>
        <Col md={2} sm={6} id='temperature' className='shadow'>
          <Temperature value={weatherData[0]["Temperature"]["Imperial"]["Value"]} unit="F" />
        </Col>
        <Col md={2} sm={6}>
          <Row className='h-50 d-flex flex-column shadow' id='uvIndex'>
            <UVIndex value={weatherData[0]["UVIndex"]} />
          </Row>
          <Row className='h-50 d-flex flex-column shadow' id='relativeHumidity'>
            <RelativeHumidity value={weatherData[0]["RelativeHumidity"]} unit="%" />
          </Row>
        </Col>
        <Col md={2} sm={12} id='windDirection' className='shadow'>
          <WindDirection value={weatherData[0]["Wind"]["Direction"]["Degrees"]} />
        </Col>
        <Col md={4} sm={12} id='pastPrecipitation' className='shadow'>
          <PastPrecipitation data={pastPrecipitationData} />
        </Col>
        <Col md={2} sm={12} id='windChill' className='shadow'>
          <WindChill value={weatherData[0]['WindChillTemperature']['Imperial']['Value']} unit="F" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Weather;