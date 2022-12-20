import 'weather-icons/css/weather-icons.css';
import clearDay from '../asset/weather-icons-master/production/fill/darksky/clear-day.svg'
import clearNight from '../asset/weather-icons-master/production/fill/darksky/clear-night.svg'
import thunderStormDay from '../asset/weather-icons-master/production/fill/all/thunderstorms-day-rain.svg'
import rainyDay from '../asset/weather-icons-master/production/fill/all/partly-cloudy-day-rain.svg'
import snowDay from '../asset/weather-icons-master/production/fill/all/partly-cloudy-day-snow.svg'
import cloudDay from '../asset/weather-icons-master/production/fill/darksky/cloudy.svg'
import rainyNight from '../asset/weather-icons-master/production/fill/all/partly-cloudy-night-rain.svg'
import thunderStormNight from "../asset/weather-icons-master/production/fill/all/thunderstorms-night-rain.svg"
import snowNight from '../asset/weather-icons-master/production/fill/all/partly-cloudy-night-snow.svg'
import cloudyNight from '../asset/weather-icons-master/production/fill/all/partly-cloudy-night.svg'

export const WeatherIconSwitch = (weatherType = 'rain', timeOfDay, forSevenDayForecast = true) => {
   
    let weather
    if(weatherType.includes('snow')){
        weather = 'snow'
    } else if (weatherType.includes('rain')){
        weather = 'rain'
    } else if (weatherType.includes('thunderstorm')){
        weather = 'thunderstorm'
    } else if (weatherType.includes('clear sky')){
        weather = 'clear sky'
    } else {
        weather = 'clouds'
    }
    if(timeOfDay === 'day'){
        return daySwitch(weather)
    } 
    else if(timeOfDay === 'night' && forSevenDayForecast === true){
     
        return daySwitch(weather)
    }
    else {
        return nightSwitch(weather)
    }
}

const daySwitch = (weather) => {
    
   
    switch(weather){
        case 'clear sky':  
            return <img src={clearDay} alt='clear sky logo' height='150px'/>
        case 'rain': 
            return <img src={rainyDay} alt="rain logo" height="150px"/> 
        case 'thunderstorm': 
            return <img src={thunderStormDay} alt="thunder storm day logo" height="150px"/>
        case 'snow': 
        return <img src={snowDay} alt="snow logo" height="150px"/>  
        default: 
        return <img src={cloudDay} alt="cloudy day logo" height="150px"/>    
            
    }  
}

const nightSwitch = (weather) => {
    switch(weather){
        case 'clear sky':  
            return <img src={clearNight} alt='clear sky logo' height="150px"/>
        case 'rain': 
            return <img src={rainyNight} alt="rain logo" height="150px"/>
        case 'thunderstorm': 
            return <img src={thunderStormNight} alt="thunderstorm night logo" height="150px"/>     
        case 'snow': 
        return <img src={snowNight} alt="snow night logo" height="150px"/> 
        default: 
            <img src={cloudyNight} alt="cloudy night logo" height="150px"/>   
            
    }  
}