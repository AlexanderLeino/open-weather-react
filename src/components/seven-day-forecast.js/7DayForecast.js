import moment from "moment/moment";
import React from "react";
import { Flex } from "../flex";
import styled from "styled-components";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";

const CapitalizedText = styled.div`
  text-transform: capitalize;
`;

export const SevenDayForecast = ({ data, timeOfDay }) => {
  return (
    <Flex justifyContent="space-around" margin="25px 10px 0px 10px">
      {data?.data?.daily.map((dataForDay, index) => {
        if (index > 6) return;
        return (
          <Flex
            flexDirection="column"
            width="225px"
            key={index}
            border="1px solid black"
            borderRadius="25px"
            backgroundColor="lightBlue"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
          >
            <div style={{ textAlign: "center", fontSize: "30px" }}>
              {moment()
                .add(index + 1, "days")
                .format("dddd")}
            </div>
            <Flex flexDirection="column" padding="10px 20px 0px 20px">
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
              <Flex justifyContent="space-between">
                <div>Temp:</div>
                <div>
                  {dataForDay.temp.day}
                  <span>&#176;</span>F
                </div>
              </Flex>
              <Flex justifyContent="space-between">
                <div>Low:</div>
                <div>
                  {dataForDay.temp.min}
                  <span>&#176;</span>F
                </div>
              </Flex>

              <Flex justifyContent="space-between">
                <div>High:</div>
                <div>
                  {dataForDay.temp.max}
                  <span>&#176;</span>F
                </div>
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
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
