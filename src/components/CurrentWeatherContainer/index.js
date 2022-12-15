import React, { useState, useEffect } from "react";
import { Flex } from "../flex";
import moment from "moment";
import styled from "styled-components";
import "weather-icons/css/weather-icons.css";
import Card from "../card";
import Select from "../select";
import Button from "../button";
import { LineChart } from "../line-chart";
import { SecondaryWeatherCard } from "../card/secondary-weather";
import { CurrentWeatherCard } from "../card/current-weather";
import { ChartCard } from "../card/chart-card";
import { SevenDayForecast } from "../seven-day-forecast.js/7DayForecast";

const Text = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-transform: ${({ capitalize }) => (capitalize ? capitalize : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
  margin-top: -10px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 6fr;
  grid-gap: 2rem;
`;

export const CurrentWeatherContainer = ({
  data,
  sunRise,
  sunSet,
  timeOfday,
  allGeoLocations,
  getWeatherData,
  historicalData,
  hourlyTemp,
}) => {
  
  let { data: results } = data;
  let currentData = results?.current;

  let fullDate = moment
    .utc(currentData?.dt, "X")
    .add(results?.timezone_offset, "seconds")
    .format("dddd, MMMM YYYY hh:mm a");

  const handleSelectChange = (e) => {
    let foundLocation = allGeoLocations[e.target.value];
    getWeatherData(foundLocation);
  };
  return (
    <>
      <Card
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        border="2px solid red"
      >
        <Flex flexDirection="column">
          <Flex alignItems="center">
            <div style={{ marginTop: "-10px", fontSize: "25px" }}>
              Forecast In:{" "}
            </div>
            {allGeoLocations && (
              <Select
                margin={"0px 0px 10px 0px"}
                onChange={handleSelectChange}
                fontSize={"20px"}
                fontWeight="bold"
                border={"none"}
                backgroundColor="white"
                width={"100%"}
                triangleTop={"-4px"}
              >
                {allGeoLocations.map((location, index) => {
                  return (
                    <option
                      value={index}
                      key={index}
                      style={{ fontSize: "20px", fontWeight: "normal" }}
                    >
                      {location.name}, {location.state} - {location.country}
                    </option>
                  );
                })}
              </Select>
            )}
          </Flex>
          <Text>{fullDate}</Text>
        </Flex>
      </Card>
      <Grid>
        <CurrentWeatherCard
          results={results}
          currentData={currentData}
          timeOfday={timeOfday}
        />
        <SecondaryWeatherCard
          currentData={currentData}
          sunRise={sunRise}
          sunSet={sunSet}
        />
       <ChartCard historicalData={historicalData} hourlyTemp={hourlyTemp}/>
      </Grid>
      <SevenDayForecast data={data} timeOfDay={timeOfday}/>
    </>
  );
};
