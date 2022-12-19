import moment from "moment/moment";
import React from "react";
import { Flex } from "../flex";
import styled from "styled-components";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import Button from "../button";
import { OneDayForecastCard } from "../one-day-forecast-card";

const SevenDayContainer = styled(Flex)`
  overflow-x: ${({overflowX}) => overflowX ? overflowX : 'scroll'};
  @media(max-width: 1235px){
    justify-content: normal;
  }
`


export const SevenDayForecast = ({ data, timeOfDay }) => {
  return (
    <SevenDayContainer justifyContent='center'  margin="25px 0px 0px 0px" flexWrap='nowrap' width='100%' >
      {data?.data?.daily?.map((dataForDay, index) => {
        if (index > 6) return;
        return (
          <OneDayForecastCard index={index} dataForDay={dataForDay} timeOfDay={timeOfDay}/>
        );
      })}
    </SevenDayContainer>
  );
};
