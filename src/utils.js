export const getCoordinates = async (location) => {
    const apiKey = process.env.REACT_APP_MAP_QUEST_API_KYE;
    const apiUrl = 'http://www.mapquestapi.com/geocoding/v1/address';
    const response = await fetch(`${apiUrl}?key=${apiKey}&location=${location}`)
    const data = await response.json();
    return data.results[0].locations[0].latLng;
};

export const getWeatherData = async (latitude, longitude, units='imperial') => {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    const response = await fetch(url);
    // There's a lot of data in the returned object, but we'll only need
    // the current weather and the daily 7 day forecast for the project.
    const { current, daily } = await response.json();
    return { current, daily };
};