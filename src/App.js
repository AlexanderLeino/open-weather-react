import { useState } from 'react';
import { NavBar } from './components/navbar';
import { CurrentWeatherCard } from './components/currentWeather';
import { APIKey } from './secret'
import Select from './select';
import { FiveDayForecast } from './components/five-day-forecast';
import { Flex } from './components/flex';
let localStorage = window.localStorage

function App() {

  const [cityName, setCityName] = useState('')
  const [allGeoLocations, setAllGeoLocations] = useState([])
  const [weatherResults, setWeatherResults] = useState('')

  const handleSelectChange = (e) => {
    let foundLocation = allGeoLocations[e.target.value]
    apiCall(foundLocation)
  }

  const checkLocalStorage = (key) => {
    let localItem = localStorage.getItem(key)
    let parsedItem = JSON.parse(localItem)

    if (parsedItem) {
      let { data, name, state, country } = parsedItem
      setWeatherResults({ data, name, state, country })
      return true
    } else {
      return false
    }
  }

  const getGeoCoordinates = async (e) => {
    try {
      e.preventDefault()
      let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${APIKey}`)
      let data = await response.json()
      setAllGeoLocations(data)
      if (data) {
        apiCall(data[0])
      }
    } catch (e) {
      console.log(e)
    }

  }

  const apiCall = async (obj) => {
    let { lat, lon, name, state, country } = obj
    let key = `${name}-${state}-${country}`
    let localStorageData = checkLocalStorage(key)

    if (localStorageData) return

    try {
      console.log('API Was Called')
      let response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&&units=imperial&appid=${APIKey}`)
      let data = await response.json()

      setWeatherResults({ data, name, state, country })
      let resultKey = `${name}-${state}-${country}`
      let obj = { data, name, state, country }
      let stringifiedData = JSON.stringify(obj)
      localStorage.setItem(resultKey, stringifiedData)
    } catch (e) {
      console.log(e)
    }

  }


  return (

    <div className="App">
      <NavBar setCityName={setCityName} getGeoCoordinates={getGeoCoordinates} />
   
      {allGeoLocations
        &&
        <Flex margin={'0px 10px 0px 10px'}>
          <Select onChange={handleSelectChange}>
            {allGeoLocations.map((location, index) => {
              return <option value={index} key={index}>{location.name}, {location.state} - {location.country}</option>
            })}
          </Select>
        </Flex>
      }
      
      <CurrentWeatherCard data={weatherResults} />
      <FiveDayForecast data={weatherResults} />
    </div>
  );
}

export default App;
