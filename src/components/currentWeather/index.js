import React from 'react'
import { Flex } from '../flex'
import moment from 'moment'
import styled from 'styled-components'
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'
import { degToCompass } from '../../utils.js/degreesToCompass'
import {FiWind} from 'react-icons/fi'
import 'weather-icons/css/weather-icons.css';


const Location = styled.div`
  font-size: ${({fontSize}) => fontSize ? fontSize : '22px'};
  font-weight: bold;
`

const CapitalizedText = styled.div`
    text-transform: capitalize;
`

export const CurrentWeatherCard = ({data}) => {
  let {data: results , name, state, country} = data
  console.log('Results', results)
  let currentData = results?.current
  let sunRise = moment.utc(currentData?.sunrise,'X').add(results?.timezone_offset,'seconds').format('HH:mm a');
  let sunSet =  moment.utc(currentData?.sunset,'X').add(results?.timezone_offset,'seconds').format('hh:mm a');
  let icon = `http://openweathermap.org/img/w/${currentData?.weather[0].icon}.png`
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
      <Flex alignItems='center'>
        <img src={icon}/>
        <div>{currentData?.temp.toFixed(0)}<span>&#176;</span>F</div>
      </Flex>
        <CapitalizedText>{currentData.weather[0].description}</CapitalizedText>
        <Flex alignItems='center'>{currentData?.wind_speed} MPH {degToCompass(currentData?.wind_deg)}</Flex>
        <div><i className='wi wi-miscellaneous wi-sunrise'></i>{sunRise}</div>
        <div><i className='wi wi-miscellaneous wi-sunset'></i>{sunSet}</div>
       
      </>
      :
      <div></div>
      }
      
    </Flex>
      
  )
}
