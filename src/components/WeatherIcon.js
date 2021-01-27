const WeatherIcon = ({ iconId }) => {
    const url = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    return (
        <img src={url} alt="weather icon" />
    )
}

export default WeatherIcon;