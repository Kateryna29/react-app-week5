import React from "react";
import WeatherTempChange from "./WeatherTempChange";
import DateFormater from "./DateFormater";

export default function Searching(props) {
  return (
    <div className="mainInfo">
      <h1 className="CityName">
        {props.date.city}, {props.date.country}
      </h1>
      <div className="DateInfo">
        <DateFormater date={props.date.dataCurrent} />
      </div>
      <div className="DescriptionInfo">{props.date.description}</div>
      <div className="row">
        <div className="col-5" id="MainIcon">
          <img src={props.date.iconUrl} alt={props.date.description} />
        </div>
        <div className="col-5">
          <WeatherTempChange celsius={Math.round(props.date.temperature)} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary w-100">
            Detailed information
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary w-100" id="HourlyInformation">
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
  );
}
