import moment from 'moment/moment'
import React from 'react'
import { Flex } from '../flex'
const date = new Date()
console.log("New Date", date.setDate(date.getDate() + 1 ))


export const FiveDayForecast = ({data}) => {
    console.log('Weather Results', data?.data?.daily)
  return (
    <Flex justifyContent='space-between' margin='0px 10px 0px 10px'>
        {
            data?.data?.daily.map((dataForDay, index) => {
                return (
                <Flex flexDirection='column'>
                    <div>{moment().add(index + 1, 'days').format('L')}</div>
                    <Flex justifyContent='space-between'>
                        <div>Temp:</div>
                        <div>{dataForDay.temp.day}</div>
                    </Flex>
                    <Flex justifyContent='space-between'>
                        <div>Low:</div>
                        <div>{dataForDay.temp.min}</div>
                    </Flex>
                    
                    <Flex justifyContent='space-between'>
                        <div>High:</div>
                        <div>{dataForDay.temp.max}</div>
                    </Flex>
                    <Flex justifyContent='space-between'>
                        <div>Wind Speed:</div>
                        <div>{dataForDay?.weather[0].wind_speed}</div>
                    </Flex>
                   
                </Flex>
                )
            })
        }
    </Flex>
  )
}
