import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from ".";
import { Flex } from "../flex";
import { BsUmbrellaFill } from "react-icons/bs";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import getBackgroundStyling from "../../utils.js/currentWeatherCardSwitch";
import useWindowDimensions from "../../utils.js/getWindowDimensions";
const Text = styled.div`
  color: ${({ color }) => (color ? color : "black")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-transform: ${({ capitalize }) => (capitalize ? capitalize : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;

const SecondaryWeatherContainer = styled(Card)`
  @media(max-width: 615px){
    width: fit-content;
  }


`

const DescriptionCard = styled(Flex)`
  @media(max-width: 412px){
    width: 250px;
    align-items: center;
  }



`

export const CurrentWeatherCard = ({ results, currentData, timeOfday }) => {
  const {width} = useWindowDimensions()
  const [cardStyling, setCardStyling] = useState({});
  
  useEffect(() => {
    if (currentData === undefined) return;
    getBackgroundStyling(
      currentData.weather[0].description,
      timeOfday,
      setCardStyling
    );
  }, [currentData]);

  //TODO: Rainy Day numbers needed to be adjusted appropriately
  return (
    <SecondaryWeatherContainer
      
      height="auto"
      borderRadius=".375rem"
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
      }
      border={"1px solid black"}
      padding="15px"
      justifyContent="space-between"
      backgroundImage={cardStyling?.img}
      backgroundColor={"#dfdfdf"}
      width='500px'
    >
      <Flex justifyContent="space-between" width="100%" alignItems="center">
        <Text fontSize={"35px"} fontWeight="bold" color={cardStyling?.color}>
          {currentData?.temp.toFixed(0)}
          <span>&#176;</span>F
        </Text>
        <Flex justifyContent="space-between" alignItems="center" width="130px">
          <Flex flexDirection="column" alignItems="flex-start">
            <Text fontWeight="bold" color={cardStyling?.color}>
              High:
            </Text>
            <Text fontWeight="bold" color={cardStyling?.color}>
              Low:
            </Text>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-start">
            <Text color={cardStyling?.color} fontWeight="bold">
              {results?.daily[0]?.temp?.max}
              <span>&#176;F</span>
            </Text>
            <Text color={cardStyling?.color} fontWeight="bold">
              {results?.daily[0]?.temp?.min}
              <span>&#176;F</span>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex width="100%" style={{position: 'relative', top: '40px'}}>
        <DescriptionCard
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          flexGrow={1}
        >
        {width <= 412 
        && <Flex>
            {WeatherIconSwitch(
              currentData?.weather[0].description,
              timeOfday,
              false
            )}
        </Flex>}
          <Text
            capitalize={"capitalize"}
            fontWeight="bold"
            color={cardStyling.color}
          >
            {currentData?.weather[0].description}
          </Text>
          <Text
            color={cardStyling?.color}
            fontWeight="bold"
            margin={"5px 0px 0px 0px"}
          >
            Feels Like: {currentData?.feels_like}
            <span>&#176;F</span>
          </Text>
          <Flex
            justifyContent="center"
            margin="5px 0px 0px 0px"
            alignItems={"center"}
          >
            <BsUmbrellaFill style={{ fontSize: "20px", color: cardStyling.color, marginRight: '10px' }} />
            <Text fontWeight={"bold"} color={cardStyling?.color}>
              {(results?.daily?.[0]?.pop * 100).toFixed(0)}%
            </Text>
            <Text color={cardStyling?.color} fontWeight="bold" style={{marginLeft: '5px'}}>
              Chance Of Percipitation
            </Text>
          </Flex>
        </DescriptionCard>
        {width >= 412 
        && <Flex>
          <span style={{ fontSize: "75px", color: cardStyling.color }}>
            {WeatherIconSwitch(
              currentData?.weather[0].description,
              timeOfday,
              false
            )}
          </span>
        </Flex>}
        
      </Flex>
    </SecondaryWeatherContainer>
  );
};
