import React, { useState, useEffect } from "react";
import { Flex } from "../flex";
import moment from "moment";
import styled from "styled-components";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import { degToCompass } from "../../utils.js/degreesToCompass";
import "weather-icons/css/weather-icons.css";
import Card from "../card";
import Select from "../select";
import {BsUmbrellaFill} from 'react-icons/bs'

const Text = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-transform: ${({ capitalize }) => (capitalize ? capitalize : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
  margin-top: -10px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 6fr;
`
export const CurrentWeatherCard = ({
  data,
  sunRise,
  sunSet,
  timeOfday,
  currentTime,
  allGeoLocations,
  getWeatherData,
}) => {

  let fullDate = moment
  .utc(data?.data?.current?.dt, "X")
  .add(data?.data?.timezone_offset, "seconds")
  .format("dddd, MMMM YYYY hh:mm a");

  let { data: results, name, state, country } = data;
  let currentData = results?.current;
  console.log("RESULTS", results)
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
        border='2px solid red'
      >
    <Flex flexDirection='column'>
      <Flex alignItems='center'>
      <div style={{marginTop: '-10px', fontSize: '25px'}}>Forecast In: </div>
        {allGeoLocations && (
          <Select
            margin={"0px 0px 10px 0px"}
            onChange={handleSelectChange}
            fontSize={"20px"}
            fontWeight="bold"
            border={'none'}
            backgroundColor='white'
            width={'100%'}
            triangleTop={'-4px'}
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
      <Card backgroundColor='lightBlue' width={'100%'} height='100%'>
        
          <span style={{ fontSize: "75px", marginRight: "10px" }}>
            {WeatherIconSwitch(
              currentData?.weather[0].description,
              timeOfday,
              false
            )}
          </span>
          <div>Feels Like: {currentData?.feels_like}</div>
          <Text fontSize={"40px"}>
            {currentData?.temp.toFixed(0)}
            <span>&#176;</span>F
          </Text>
  
        <Text capitalize={"capitalize"}>
          {currentData?.weather[0].description}
        </Text>
        {results && <Flex justifyContent='center'><BsUmbrellaFill/><div>{(results?.daily[0].pop) *100}%</div> Chance Of Percipitation</Flex>}
        
      </Card>
      <Card backgroundColor='lightyellow' height='100%'></Card>
      <Card backgroundColor='lightgreen' height='100%'></Card>
    </Grid>
        <Flex alignItems="center" justifyContent="space-between">
          <Text>{currentData?.wind_speed} MPH</Text>
          <Text style={{ textAlign: "left", marginLeft: "5px" }}>
            {degToCompass(currentData?.wind_deg)}
          </Text>
        </Flex>
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
  </>
  );
};
