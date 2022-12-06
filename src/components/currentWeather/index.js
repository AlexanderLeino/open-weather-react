import React from 'react'
import { Flex } from '../flex'
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'
import { getTime } from '../../utils.js/getTime'
export const CurrentWeatherCard = ({data}) => {
  let {data: results , name, state, country} = data
  let currentData = results?.current
  console.log('results', currentData)
  return (
    <Flex flexDirection='column' alignItems='center'>
      
      {results
      ? 
      <>
      <Flex justifyContent='center'>
        {
          country != 'US' 
          ? <div>{name}, {country}</div>
          : <div>{name}, {state}</div>

        }
      </Flex>
        <div>{WeatherIconSwitch(currentData.weather[0].main)}</div>
        <div>{currentData?.temp}</div>
        <div>{currentData?.feels_like}</div>
        <div>{currentData?.wind_speed}</div>
        <div>{currentData?.weather[0].description}</div>
        <div>Sun Rise {getTime(currentData?.sunrise)}</div>
        <div>Sun Set {getTime(currentData?.sunset)}</div>
      </>
      :
      <div></div>
      }
      
    </Flex>
      
  )
}
