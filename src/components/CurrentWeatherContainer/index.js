import React from "react";
import { Flex } from "../flex";
import styled from "styled-components";
import "weather-icons/css/weather-icons.css";
import Card from "../card";
import Select from "../select";
import { SecondaryWeatherCard } from "../card/secondary-weather";
import { CurrentWeatherCard } from "../card/current-weather";
import { ChartCard } from "../card/chart-card";
import { PreviousSearch } from "../previous-searched-locations";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 4fr 3fr;
  grid-gap: 2rem;
  width: 100%;
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
  fullDate,
  previousLocations,
}) => {
  const handleSelectChange = (e) => {
    let foundLocation = allGeoLocations[e.target.value];
    getWeatherData(foundLocation);
  };
  let { data: results } = data;
  let currentData = results?.current;

  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Card
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="fit-content"
      >
        <Flex flexDirection="column">
          <Flex alignItems="center">
            <div style={{ marginTop: "-10px", fontSize: "25px" }}>
              Forecast In:
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
          <>{fullDate}</>
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
        <ChartCard historicalData={historicalData} hourlyTemp={hourlyTemp} />
        <PreviousSearch previousLocations={previousLocations} />
      </Grid>
    </Flex>
  );
};
