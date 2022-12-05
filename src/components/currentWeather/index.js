import React, {useContext} from 'react'
import { WeatherContext } from '../../App'
export const CurrentWeatherCard = ({data}) => {
    let contextData = useContext(WeatherContext)
    console.log('Context Data', contextData)
  return (
    <div>Hello</div>
  )
}
