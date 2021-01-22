import WeatherSummary from './WeatherSummary';

const FiveDayForecast = ({ forecast, activeDay }) => {

    return (
        <div>
            {forecast.slice(0, 5).map((weatherData, index) =>
                <WeatherSummary
                    dayOfWeek={weatherData.dayOfWeek}
                    icon={weatherData.icon}
                    highTemp={Math.round(weatherData.highTemp)}
                    lowTemp={Math.round(weatherData.lowTemp)}
                    isActive={index === activeDay}
                />
            )}
        </div>
    )

}

export default FiveDayForecast;