import WeatherSummary from './WeatherSummary';

const FiveDayForecast = ({ forecast }) => {

    return (
        <div>
            {forecast.slice(0, 5).map(weatherData =>
                <WeatherSummary
                    dayOfWeek={weatherData.dayOfWeek}
                    icon={weatherData.icon}
                    highTemp={Math.round(weatherData.highTemp)}
                    lowTemp={Math.round(weatherData.lowTemp)} 
                />
            )}
        </div>
    )

}

export default FiveDayForecast;