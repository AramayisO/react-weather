import React from 'react';
import { getWeatherData, millisecondsToDayOfWeek } from './utils';
import WeatherDetails from './WeatherDetails';
import FiveDayForecast from './FiveDayForecast';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      weather: null,
      error: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // If we successfully get data from the weather API, then we
          // update our state with the new data that we got.
          const weatherData = await getWeatherData(latitude, longitude);
          this.setState({
            weather: weatherData,
            isLoading: false,
          });
        } catch(error) {
          // If there's a problem getting data from the API, we want to inform
          // the user that there was an error.
          this.setState({
            error: 'Oh no 😔 We were unable to get weather data at this time.',
            isLoading: false
          });
        }

      },
      (error) => {
        // If there's an error when we try to get the users current location,
        // for example if the user blocks location services, then we want to
        // show the user an error message.
        this.setState({
          error: 'Ooops 😓 We were unable to get your current location.',
          isLoading: false
        })
      }
    )
  }

  render() {

    const { isLoading, weather, error } = this.state;

    // Instead of doing nested ternary statements, I pulled this section out
    // into a variable to make the code a little bit easier to read. The
    // 'contets' variable just stores some JSX, and we can tell React to render
    // that JSX by putting the variable in curly braces.
    const content = (
      <>
        {error
          ? <p>{error}</p>
          : weather &&
            <>
              <WeatherDetails
                  location="Current Location"
                  dayOfWeek={millisecondsToDayOfWeek(weather.current.dt * 1000)}
                  weatherCondition={weather.current.weather[0].description}
                  icon={weather.current.weather[0].icon}
                  units="imperial"
                  currentTemp={weather.current.temp}
                  lowTemp={weather.daily[0].temp.min}
                  highTemp={weather.daily[0].temp.max}
                  precipitation={weather.daily[0].pop * 100} 
                  humidity={weather.current.humidity} 
                  windSpeed={weather.current.wind_speed}
              />
              <FiveDayForecast forecast={
                weather.daily.map(data => {
                  return {
                    dayOfWeek: millisecondsToDayOfWeek(data.dt * 1000),
                    icon: data.weather[0].icon,
                    highTemp: data.temp.max,
                    lowTemp: data.temp.min
                  }                  
                })
              } />
              {/* {weather.daily.map((data, index) => (
                <WeatherSummary
                  key={data.dt}
                  dayOfWeek='monday'
                  icon={`https://picsum.photos/id/${index}/200/200`}
                  highTemp={data.temp.max}
                  lowTemp={data.temp.min}/>
              ))} */}
            </>
        }
      </>
    )

    return (
      <div>
        {isLoading
          ? <p>Loading...⏳</p>
          : <>{content}</>
        }
      </div>
    )
  }

};

export default App;


