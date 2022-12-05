import { useEffect, useState, createContext } from 'react';
import { NavBar } from './components/navbar';
import { CurrentWeatherCard } from './components/currentWeather';
import { APIKey } from './secret'
let localStorage = window.localStorage


export const WeatherContext = createContext()

function App() {

  const [cityName, setCityName] = useState('')
  const [weatherResults, setWeatherResults] = useState('')

  const checkLocalStorage = (name) => {
    let lowerCaseCityName = name.toLowerCase()
    let localItem = localStorage.getItem(lowerCaseCityName)
    console.log('localItem', localItem)
    let parsedItem = JSON.parse(localItem)
    
    if(parsedItem){
      setWeatherResults(parsedItem)
      return parsedItem
    } else {
      return false
    }
  }

  const getGeoCoordinates = async () => {
    try {
      let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKey}`)
      let data = await response.json()
      if(data){
        apiCall(data[0])
      }
    } catch(e) {
      console.log(e)
    }
    
  }

  const apiCall = async (obj) => {
    let {lat, lon, name} = obj

    let localStorageData = await checkLocalStorage(name)

    if(localStorageData) return 

    try {
      console.log('API Was Called')
      let response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&&units=imperial&appid=${APIKey}`)
      let data = await response.json()
      
      setWeatherResults({data, name})
      let cityNameToLowerCase = name.toLowerCase()
      let stringifiedData = JSON.stringify(data)
      localStorage.setItem(cityNameToLowerCase, stringifiedData)
    } catch (e){
      console.log(e)
      
    }

  }


  return (
  <WeatherContext.Provider value={weatherResults}>
    <div className="App">
      <NavBar setCityName={setCityName} getGeoCoordinates={getGeoCoordinates}/>
      <CurrentWeatherCard />
    </div>
  </WeatherContext.Provider>
  );
}

export default App;
