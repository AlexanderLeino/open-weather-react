import moment from 'moment/moment'
import React from 'react'
import { Flex } from '../flex'
const date = new Date()
console.log("New Date", date.setDate(date.getDate() + 1 ))
console.log('DATE', date)

export const FiveDayForecast = ({data}) => {
    console.log('Weather Results', data?.data?.daily)
  return (
    <Flex justifyContent='space-between'>
        {
            data?.data?.daily.map((dataForDay, index) => {
                return (
                <Flex flexDirection='column'>
                    <div>{moment().add(index, 'days').format('L')}</div>
                    <div>Feels like: {dataForDay.feels_like.day}</div>
                    <div>{dataForDay.temp.day}</div>
                    <div>{dataForDay.temp.min}</div>
                    <div>{dataForDay.temp.max}</div>
                    <div>{dataForDay.weather[0].wind_speed}</div>
                </Flex>
                )
            })
        }
    </Flex>
  )
}
