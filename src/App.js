import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex">
          <div className="p-2 flex-grow-1">
            <form>
              <div className="d-flex">
                <div className="p-2 flex-grow-1">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control"
                    autoFocus="on"
                  />
                </div>
                <div className="p-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="p-3">
            <button className="btn btn-primary w-100">Current location</button>
          </div>
        </div>
        <div className="d-flex">
          <div className="p-2 flex-grow-1">
            <h1 className="CityName">New York</h1>
            <p className="DateInfo">Saturday 21:36</p>
            <p className="DescriptionInfo">Overcast Clouds</p>
            <div className="row">
              <div className="col-2">
                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" />
              </div>
              <div className="col-2">
                <span className="TempValue">7</span>°C
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
                  <li>Feel like: °C</li>
                  <li>Humidity: %</li>
                  <li>Wind: km/h</li>
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
      </div>
    </div>
  );
}

export default App;
