import React, { useState } from "react";
import { Flex } from "../flex";
import moment from "moment";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import styled from "styled-components";
import Button from "../button";
import {CiTempHigh} from 'react-icons/ci'
import { border } from "polished";

const CapitalizedText = styled.div`
  text-transform: capitalize;
  font-size: 20px;
  white-space: nowrap;
`;

const OneDayCard = styled(Flex)`
  @media (min-width: 1235px) {
    width: 200px;
    min-width: 200px;
  }
`;
const SecondaryDetails = styled(Flex)`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
  font-size: 20px;
  align-content: center;
`;
const BorderBox = styled.div`
    border-right: ${({borderRight}) => borderRight ? borderRight : '0px'};
    border-left: ${({borderLeft}) => borderLeft ? borderLeft : '0px'};
    border-top: ${({borderTop}) => borderTop ? borderTop : '0px'};
    border-bottom: ${({borderBottom}) => borderBottom ? borderBottom : '0px'};

`

export const OneDayForecastCard = ({ index, dataForDay, timeOfDay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <OneDayCard
      flexDirection="column"
      width="150px"
      key={index}
      border="1px solid black"
      borderRadius="20px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#e2f3ff"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      padding={"10px"}
      margin={"0px 10px 0px 10px"}
      minWidth="150px"
    >
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        {moment()
          .add(index + 1, "days")
          .format("dddd")}
      </div>
      <Flex flexDirection="column" alignItems="center" justifyContent="space-between" width='100%'>
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

        <Flex justifyContent="center">
          <div style={{ fontSize: "25px", fontWeight: "bold" }}>
            {dataForDay.temp.day}
            <span>&#176;</span>F
          </div>
        </Flex>
        <Flex justifyContent="center">
        {!isExpanded 
        && <Button
            backgroundColor="white"
            borderRadius="25px"
            border="2px solid lightGrey"
            padding="5px"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            More Info
          </Button>}
          
        </Flex>
        <SecondaryDetails display={isExpanded}>
          <Flex justifyContent="space-between" flexDirection='column' alignItems='center' border='1px solid black' width='100%'>
            <Flex alignItems='center'>
            <CiTempHigh style={{fontSize: '20px'}} />
            <span>&#176;</span>F
            </Flex>
            <Flex width='100%' justifyContent='center' >
            <div style={{backgroundcolor: 'yellow', marginRight: '2px'}}>
              {dataForDay.temp.min}
            </div>
            <div style={{background: 'blue', marginRight: '2px'}}>
              {dataForDay.temp.day}
            </div>
            <div style={{backgroundColor: 'red',}}>
              {dataForDay.temp.max}
              
            </div>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between">
            <div>Wind:</div>
            <div>{dataForDay?.wind_speed} MPH</div>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <div>Percipitation:</div>
            <div>{(dataForDay?.pop * 100).toFixed()}%</div>
          </Flex>
          {dataForDay?.snow ? (
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
          ) : null}
        </SecondaryDetails>
      </Flex>
    </OneDayCard>
  );
};
