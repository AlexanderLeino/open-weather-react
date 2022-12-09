import React from 'react'
import { Flex } from '../flex'
import moment from 'moment'
import styled from 'styled-components'
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'
let momentTZ = require('moment-timezone');
const Location = styled.div`
  font-size: ${({fontSize}) => fontSize ? fontSize : '22px'};
  font-weight: bold;
`

export const CurrentWeatherCard = ({data}) => {
  let {data: results , name, state, country} = data
  let currentData = results?.current

  let sunRise = moment.utc(currentData?.sunrise,'X').add(results?.timezone_offset,'seconds').format('HH:mm a');
  let sunSet =  moment.utc(currentData?.sunset,'X').add(results?.timezone_offset,'seconds').format('hh:mm a');
  
let x = 
console.log(currentData)

  return (
    <Flex flexDirection='column' alignItems='center'>
      
      {results
      ? 
      <>
      <Flex justifyContent='center'>
        {
          country !== 'US' 
          ? <Location>{name}, {country}</Location>
          : <Location>{name}, {state}</Location>

        }
      </Flex>
        <div>{WeatherIconSwitch(currentData.weather[0].main)}</div>
        <div>{currentData?.temp}<span>&#176;</span>F</div>
        <div>{currentData?.feels_like}</div>
        <div>{currentData?.wind_speed}</div>
        <div>{currentData?.weather[0].description}</div>
        <div>Sunrise {sunRise}</div>
        <div>Sunset {sunSet}</div>
      </>
      :
      <div></div>
      }
      
    </Flex>
      
  )
}
