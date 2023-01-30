import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import Searching from "./Searching";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentLocation from "./CurrentLocation";
import DateFormater from "./DateFormater";
import DetailedInfo from "./DetailedInfo";

export default class Main extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
  };

  state = {
    city: this.props.city,
  };

  componentWillMount() {
    this.refresh(this.state.city);
  }

  refreshWeatherFromParams(params) {
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${params}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then((respons) => {
      this.setState({
        city: respons.data.city,
        weather: {
          dataCurrent: new Date(respons.data.time * 1000),
          temperature: respons.data.temperature.current,
          feelslike: respons.data.temperature.feels_like,
          wind: respons.data.wind.speed,
          humadity: respons.data.temperature.humidity,
          description: respons.data.condition.description,
          iconUrl: respons.data.condition.icon_url,
          country: respons.data.country,
          longitude: respons.data.coordinates.longitude,
          latitude: respons.data.coordinates.latitude,
        },
      });
    });
  }

  refreshWeatherFromСurrentLocation = (latitude, longitude) => {
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then((respons) => {
      this.refreshWeatherFromParams({
        city: respons.data.city,
      });
    });
  };

  refresh = (city) => {
    this.refreshWeatherFromParams(`${city}`);
  };

  render() {
    if (this.state.weather) {
      return (
        <div className="App">
          <div className="container">
            <div className="d-inline-flex p-1">
              <Searching refresh={this.refresh} />

              <div className="p-3">
                <CurrentLocation
                  refresh={this.refreshWeatherFromСurrentLocation}
                />
              </div>
            </div>{" "}
            <div className="d-flex">
              <div className="p-2 flex-grow-1">
                <div className="mainInfo">
                  <h1 className="CityName">
                    {this.state.city}, {this.state.weather.country}
                  </h1>
                  <div className="DateInfo">
                    <DateFormater date={this.state.weather.dataCurrent} />
                  </div>
                  <div className="DescriptionInfo">
                    {this.state.weather.description}
                  </div>
                  <div className="row">
                    <div className="col-5" id="MainIcon">
                      <img
                        src={this.state.weather.iconUrl}
                        alt={this.state.weather.description}
                        title={this.state.weather.description}
                      />
                    </div>
                    <div className="col-5">
                      <div className="WeatherTempChange">
                        <span className="TempValue">
                          {Math.round(this.state.weather.temperature)}
                        </span>
                        <span className="unit">°C </span>
                      </div>
                    </div>
                  </div>

                  <DetailedInfo
                    weather={this.state.weather}
                    city={this.state.city}
                  />
                </div>
              </div>
              <div className="p-5">
                <ForecastDay city={this.state.city} />
              </div>
            </div>
          </div>
          <footer>
            This project was coded by Kateryna Nykonenko and is{" "}
            <a
              href="https://github.com/Kateryna29/react-app-week5"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://boisterous-beijinho-95bd37.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
