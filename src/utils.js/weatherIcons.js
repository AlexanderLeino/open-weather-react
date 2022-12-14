import 'weather-icons/css/weather-icons.css';
export const WeatherIconSwitch = (weatherType = 'rain', timeOfDay, forSevenDayForecast = true) => {
    console.log(timeOfDay)
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
            return <i className='wi wi-daytime wi-day-sunny'></i>
        case 'rain': 
            return <i className='wi wi-daytime wi-day-rain'></i>
        case 'thunderstorm': 
            return <i className='wi wi-daytime wi-day-thunderstorm'></i>
        case 'snow': 
            return <i className='wi wi-neutral wi-snowflake-cold'></i>
        default: 
            return <i className='wi wi-daytime wi-day-cloudy'></i>
            
    }  
}

const nightSwitch = (weather) => {
    switch(weather){
        case 'clear sky':  
            return <i className='wi wi-nighttime wi-night-clear'></i>
        case 'rain': 
            return <i className='wi wi-nighttime wi-night-alt-rain'></i>
        case 'thunderstorm': 
            return <i className='wi wi-nighttime wi-night-alt-thunderstorm'></i>
        case 'snow': 
            return <i className='wi wi-neutral wi-snowflake-cold'></i>
        default: 
            return <i className='wi wi-nighttime wi-night-alt-cloudy'></i>
            
    }  
}