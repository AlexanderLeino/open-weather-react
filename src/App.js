import { useState, useEffect } from "react";
import { NavBar } from "./components/navbar";
import { CurrentWeatherContainer } from "./components/CurrentWeatherContainer";
import moment from "moment";
import styled from "styled-components";
import indexCss from "./index.css";
import { SevenDayForecast } from "./components/seven-day-forecast/7DayForecast";
import { Flex } from "./components/flex";
import useWindowDimensions from "./utils.js/getWindowDimensions";
import { ChartCard } from "./components/card/chart-card";
import fakeData from "./utils.js/fakeHistoricalData";
import { Minified7DayForecast } from './components/minified7DayForecast.js'

let DEBUG = false
let baseURL
let localStorage = window.localStorage;

if(DEBUG){
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://open-weather-react-app.herokuapp.com'
}

const AppContainer = styled.div`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fcfcfc"};
  border-radius: 20px;
  padding: 15px;
  border: ${({ border }) => (border ? border : "1px solid white")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

const NavContain = styled(AppContainer)`
  border-radius: 20px;
  @media (max-width: 431px){
    border-radius: 0px 0px 20px 20px;
  }
`

function App() {
  const [cityName, setCityName] = useState("New York");
  const [allGeoLocations, setAllGeoLocations] = useState([]);
  const [weatherResults, setWeatherResults] = useState("");
  const [timeOfday, setTimeOfDay] = useState("");
  const [historicalData, setHistoricalData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [previousLocations, setPreviousLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    getGeoCoordinates()
  },[])


  const getGeoCoordinates = async (e) => {
    setIsLoading(true)
    if (e != null || e !== undefined) {
      e.preventDefault();
    }
    try {
      let response = await fetch(
        `${baseURL}/api/getGeoCoordinates`,
        {
          method: "POST",
          body: JSON.stringify({ cityName }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();

      if (data) {
        getWeatherData(data[0]);
        setAllGeoLocations(data);
      }
    } catch (e) {
      console.log("An error has occured", e);
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
    
    if(DEBUG){
      let key = `${name}-${state}-${country}`;
      let localStorageData = checkLocalStorage(key);
      checkPreviousLocations(localStorageData);
      if (localStorageData) return;
    }

    try {
      let response = await fetch(`${baseURL}/api/getWeatherData`, {
        method: "POST",
        body: JSON.stringify({ lat, lon }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      setWeatherResults({ data, name, state, country, lat, lon });
      let resultKey = `${name}-${state}-${country}`;
      let obj = { data, name, state, country, lat, lon };
      let stringifiedData = JSON.stringify(obj);

      if(DEBUG){
        localStorage.setItem(resultKey, stringifiedData);
        checkPreviousLocations(data);
      }

    } catch (e) {
      getGeoCoordinates("New York");
      console.log(e);
    }
    
  };

  const checkPreviousLocations = (location) => {
    if (!weatherResults) return;
    let foundLocation = previousLocations.findIndex(
      (weather) => weather.name === weatherResults.name
    );
    if (foundLocation || foundLocation === 0) {
      let copiedState = previousLocations;
      copiedState[foundLocation] = weatherResults;
      setPreviousLocations(copiedState);
    }

    if (foundLocation === -1) {
      setPreviousLocations([...previousLocations, weatherResults]);
    }
  };

  const getHistoricalData = async (obj) => {
   
    if (!obj) {
      setIsLoading(false)
      
    }

    let infoArray = [];
    for (let i = 0; i < 11; i++) {
      let { lat, lon, data } = obj;

      let timeStamp = moment
        .utc(data?.current?.dt, "X")
        .add(data?.timezone_offset, "seconds")
        .subtract(i, "years")
        .format("YYYY");

      let dt = Date.parse(timeStamp) / 1000;
      let response = await fetch(
        `${baseURL}/api/getHistoricalData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lat, lon, dt }),
        }
      );
      let foundData = await response.json();
      infoArray.unshift({ timeStamp, weather: foundData?.data[0] });
    }

    setHistoricalData({
      labels: infoArray.map((data) => data.timeStamp),
      datasets: [
        {
          label: "Temperature",
          data: infoArray.map((data) => data.weather.temp),
          backgroundColor: "darkBlue",
          borderColor: "darkBlue",
        },
      ],
    });
    infoArray = []
    setIsLoading(false)
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
          backgroundColor: "darkBlue",
          borderColor: "darkBlue",
        },
      ],
    });

  };

  let currentData = weatherResults?.data?.current;

  let fullDate = moment
    .utc(currentData?.dt, "X")
    .add(weatherResults?.data?.timezone_offset, "seconds")
    .format("dddd, MMMM YYYY hh:mm a");

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
    let currentTimeFormat = moment(currentTime, "HH:mm a").add(
      weatherResults?.data?.timezone_offset,
      "seconds"
    );
    let sunSetTimeFormat = moment(sunSet, "HH:mm a").add(
      weatherResults?.data?.timezone_offset,
      "seconds"
    );

    if (Date.parse(currentTimeFormat) > Date.parse(sunSetTimeFormat)) {
      setTimeOfDay("night");
    } else {
      console.log("Day Time");
      setTimeOfDay("day");
    }
    getHistoricalData(weatherResults);
    getHourlyData(weatherResults);
    
  }, [weatherResults]);

  const checkLocalStorage = (key) => {
    let localItem = localStorage.getItem(key);
    let parsedItem = JSON.parse(localItem);

    if (parsedItem) {
      let { data, name, state, country } = parsedItem;
      let lon = data?.lon;
      let lat = data?.lat;
      setWeatherResults({ data, name, state, country, lon, lat });
      return true;
    } else {
      return false;
    }
  };


  return (
    <>
      <NavContain
        backgroundColor="#313335"
        border="1px solid white"
        margin={"0px 0px 20px 0px"}
      >
        <NavBar
          setCityName={setCityName}
          getGeoCoordinates={getGeoCoordinates}
          fullDate={fullDate}
          getWeatherData={getWeatherData}
          results={weatherResults}
          allGeoLocations={allGeoLocations}
        />
      </NavContain>
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center">
          <div style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>
            Loading...
          </div>
        </Flex>
      ) : (
        <>
          <AppContainer backgroundColor="#313335" border="1px solid white">
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
              fullDate={fullDate}
              previousLocations={previousLocations}
              setCityName={setCityName}
            />
           
          </AppContainer>
          <AppContainer
            backgroundColor="#313335"
            border="1px solid white"
            margin={"20px 0px 0px 0px"}
          >
          {
            width <= 900 
            ? 
            <Minified7DayForecast data={weatherResults} timeOfDay={timeOfday} /> 
            :
            <SevenDayForecast data={weatherResults} timeOfDay={timeOfday} />
          }

            
          </AppContainer>
        </>
      )}
    </>
  );
}

export default App;
