import {BsFillCloudSlashFill, BsCloud, BsFillCloudRainHeavyFill, BsCloudSnowFill, BsCloudLightningRainFill} from 'react-icons/bs'
import {CiCloudSun} from 'react-icons/ci'
import {WiCloudy} from 'react-icons/wi'
import {ImCloud} from 'react-icons/im'
export const WeatherIconSwitch = (weatherType) => {
    switch(weatherType){
        case 'clear sky': 
            return <BsFillCloudSlashFill />
        case 'few clouds': 
            return <CiCloudSun />
        case 'scattered clouds':
            return <WiCloudy />
        case 'broken clouds': 
            return <BsCloud />
        case 'rain': 
            return <BsFillCloudRainHeavyFill/>
        case 'thunderstorm': 
            return <BsCloudLightningRainFill />
        case 'snow': 
            return <BsCloudSnowFill />
        default: 
            return <ImCloud />
    }  
}