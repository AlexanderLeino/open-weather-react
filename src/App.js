import { useState, useEffect } from 'react';
import { NavBar } from './components/navbar';
import { CurrentWeatherCard } from './components/currentWeather';
import { APIKey } from './secret'
import Select from './select';
let localStorage = window.localStorage

function App() {

  const [cityName, setCityName] = useState('')
  const [allGeoLocations, setAllGeoLocations] = useState([])
  const [weatherResults, setWeatherResults] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  const handleSelectChange = (e) => {
    let obj = JSON.parse(e.target.value)

    console.log("Handle Select Change", e.target.value, obj)
  }

  const checkLocalStorage = (name) => {
    let lowerCaseCityName = name.toLowerCase()
    let localItem = localStorage.getItem(lowerCaseCityName)
    let parsedItem = JSON.parse(localItem)
    
    if(parsedItem){
      let {data, name, state, country} = parsedItem
      setWeatherResults({data, name, state, country})
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
      console.log('GEO LOCATION', data)
      if(data){
        apiCall(data[0])
      }
    } catch(e) {
      console.log(e)
    }
    
  }

  const apiCall = async (obj) => {
    let {lat, lon, name, state, country} = obj
    let localStorageData = checkLocalStorage(name)

    if(localStorageData) return 

    try {
      console.log('API Was Called')
      let response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&&units=imperial&appid=${APIKey}`)
      let data = await response.json()
      
      setWeatherResults({data, name, state, country})
      let cityNameToLowerCase = name.toLowerCase()
      let obj = {data, name, state, country}
      let stringifiedData = JSON.stringify(obj)
      localStorage.setItem(cityNameToLowerCase, stringifiedData)
    } catch (e){
      console.log(e)
    }

  }


  return (

    <div className="App">
      <NavBar setCityName={setCityName} getGeoCoordinates={getGeoCoordinates}/>
      {allGeoLocations 
      && 
      <Select onChange={handleSelectChange}>
        {allGeoLocations.map((location, index) => {
          return <option value={JSON.parse(location)} key={index}>{location.name}, {location.state} - {location.country}</option>
        })}
      </Select>}
      
      <CurrentWeatherCard data={weatherResults}/>
    </div>
  );
}

export default App;
