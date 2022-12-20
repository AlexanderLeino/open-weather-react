import moment from "moment/moment";
import React from "react";
import { Flex } from "../flex";
import styled from "styled-components";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import Button from "../button";
import { OneDayForecastCard } from "../one-day-forecast-card";

const SevenDayContainer = styled(Flex)`
  @media(max-width: 1235px){
    justify-content: normal;
  }
`
const OverFlowContainer = styled(Flex)`
  flex-wrap: nowrap;
  overflow-x: hidden;
  width: fit-content;
  @media(max-width: 1800px){
    overflow-x: scroll;
  }
`


export const SevenDayForecast = ({ data, timeOfDay }) => {
  return (
    <SevenDayContainer justifyContent='space-around'  margin="25px 0px 0px 0px" flexWrap='nowrap' width='100%' >
      <OverFlowContainer>
      {data?.data?.daily?.map((dataForDay, index) => {
        if (index > 6) return;
        return (
          <OneDayForecastCard index={index} dataForDay={dataForDay} timeOfDay={timeOfDay}/>
        );
      })}
      </OverFlowContainer>
    </SevenDayContainer>
  );
};
