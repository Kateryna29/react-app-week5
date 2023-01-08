import React from "react";
import DateFormater from "./DateFormater";

export default function Searching(props) {
  return (
    <div className="d-flex">
      <div className="p-2 flex-grow-1">
        <h1 className="CityName">{props.date.city}</h1>
        <div className="DateInfo">
          <DateFormater date={props.date.dataCurrent} />
        </div>
        <div className="DescriptionInfo">{props.date.description}</div>
        <div className="row">
          <div className="col-5" id="MainIcon">
            <img src={props.date.iconUrl} alt={props.date.description} />
          </div>
          <div className="col-5">
            <span className="TempValue">
              {Math.round(props.date.temperature)}
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
              <li>Feels like: {Math.round(props.date.feelslike)}°C</li>
              <li>Humidity: {Math.round(props.date.humadity)}%</li>
              <li>Wind: {Math.round(props.date.wind)}km/h</li>
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
  );
}
