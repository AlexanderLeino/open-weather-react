import React, { useState, useEffect } from 'react'
import { Flex } from '../flex'
import moment from 'moment'
import styled from 'styled-components'
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'
import { degToCompass } from '../../utils.js/degreesToCompass'
import 'weather-icons/css/weather-icons.css';

const Location = styled.div`
  font-size: ${({fontSize}) => fontSize ? fontSize : '22px'};
  font-weight: bold;
`

const CapitalizedText = styled.div`
    text-transform: capitalize;
`

export const CurrentWeatherCard = ({data, sunRise, sunSet, timeOfday, currentTime}) => {
  let {data: results , name, state, country} = data
  let currentData = results?.current
 
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      
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
      <Flex alignItems='center' justifyContent='center'>
        {WeatherIconSwitch(currentData?.weather[0].description, timeOfday, false)}
        <div>{currentData?.temp.toFixed(0)}<span>&#176;</span>F</div>
      </Flex>
        <CapitalizedText>{currentData.weather[0].description}</CapitalizedText>
        <div>{currentTime}</div>
        <Flex alignItems='center' justifyContent='space-between'>
          <div style={{textAlign:'left'}}>{degToCompass(currentData?.wind_deg)}</div>
          <div>{currentData?.wind_speed} MPH</div>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between'>
          <i className='wi wi-miscellaneous wi-sunrise' style={{textAlign:'left'}}></i>
          <div>{sunRise}</div>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between'>
        <i className='wi wi-miscellaneous wi-sunset' style={{textAlign:'left'}}></i>
        <div>{sunSet}</div>
        </Flex>
       
      </>
      :
      <div></div>
      }
      
    </Flex>
      
  )
}
