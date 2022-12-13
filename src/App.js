import { useState, useEffect } from "react";
import { NavBar } from "./components/navbar";
import { CurrentWeatherCard } from "./components/currentWeather";
import { APIKey } from "./secret";
import Select from "./select";
import moment from "moment";
import { Flex } from "./components/flex";
import { SecondaryNav } from "./components/secondary-nav";
let localStorage = window.localStorage;

function App() {
  const [cityName, setCityName] = useState("");
  const [allGeoLocations, setAllGeoLocations] = useState([]);
  const [weatherResults, setWeatherResults] = useState("");
  const [timeOfday, setTimeOfDay] = useState("");
  const [historicalData, setHistoricalData] = useState([])

  useEffect(() => {
    console.log(historicalData)
  }, [historicalData])
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
    if (currentTime > sunSet) {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("day");
    }
    console.log("Weather Results", weatherResults);
    getHistoricalData(weatherResults);
  }, [weatherResults]);
  const handleSelectChange = (e) => {
    let foundLocation = allGeoLocations[e.target.value];
    apiCall(foundLocation);
  };

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
        apiCall(data[0]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const apiCall = async (obj) => {
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
    if(!obj) return
    let {
      lat,
      lon,
      data: { current },
    } = obj;
    let infoArray = []
    for(let i = 0; i < 11 ; i++){
      let timeStamp =moment.utc(current?.dt, "X")
      .add(current.timezone_offset, "seconds")
      .subtract(i, 'years')

      let timeStampConvertedUnix = (Date.parse((timeStamp)) / 1000)
      let response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timeStampConvertedUnix}&units=imperial&appid=${APIKey}`
      );
    
      let data = await response.json();
      let date = moment.utc(data?.data[0]?.dt, "X")
      .add(data?.timezone_offset, "seconds")
      .format("YYYY");
      infoArray.push({date, weather: data?.data[0]})

    }
    setHistoricalData(infoArray)
    
      // I am trying to take the current date and roll it back a total of 10 years
    
  };

  return (
    <div className="App">
      <NavBar setCityName={setCityName} getGeoCoordinates={getGeoCoordinates} />

      {allGeoLocations && (
        <Flex margin={"0px 10px 0px 10px"}>
          <Select onChange={handleSelectChange}>
            {allGeoLocations.map((location, index) => {
              return (
                <option value={index} key={index}>
                  {location.name}, {location.state} - {location.country}
                </option>
              );
            })}
          </Select>
        </Flex>
      )}

      <CurrentWeatherCard
        data={weatherResults}
        sunRise={sunRise}
        sunSet={sunSet}
        timeOfday={timeOfday}
        currentTime={currentTime}
      />
      <SecondaryNav data={weatherResults} timeOfDay={timeOfday} />
    </div>
  );
}

export default App;
