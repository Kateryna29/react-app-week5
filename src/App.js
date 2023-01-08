import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function WeatherResponse(respons) {
    setWeatherInfo({
      ready: true,
      dataCurrent: "Sunday 01:47",
      temperature: respons.data.temperature.current,
      feelslike: respons.data.temperature.feels_like,
      wind: respons.data.wind.speed,
      humadity: respons.data.temperature.humidity,
      description: respons.data.condition.description,
      iconUrl: respons.data.condition.icon_url,
      city: respons.data.city,
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="d-flex">
            <div className="p-2 flex-grow-1">
              <form>
                <div className="d-flex">
                  <div className="p-2 flex-grow-1">
                    <input
                      type="search"
                      placeholder="Enter a city.."
                      className="form-control"
                      autoFocus="on"
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
          <div className="d-flex">
            <div className="p-2 flex-grow-1">
              <h1 className="CityName">{weatherInfo.city}</h1>
              <div className="DateInfo">{weatherInfo.dataCurrent}</div>
              <div className="DescriptionInfo">{weatherInfo.description}</div>
              <div className="row">
                <div className="col-5" id="MainIcon">
                  <img
                    src={weatherInfo.iconUrl}
                    alt={weatherInfo.description}
                  />
                </div>
                <div className="col-5">
                  <span className="TempValue">
                    {Math.round(weatherInfo.temperature)}
                  </span>
                  <span className="metric"> °C</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary w-100">
                    Detailed information
                  </button>
                </div>
                <div className="col">
                  <button className="btn btn-primary w-100">
                    Hourly information
                  </button>
                </div>
                <div className="DetailedInfo">
                  <ul>
                    <li>Feels like: {Math.round(weatherInfo.feelslike)}°C</li>
                    <li>Humidity: {Math.round(weatherInfo.humadity)}%</li>
                    <li>Wind: {Math.round(weatherInfo.wind)}km/h</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-3">
              <ul className="DayForecast">
                <li>
                  <div className="NameDayForecast">Sat</div>
                  <div className="row">
                    <div className="col">
                      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">7°</div>
                        <div className="col">0°</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="NameDayForecast">Sat</div>
                  <div className="row">
                    <div className="col">
                      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">7°</div>
                        <div className="col">0°</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="NameDayForecast">Sat</div>
                  <div className="row">
                    <div className="col">
                      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">7°</div>
                        <div className="col">0°</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="NameDayForecast">Sat</div>
                  <div className="row">
                    <div className="col">
                      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">7°</div>
                        <div className="col">0°</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="NameDayForecast">Sat</div>
                  <div className="row">
                    <div className="col">
                      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">7°</div>
                        <div className="col">0°</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
          <a href="#" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    let city = "Paris";
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(WeatherResponse);
    return <div>Loading...</div>;
  }
}

export default App;
