import React, { useState, useEffect } from "react";
import axios from "axios";
import DateFormatForecast from "./DateFormatForecast";

export default function ForecastDay(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function ForecastrResponse(respons) {
    setForecast(respons.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

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
    const APIkey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let ApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(ForecastrResponse);
    return null;
  }
}
