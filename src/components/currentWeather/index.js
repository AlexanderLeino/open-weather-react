import React, {useContext} from 'react'
import { Flex } from '../flex'
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'
export const CurrentWeatherCard = ({data}) => {
  let {data: results , name, state, country} = data
  let currentData = results?.current
  console.log('results', currentData)
  return (
    <Flex flexDirection='column' alignItems='center'>
      <Flex justifyContent='center'>
        {
          country != 'US' 
          ? <div>{name}, {country}</div>
          : <div>{name}, {state}</div>

        }
      </Flex>
      {results
      ? 
      <div>{WeatherIconSwitch()}</div>
      :
      <div></div>
      }
    </Flex>
      
  )
}
