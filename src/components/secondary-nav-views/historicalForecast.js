import React from 'react'
import { LineChart } from '../line-chart'
export const HistoricalForecast = ({chartData}) => {
  return (
    <LineChart chartData={chartData}/>
  )
}