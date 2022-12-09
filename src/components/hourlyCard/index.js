import React, {useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Flex } from '../flex'
import {BsArrowBarDown} from 'react-icons/bs'

const LowerCard = styled.div`
    display: ${({isExpanded}) => isExpanded ? isExpanded : 'none'}
`

export const HourlyCard = ({hourlyData, timeZone, key}) => {  
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <>
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
    <LowerCard key={key} isExpanded={isExpanded}>
       
    </LowerCard>
        </>
  )
}
