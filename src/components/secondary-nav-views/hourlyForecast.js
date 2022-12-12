import React, { useEffect, useState} from 'react'
import moment from 'moment'
import { LineChart } from '../line-chart'

export const HourlyForecast = ({chartData, timeOfDay}) => {
    console.log('In the hourly forecast component', chartData)
    return (    
        <LineChart chartData={chartData}/>    
  )
}
