import React from 'react'
import { Flex } from '../flex'
import moment from 'moment'
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'
import styled from 'styled-components'
import Button from '../button'

const CapitalizedText = styled.div`
  text-transform: capitalize;
  font-size: 20px;
  white-space: nowrap;
`;

const OneDayCard = styled(Flex)`
@media(min-width: 1235px){
    width: 200px;
    min-width: 200px;
}

`



export const OneDayForecastCard = ({index, dataForDay, timeOfDay}) => {
  return (
    <OneDayCard
            flexDirection="column"
            width="150px"
            key={index}
            border="1px solid black"
            borderRadius="20px"
            justifyContent='center'
            alignItems='center'
            backgroundColor="#e2f3ff"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            padding={'10px'}
            margin={'0px 10px 0px 10px'}
            minWidth='150px'
          >
            <div style={{ textAlign: "center", fontSize: "30px" }}>
              {moment()
                .add(index + 1, "days")
                .format("dddd")}
            </div>
            <Flex flexDirection="column" alignItems='center' justifyContent='center'>
              <Flex flexDirection="column" alignItems="center">
                <span style={{ fontSize: "50px" }}>
                  {WeatherIconSwitch(
                    dataForDay?.weather[0].description,
                    timeOfDay,
                    true
                  )}
                </span>
                <CapitalizedText>
                  {dataForDay?.weather[0].description}
                </CapitalizedText>
              </Flex>

              <Flex justifyContent='center'>
                <div style={{fontSize: '25px', fontWeight: 'bold'}}>
                  {dataForDay.temp.day}
                  <span>&#176;</span>F
                </div>
              </Flex>
            <Flex justifyContent='center'>
              <Button backgroundColor='white' borderRadius='25px' border='2px solid lightGrey' padding='5px'>More Info</Button>
            </Flex>
              {/* <Flex justifyContent="space-between">
                <div>
                  {dataForDay.temp.max}
                  <span>&#176;</span>F
                </div>
              </Flex> */}
              {/* <Flex justifyContent="space-between">
                <div>Wind:</div>
                <div>{dataForDay?.wind_speed} MPH</div>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <div>Percipitation:</div>
                <div>{(dataForDay?.pop * 100).toFixed()}%</div>
              </Flex> */}
              {/* {dataForDay?.snow ? (
                <Flex justifyContent="space-between" alignItems="center">
                  <div>Projected: </div>
                  <div>{(dataForDay.snow / 25).toFixed(2)} in</div>
                </Flex>
              ) : null}
              {dataForDay?.rain ? (
                <Flex alignItems="center" justifyContent="space-between">
                  <div>Projected: </div>
                  <div>{(dataForDay.rain / 25).toFixed(2)} in</div>
                </Flex>
              ) : null} */}
            </Flex>
          </OneDayCard>
  )
}
