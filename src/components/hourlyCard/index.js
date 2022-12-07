import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const LowerCard = styled.div`
    display: ${({isExpanded}) => isExpanded ? isExpanded : 'none'}
`

export const HourlyCard = ({isExpanded, hourlyData, key}) => {
    console.log('Hourly', hourlyData)
    return (
    <LowerCard key={key} isExpanded={isExpanded}>
       { hourlyData?.map((hour, index) => {
        if(index > 23) return 
        return (
            <>
                <div>{moment.unix(hour?.dt).format("hh:mm")}</div>
                <div>{hour.temp}</div>
            </>
        )
       })}
    </LowerCard>
  )
}
