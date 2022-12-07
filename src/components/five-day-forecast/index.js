import moment from 'moment/moment'
import React, {useState} from 'react'
import { Flex } from '../flex'
import {BsArrowBarDown} from 'react-icons/bs'
import { HourlyCard } from '../hourlyCard'
const date = new Date()
console.log("New Date", date.setDate(date.getDate() + 1 ))


export const FiveDayForecast = ({data}) => {
    console.log('Weather Results', data?.data)
    const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Flex justifyContent='space-around' margin='25px 10px 0px 10px'>
        {
            data?.data?.daily.map((dataForDay, index) => {
                if(index > 6) return 
                return (
                <Flex flexDirection='column' width='150px'>
                    <div style={{textAlign: 'center'}}>{moment().add(index + 1, 'days').format('L')}</div>
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
                        <div>Wind:</div>
                        <div>{dataForDay?.wind_speed}</div>
                    </Flex>
                    <Flex flexDirection='column' alignItems='center' justifyContent='center' onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded 
                        ? null 
                        :  
                        <>
                        <div>Hourly</div>
                        <BsArrowBarDown/>
                        </>
                        }
                       
                    </Flex>
                        <HourlyCard key={index} isExpanded={isExpanded} hourlyData={data?.data?.hourly}/>
                </Flex>
                )
            })
        }
    </Flex>
  )
}
