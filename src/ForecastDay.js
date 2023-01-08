import React, { useState } from "react";
import axios from "axios";
import DateFormatForecast from "./DateFormatForecast";

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
      <div className="ForecastInfo">
        <DateFormatForecast dateForecast={forecast[0]} />
      </div>
    );
  } else {
    const APIkey = "o25a94199tbb4037b02fa17a9ad37fed";
    let ApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.date.city}&key=${APIkey}&units=metric`;
    axios.get(ApiUrl).then(ForecastrResponse);
    return null;
  }
}
