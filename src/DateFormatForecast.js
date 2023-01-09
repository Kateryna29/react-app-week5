import React from "react";
export default function DateFormatForecast(props) {
  function day() {
    let date = new Date(props.dateForecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
          <div>
          <div className="NameDayForecast">{day()}</div>
          <div className="row">
            <div className="col">
              <img
                src={props.dateForecast.condition.icon_url}
                alt={props.dateForecast.condition.description}
              />
            </div>
            <div className="col">
              <div className="row">
                <div className="col" style={{ fontsize: "16px" }}>
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
