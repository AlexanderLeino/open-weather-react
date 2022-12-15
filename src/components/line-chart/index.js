import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
export const LineChart = ({chartData}) => {
  console.log('Hourly Temp')
  if(chartData === undefined || chartData.length === 0) return
  return (
    <Line data={chartData}></Line>
  )
}