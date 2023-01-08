import React, { useState } from "react";
import axios from "axios";

import Searching from "./Searching";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.CityValue);
  function WeatherResponse(respons) {
    setWeatherInfo({
      ready: true,
      dataCurrent: new Date(respons.data.time * 1000),
      temperature: respons.data.temperature.current,
      feelslike: respons.data.temperature.feels_like,
      wind: respons.data.wind.speed,
      humadity: respons.data.temperature.humidity,
      description: respons.data.condition.description,
      iconUrl: respons.data.condition.icon_url,
      city: respons.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function UpdateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(WeatherResponse);
  }
  if (weatherInfo.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="d-flex">
            <div className="p-2 flex-grow-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="p-2 flex-grow-1">
                    <input
                      type="search"
                      placeholder="Enter a city.."
                      className="form-control"
                      autoFocus="on"
                      onChange={UpdateCity}
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="p-3">
              <button className="btn btn-primary w-100">
                Current location
              </button>
            </div>
          </div>
          <Searching date={weatherInfo} />
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
          <a href="#" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}

export default App;
