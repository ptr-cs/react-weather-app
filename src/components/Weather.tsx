import { Container, Row, Col } from 'react-bootstrap';
import CurrentConditions from './CurrentConditions';
import WindSpeed from './WindSpeed';
import DewPoint from './DewPoint';
import CloudCover from './CloudCover';
import Visibility from './Visibility';
import Pressure from './Pressure';
import Temperature from './Temperature';
import UVIndex from './UVIndex';
import RelativeHumidity from './RelativeHumidity';
import WindDirection from './WindDirection';
import PastPrecipitation from './PastPrecipitation';
import WindChill from './WindChill';
import LocationInfo from './LocationInfo';
import './Weather.scss';
import { WeatherData, LocationData } from '../models/WeatherModel';

interface WeatherProps {
  weatherData: WeatherData | null;
  locationData: LocationData | null;
}

const Weather: React.FC<WeatherProps> = ({ weatherData, locationData }) => {
  
  if (!weatherData || !locationData) {
    return <div className="d-flex justify-content-center align-items-center">Loading...</div>;
  }
  
  return (
    <div className="d-flex justify-content-center">
      <Container className='m-4 w-auto'>
      <Row>
        <Col sm={12} id='locationInfo' className='shadow'>
          <LocationInfo city={locationData["LocalizedName"]} state={locationData["AdministrativeArea"]["ID"]} date={weatherData["Headline"]["EffectiveDate"]} timestamp="" />
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={12} id='currentConditions' className="d-flex flex-column shadow">
          <CurrentConditions description={weatherData["DailyForecasts"][0]["Day"]["IconPhrase"]} />
        </Col>
        <Col md={2} sm={6} id='windSpeed' className='shadow'>
          <WindSpeed value={weatherData["DailyForecasts"][0]["Day"]["Wind"]["Speed"]["Value"]} unit="mph" />
        </Col>
        <Col md={2} sm={6}>
          <Row id='dewPoint' className='shadow'>
            <DewPoint value={55} unit="F" />
          </Row>
          <Row id='cloudCover' className='shadow'>
            <CloudCover value={weatherData["DailyForecasts"][0]["Day"]["CloudCover"]} unit="%" />
          </Row>
        </Col>
        <Col md={2} sm={6} id='visibility' className='shadow'>
          <Visibility value={10} unit="miles" />
        </Col>
        <Col md={2} sm={6} id='pressure' className='shadow'>
          <Pressure value={1013} unit="hPa" />
        </Col>
      </Row>
      <Row>
        <Col md={2} sm={6} id='temperature' className='shadow'>
          <Temperature value={weatherData["DailyForecasts"][0]["Day"]["Temperature"]} unit="F" />
        </Col>
        <Col md={2} sm={6}>
          <Row className='h-50 d-flex flex-column shadow' id='uvIndex'>
            <UVIndex value={5} />
          </Row>
          <Row className='h-50 d-flex flex-column shadow' id='relativeHumidity'>
            <RelativeHumidity value={60} unit="%" />
          </Row>
        </Col>
        <Col md={2} sm={12} id='windDirection' className='shadow'>
          <WindDirection value={weatherData["DailyForecasts"][0]["Day"]["Wind"]["Direction"]["Degrees"]} />
        </Col>
        <Col md={4} sm={12} id='pastPrecipitation' className='shadow'>
          <PastPrecipitation data={[1, 2, 3, 4, 5, 6, 7]} />
        </Col>
        <Col md={2} sm={12} id='windChill' className='shadow'>
          <WindChill value={70} unit="F" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Weather;