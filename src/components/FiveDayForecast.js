import { checkPropTypes } from 'prop-types';
import WeatherSummary from './WeatherSummary';

const FiveDayForecast = ({ forecast, activeDay, onActiveDayChanged }) => {

    return (
        <div>
            {forecast.slice(0, 5).map((weatherData, index) =>
                <WeatherSummary
                    key={index}
                    dayOfWeek={weatherData.dayOfWeek}
                    index={index}
                    icon={weatherData.icon}
                    highTemp={Math.round(weatherData.highTemp)}
                    lowTemp={Math.round(weatherData.lowTemp)}
                    isActive={index === activeDay}
                    onSelected={onActiveDayChanged}
                />
            )}
        </div>
    )

}

export default FiveDayForecast;