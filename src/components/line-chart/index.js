import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
export const LineChart = ({chartData}) => {
    console.log("Chart Data", chartData)
  return (
    <Line data={chartData}></Line>
  )
}
