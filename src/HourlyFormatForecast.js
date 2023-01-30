import React from "react";
export default function HourlyFormatForecast(props) {
  function hour() {
    let date = new Date(props.dateHourlyForecast.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}:00`;
    } else {
      hours = `${hours}:00`;
    }
    return hours;
  }
  return (
    <div>
      <div className="row">
        <div className="col">{hour()}</div>
        <div className="col">
          <img
            src={`http://openweathermap.org/img/w/${props.dateHourlyForecast.weather[0].icon}.png`}
            alt={props.dateHourlyForecast.weather[0].description}
          />
        </div>
        <div className="col">
          <div>{Math.round(props.dateHourlyForecast.main.temp)}°</div>
        </div>
      </div>
    </div>
  );
}
