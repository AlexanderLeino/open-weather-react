import React, { useEffect, useState} from 'react'
import moment from 'moment'

export const HourlyForecast = ({data, timeOfDay}) => {
    const [hourlyData, setHourlyData] = useState([])
    useEffect(() => {
        let filterData = data?.data?.hourly?.filter((hour, index) => {
            if(index > 23){
                return false
            } else {
                return true
            }
        })
        setHourlyData(filterData) 
    },[data])

    return (
    <div>Hourly</div>
  )
}
