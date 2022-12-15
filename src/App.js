import { useState, useEffect } from "react";
import { NavBar } from "./components/navbar";
import { CurrentWeatherContainer } from "./components/CurrentWeatherContainer";
import { APIKey } from "./secret";
import moment from "moment";
import styled from "styled-components";
import indexCss from "./index.css";
let localStorage = window.localStorage;

const AppContainer = styled.div`
  background-color: red;
  padding: 15px;
`;

function App() {
  const [cityName, setCityName] = useState("Kalamazoo");
  const [allGeoLocations, setAllGeoLocations] = useState([]);
  const [weatherResults, setWeatherResults] = useState("");
  const [timeOfday, setTimeOfDay] = useState("");
  const [historicalData, setHistoricalData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);

  let currentData = weatherResults?.data?.current;

  let currentTime = moment
    .utc(currentData?.dt, "X")
    .add(weatherResults?.data?.timezone_offset, "seconds")
    .format("hh:mm a");
  let sunRise = moment
    .utc(currentData?.sunrise, "X")
    .add(weatherResults?.data?.timezone_offset, "seconds")
    .format("hh:mm a");
  let sunSet = moment
    .utc(currentData?.sunset, "X")
    .add(weatherResults?.data?.timezone_offset, "seconds")
    .format("hh:mm a");

  useEffect(() => {
    let currentTimeFormat = moment(currentTime, "HH:mm a");
    let sunSetTimeFormat = moment(sunSet, "HH:mm a");
    if (currentTimeFormat > sunSetTimeFormat) {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("day");
    }
    getHistoricalData(weatherResults);
    getHourlyData(weatherResults);
  }, [weatherResults]);

  const checkLocalStorage = (key) => {
    let localItem = localStorage.getItem(key);
    let parsedItem = JSON.parse(localItem);

    if (parsedItem) {
      console.log("parseITEM", parsedItem);
      let { data, name, state, country } = parsedItem;
      let lon = data?.lon;
      let lat = data?.lat;
      setWeatherResults({ data, name, state, country, lon, lat });
      return true;
    } else {
      return false;
    }
  };

  const getGeoCoordinates = async (e) => {
    try {
      e.preventDefault();
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIKey}`
      );
      let data = await response.json();
      if (data) {
        setAllGeoLocations(data);
      }
      if (data) {
        getWeatherData(data[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getWeatherData = async (obj) => {
    if (!obj) {
      alert(
        "We couldnt find a city with that name. Please reenter or try something else!"
      );
      return;
    }
    let { lat, lon, name, state, country } = obj;
    let key = `${name}-${state}-${country}`;
    let localStorageData = checkLocalStorage(key);

    if (localStorageData) return;

    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&&units=imperial&appid=${APIKey}`
      );
      let data = await response.json();
      setWeatherResults({ data, name, state, country, lat, lon });
      let resultKey = `${name}-${state}-${country}`;
      let obj = { data, name, state, country, lat, lon };
      let stringifiedData = JSON.stringify(obj);
      localStorage.setItem(resultKey, stringifiedData);
    } catch (e) {
      console.log(e);
    }
  };

  const getHistoricalData = async (obj) => {
    if (!obj) return;
    let {
      lat,
      lon,
      data: { current },
    } = obj;
    let infoArray = [];
    for (let i = 0; i < 11; i++) {
      let timeStamp = moment
        .utc(current?.dt, "X")
        .add(current.timezone_offset, "seconds")
        .subtract(i, "years");

      let timeStampConvertedUnix = Date.parse(timeStamp) / 1000;
      let response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timeStampConvertedUnix}&units=imperial&appid=${APIKey}`
      );

      let data = await response.json();
      let date = moment
        .utc(data?.data[0]?.dt, "X")
        .add(data?.timezone_offset, "seconds")
        .format("YYYY");
      infoArray.unshift({ date, weather: data?.data[0] });
    }

    setHistoricalData({
      labels: infoArray.map((data) => data.date),
      datasets: [
        {
          label: "Temperature",
          data: infoArray.map((data) => data.weather.temp),
        },
      ],
    });
  };

  const getHourlyData = async (obj) => {
    let filterData = obj?.data?.hourly?.slice(23);

    let hourlyTimes = filterData?.map((hourly) => {
      let hours = moment
        .utc(hourly?.dt, "X")
        .add(obj?.data?.timezone_offset, "seconds")
        .format("hh:mm a");
      return hours;
    });

    setHourlyData({
      labels: hourlyTimes,
      datasets: [
        {
          label: "Temperature",
          data: filterData?.map((hourlyData) => hourlyData?.temp),
        },
      ],
    });
  };
  console.log("WEATHER RESULTS", weatherResults);
  return (
    <AppContainer className="App">
      <NavBar setCityName={setCityName} getGeoCoordinates={getGeoCoordinates} />
      <CurrentWeatherContainer
        data={weatherResults}
        sunRise={sunRise}
        sunSet={sunSet}
        timeOfday={timeOfday}
        currentTime={currentTime}
        allGeoLocations={allGeoLocations}
        getWeatherData={getWeatherData}
        historicalData={historicalData}
        hourlyTemp={hourlyData}
      />
    </AppContainer>
  );
}

export default App;
