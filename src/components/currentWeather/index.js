import React, {useContext} from 'react'
import { WeatherContext } from '../../App'
export const CurrentWeatherCard = ({data}) => {

    let {parsedItem, name} = useContext(WeatherContext)
    
  return (
    <div>{name}</div>
    
  )
}
