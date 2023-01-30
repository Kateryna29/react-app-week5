import React, { useState, useEffect } from "react";
import axios from "axios";

import HourlyFormatForecast from "./HourlyFormatForecast";

export default function DetailedInfo(props) {
  const [buttonActive, setButtonActive] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loaded, setLoaded] = useState(false);
  let lat = props.weather.latitude;
  let lon = props.weather.longitude;

  function showDetailedInfo(event) {
    event.preventDefault();
    setButtonActive("DetailedInfo");
  }

  function hourlyInfo(respons) {
    setWeatherInfo(respons.data.list);
    setLoaded(true);
    console.log(respons);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function countHourlyInfo(lat, lon) {
    const APIkey = "017d56650cd168d68067850318775d43";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=hourly&appid=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(hourlyInfo);
  }

  function showHourlyInfo(event) {
    event.preventDefault();
    setButtonActive("HourlyInfo");
    countHourlyInfo(lat, lon);
  }
  if (buttonActive === "") {
    return (
      <div className="Information">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary w-100"
              onClick={showDetailedInfo}
            >
              Detailed information
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-primary w-100"
              id="HourlyInformation"
              onClick={showHourlyInfo}
            >
              Hourly information
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    if (buttonActive === "DetailedInfo") {
      return (
        <div className="Information">
          <div className="row">
            <div className="col">
              <button className="btn btn-primary w-100">
                Detailed information
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary w-100"
                id="HourlyInformation"
                onClick={showHourlyInfo}
              >
                Hourly information
              </button>
            </div>
            <ul>
              <li>
                Feels like: {Math.round(props.weather.feelslike)}
                °C
              </li>
              <li>Humidity: {Math.round(props.weather.humadity)}%</li>
              <li>Wind: {Math.round(props.weather.wind)}km/h</li>
            </ul>
          </div>
        </div>
      );
    } else {
      if (loaded) {
        return (
          <div className="Information">
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={showDetailedInfo}
                >
                  Detailed information
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  id="HourlyInformation"
                >
                  Hourly information
                </button>
              </div>
              <ul size={10}>
                {weatherInfo.map(function (hourlyforecast, index) {
                  if (index < 12) {
                    return (
                      <li key={index} className="hours">
                        <HourlyFormatForecast
                          dateHourlyForecast={hourlyforecast}
                        />
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          </div>
        );
      } else {
        return null;
      }
    }
  }
}
