import React from 'react'
import { Line } from 'react-chartjs-2'
import {  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, } from "chart.js";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
 
export const LineChart = ({chartData}) => {


  if(chartData === undefined || chartData.length === 0) return
  return (
    <Line data={chartData} style={{background: 'white'}}></Line>
  )
}