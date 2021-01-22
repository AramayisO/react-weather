import PropTypes from "prop-types";
import Temperature from "./Temperature";
import WeatherIcon from './WeatherIcon';

const WeatherSummary = ({ dayOfWeek, icon, highTemp, lowTemp }) => (
  <div className="WeatherSummary">
    <p>{dayOfWeek}</p>
    <WeatherIcon iconId={icon} />
    <div className="WeatherSummary-temps">
      <Temperature temp={highTemp} />
      <Temperature temp={lowTemp} />
    </div>
  </div>
);

WeatherSummary.propTypes = {
    dayOfWeek: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    highTemp: PropTypes.number.isRequired,
    lowTemp: PropTypes.number.isRequired 
};
  

export default WeatherSummary;