import React from "react";
import styled from "styled-components";
import { BsFillDropletFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { Flex } from "../flex";
import Card from "./";
import { degToCompass } from "../../utils.js/degreesToCompass";
import {TiWaves} from 'react-icons/ti'
import SunRiseImg from '../../asset/weather-icons-master/production/fill/all/sunrise.svg'
import SunSetImg from '../../asset/weather-icons-master/production/fill/all/sunset.svg'
import getUVIndex from "../../utils.js/getUVIndex";

const Text = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  text-transform: ${({ capitalize }) => (capitalize ? capitalize : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "none")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;
const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0px 10px 0px;
  color: black;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 30px;
  color: black;
`;

export const SecondaryWeatherCard = ({
  sunSet,
  sunRise,
  currentData,
  results,
}) => {
  console.log('CurrentData', currentData)
  return (
    <Card
      backgroundColor="#ebebeb"
      height="fit-content"
      borderRadius=".375rem"
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
      }
      border={"1px solid #437eee"}
      padding='15px'
      width='225px'
    >
    
      <Flex
        alignItems="center"
        height="75px"
        justifyContent="space-around"
        width="100%"
        className="sunRise"
        borderBottom="1px solid lightGrey"
      >
        <img src={SunRiseImg} height='100px'/>
        <TitleText>{sunRise}</TitleText>
      </Flex>
      <Flex
        justifyContent="space-around"
        width="100%"
        alignItems="center"
        margin={"5px 0px 0px 0px"}
        className="sunSet"
        height="75px"
        borderBottom="1px solid lightGrey"
      >
        <img src={SunSetImg} height='100px'/>
        <TitleText>{sunSet}</TitleText>
      </Flex>
      <Flex margin={"25px 0px 0px 0px"}>
        <Tile>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Dew Point
          </Text>
          <Flex alignItems={"center"}>
            <Text fontSize="20px">{currentData?.dew_point}</Text>
            <BsFillDropletFill fontSize="20px" style={{marginLeft: '10px', color:'#2b69fd'}} />
          </Flex>
        </Tile>
        <Tile>
          <Text fontSize="20px" fontWeight="bold">
            Visibility
          </Text>
          <Flex alignItems={"center"}>
            <Text fontSize="20px">
              {(currentData?.visibility / 1609).toFixed(2)} Miles{" "}
            </Text>
            <AiFillEyeInvisible
              style={{ fontSize: "23px", marginTop: "2px", marginLeft: '10px' }}
            />
          </Flex>
        </Tile>
        <Tile>
          <Text fontWeight="bold">Wind</Text>
          <Flex alignItems="center">
            <Text>{currentData?.wind_speed} MPH</Text>
              {degToCompass(currentData?.wind_deg)}
          </Flex>
        </Tile>
        <Tile>
          <Text fontWeight="bold">Humidity</Text>
          <Flex alignItems={"center"}>
            <Text>{currentData?.humidity}%</Text>
            <WiHumidity style={{ fontSize: "35px", marginLeft: '5px', color:"#2b69fd" }} />
          </Flex>
        </Tile>
      </Flex>
          <Tile justifyContent='space-between' width='100%'>
              <Text fontWeight='bold'>UV Index</Text>
              <Flex alignItems='center'>
              <Text>{currentData?.uvi}</Text>
              {getUVIndex(currentData?.uvi)}
              </Flex>
          </Tile>
    </Card>
  );
};
