
import React, { Component } from 'react';
import './App.css';
import WeatherDescriptionComponent from './components/WeatherDescriptionComponent';
import FormSubmitComponent from './components/FormSubmitComponent';

const API_KEY = '931347caa64945d581263f9624534500';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature:'',
      description:'',
      city: '',
      wind: '',
      className: '',
    };
  }

  getWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city!= 'null'){
      const weather_api = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`);
      const weatherDatas = await weather_api.json();
      const weatherReport = weatherDatas.data[0];
      if (weatherReport.weather.description === 'Clear Sky')
      {
        this.setState({
          temperature: weatherReport.temp,
          description: weatherReport.weather.description,
          city: weatherReport.city_name,
          wind: weatherReport.wind_spd,
          className: 'background-img-sunny'
        });
      }
      else if (weatherReport.weather.description === 'Rain') {
        this.setState({
          temperature: weatherReport.temp,
          description: weatherReport.weather.description,
          city: weatherReport.city_name,
          wind: weatherReport.wind_spd,
          className: 'background-img-rainy'
        });
      } else {
        this.setState({
          temperature: weatherReport.temp,
          description: weatherReport.weather.description,
          city: weatherReport.city_name,
          wind: weatherReport.wind_spd,
          className: 'background-img-cloudy'
        });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <WeatherDescriptionComponent
            temperature = {this.state.temperature}
            description = {this.state.description}
            city = {this.state.city}
            wind = {this.state.wind}
            class = {this.state.className}
          />
          <FormSubmitComponent getWeatherData = {this.getWeatherData}/>
        </div>
      </div>
    )
  }
}
  
  