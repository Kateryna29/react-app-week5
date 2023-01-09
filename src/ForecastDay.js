import React, { useState } from "react";
import axios from "axios";
import DateFormatForecast from "./DateFormatForecast";

export default function ForecastDay(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function ForecastrResponse(respons) {
    setForecast(respons.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <ul className="DayForecast">
        {forecast.map(function (dailyforecast, index) {
          if (index < 5) {
            return (
              <li key={index}>
                <DateFormatForecast dateForecast={dailyforecast} />
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.date.city}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(ForecastrResponse);
    return null;
  }
}