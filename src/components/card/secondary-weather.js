import React from 'react'
import styled from 'styled-components'
import { BsFillDropletFill } from 'react-icons/bs'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {WiHumidity} from 'react-icons/wi'
import { Flex } from '../flex'
import Card from './'
import { degToCompass } from '../../utils.js/degreesToCompass'
const Text = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-transform: ${({ capitalize }) => (capitalize ? capitalize : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
  margin-top: -10px;
`;
const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  width: 100%;
`

export const SecondaryWeatherCard = ({sunSet, sunRise, currentData}) => {
    
  return (
    <Card padding={'15px'} backgroundColor='lightyellow' width='auto' height='auto' borderRadius='.375rem' boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'} border={'1px solid black'}>
      <Flex alignItems="center" justifyContent="space-between">
          <i
            className="wi wi-miscellaneous wi-sunrise"
            style={{ textAlign: "left" }}
          ></i>
          <Text>{sunRise}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <i
            className="wi wi-miscellaneous wi-sunset"
            style={{ textAlign: "left" }}
          ></i>
          <Text>{sunSet}</Text>
        </Flex>
        <Tile>
          <div>Dew Point</div>
          <Flex alignItems={'center'}>
            <div>{currentData?.dew_point}</div>
            <BsFillDropletFill />
          </Flex>
        </Tile>
        <Tile>
          <div>Visibility</div>
          <Flex alignItems={'center'}>
              <div>{((currentData?.visibility) / 1609).toFixed(2)} Miles </div>
              <AiFillEyeInvisible />
          </Flex>
        </Tile>
        <Tile> 
          <div>Wind</div>
          <Flex>
            <div>{currentData?.wind_speed} MPH</div>
            {degToCompass(currentData?.wind_deg)}
          </Flex>
        </Tile>
        <Tile>
          <div>Humidity</div>
          <Flex alignItems={'center'}>
            <div>{currentData?.humidity}</div>
            <WiHumidity />
          </Flex>
        </Tile>

        
       
      </Card>
  )
}
