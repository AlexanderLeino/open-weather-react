import React from "react";
import { Flex } from "../flex";
import styled from "styled-components";
import Card from "../card";
import Select from "../select";
import { SecondaryWeatherCard } from "../card/secondary-weather";
import { CurrentWeatherCard } from "../card/current-weather";
import { ChartCard } from "../card/chart-card";
import useWindowDimensions from "../../utils.js/getWindowDimensions";



const SelectStyled = styled(Select)`
  font-size: 25px;
  > option {
    font-size: 25px;
  }
  
  @media(max-width: 480px){
    font-size: 20px;
    > option {
      font-size: 18px;
    }
  }

  @media(max-width: 375px){
    font-size: 17px;
    > option {
      font-size: 17px;
    }
  }
`

const SecondaryCard = styled(Flex)`
  @media(max-width: 889px){
    margin: 15px 0px;
  }

`

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
}) => {
  let { width } = useWindowDimensions()
  const handleSelectChange = (e) => {
    let foundLocation = allGeoLocations[e.target.value];
    getWeatherData(foundLocation);
  };
  let { data: results } = data;
  let currentData = results?.current;

  return (
    <>
      <Flex flexDirection="column" alignItems="flex-start" backgroundColor='#313335'>
        <Card
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="fit-content"
          backgroundColor='#313335'
        >
          <Flex flexDirection="column" alignItems='flex-start' backgroundColor='#313335'>
            <Flex alignItems="center" backgroundColor='#313335'>

              {allGeoLocations && (
                <SelectStyled
                  margin={"0px 0px 10px 0px"}
                  onChange={handleSelectChange}
                  color='white'
                  fontWeight="bold"
                  border={'none'}
                  backgroundColor="#313335"
                  width={"fit-content"}
                  triangleTop={"-2px"}

                >
                  {allGeoLocations.map((location, index) => {
                    return (
                      <option
                        value={index}
                        key={index}
                        style={{ fontWeight: "normal" }}
                      >
                        {location.name}, {location.state} - {location.country}
                      </option>
                    );
                  })}
                </SelectStyled>
              )}
            </Flex>
            <div style={{ fontSize: '20px', color: 'white' }}>{fullDate}</div>
          </Flex>
        </Card>
        <Flex justifyContent='space-around' flexWrap='wrap' width='100%' margin='10px 0px 0px 0px'>

          <CurrentWeatherCard
            results={results}
            currentData={currentData}
            timeOfday={timeOfday}
          />

          <SecondaryCard margin='0px 10px 0px 10px' flexGrow={1}>
            <SecondaryWeatherCard
              currentData={currentData}
              sunRise={sunRise}
              sunSet={sunSet}
              results={data}
            />
          </SecondaryCard>
          
            <ChartCard historicalData={historicalData} hourlyTemp={hourlyTemp} />
        </Flex>
      </Flex>

    </>
  );
};