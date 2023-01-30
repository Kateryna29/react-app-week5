import React from "react";
export default function DateFormatForecast(props) {
  function day() {
    let date = new Date(props.dateForecast.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="DF">
      <div className="NameDayForecast">{day()}</div>
      <div className="row">
        <div className="col">
          <img
            src={props.dateForecast.condition.icon_url}
            alt={props.dateForecast.condition.description}
            title={props.dateForecast.condition.description}
          />
        </div>
        <div className="col">
          <div className="row">
            <div className="col" id="maxTemp">
              {Math.round(props.dateForecast.temperature.maximum)}°
            </div>
            <div className="col">
              {" "}
              {Math.round(props.dateForecast.temperature.minimum)}°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
