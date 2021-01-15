import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherSummary from './WeatherSummary';

ReactDOM.render(
  <>
    <WeatherSummary
      dayOfWeek='Mon'
      icon='https://picsum.photos/id/1/200/200'
      highTemp={60} 
      lowTemp={32} 
    />

    <WeatherSummary 
      dayOfWeek='Tue' 
      icon='https://picsum.photos/id/2/200/200' 
      highTemp={60} 
      lowTemp={32} 
    />

    <WeatherSummary 
      dayOfWeek='Wed' 
      icon='https://picsum.photos/id/3/200/200' 
      highTemp={60} 
      lowTemp={32} 
    />

    <WeatherSummary 
      dayOfWeek='Thur' 
      icon='https://picsum.photos/id/4/200/200' 
      highTemp={60} 
      lowTemp={32} 
    />

    <WeatherSummary 
      dayOfWeek='Fri' 
      icon='https://picsum.photos/id/5/200/200' 
      highTemp={60} 
      lowTemp={32} 
    />
  </>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
