import React, { useState } from "react";
import axios from "axios";

export default function ForecastDay(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function ForecastrResponse(respons) {
    console.log(respons.data);
    setForecast(respons.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <ul className="DayForecast">
        <li>
          <div className="NameDayForecast">Sat</div>
          <div className="row">
            <div className="col">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                alt="description"
              />
            </div>
            <div className="col">
              <div className="row">
                <div className="col bold">
                  {Math.round(forecast[0].temperature.maximum)}°
                </div>
                <div className="col">
                  {" "}
                  {Math.round(forecast[0].temperature.minimum)}°°
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  } else {
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.date.city}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(ForecastrResponse);
    return null;
  }
}
