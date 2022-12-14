import React, { useEffect, useState} from 'react'
import moment from 'moment'
import { LineChart } from '../line-chart'

export const HourlyForecast = ({chartData, timeOfDay}) => {
    return (    
        <LineChart chartData={chartData}/>    
  )
}