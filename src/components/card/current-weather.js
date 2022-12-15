import React from 'react'
import styled from 'styled-components';
import Card from '.'
import { Flex } from '../flex';
import { BsUmbrellaFill } from 'react-icons/bs';
import { WeatherIconSwitch } from '../../utils.js/weatherIcons'

const Text = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-transform: ${({ capitalize }) => (capitalize ? capitalize : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
  margin-top: -10px;
`;

export const CurrentWeatherCard = ({results, currentData, timeOfday}) => {
  return (
    <Card backgroundColor='lightBlue' width={'auto'} height='auto' borderRadius='.375rem' boxShadow={'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;'} border={'1px solid black'}>
        
          <span style={{ fontSize: "75px", marginRight: "10px" }}>
            {WeatherIconSwitch(
              currentData?.weather[0].description,
              timeOfday,
              false
            )}
          </span>
          <div>Feels Like: {currentData?.feels_like}</div>
          <div>High:{results?.daily[0]?.temp.max}</div>
          <div>Low: {results?.daily[0]?.temp.min}</div>
          <Text fontSize={"40px"}>
            {currentData?.temp.toFixed(0)}
            <span>&#176;</span>F
          </Text>
  
        <Text capitalize={"capitalize"}>
          {currentData?.weather[0].description}
        </Text>
        {results && <Flex justifyContent='center'><BsUmbrellaFill/><div>{(results?.daily[0].pop) *100}%</div> Chance Of Percipitation</Flex>}
        
      </Card>
  )
}
