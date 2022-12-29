import React from "react";
import { Flex } from "../flex";
import styled from "styled-components";
import moment from "moment";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import useWindowDimensions from "../../utils.js/getWindowDimensions";

const Tile = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  color: white;
  border: 3px solid white;
  background-color: #8ca2b2;
  font-weight: bold;
  padding: 0px 15px 0px 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  @media(max-width: 431px){
    padding: 5px 10px 5px 10px;
  }
`;
const CapitalizedText = styled.div`
  text-transform: capitalize;
  font-size: 20px;
  text-align: center;
`;

export const Minified7DayForecast = ({ data, timeOfDay }) => {
  const { width } = useWindowDimensions();
  return (
    <Flex flexDirection="column" width="100%">
      {data?.data?.daily?.map((dataForDay, index) => {
        if (index > 6) return null;
        return (
          <Tile flexDirection={width >= 600 ? "row" : "column"}>
            <div style={{ textAlign: "center"}}>
              {moment()
                .add(index + 1, "days")
                .format("dddd")}
            </div>
            <Flex
              alignItems="center"
              flexDirection={width >= 600 ? "row" : "column-reverse"}
            >
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                {dataForDay.temp.day}
                <span>&#176;</span>F
              </div>
              {width < 600 ? (
                <CapitalizedText>
                  {dataForDay?.weather[0].description}
                </CapitalizedText>
              ) : null}

              <Flex flexDirection="column" alignItems="center">
                {WeatherIconSwitch(
                  dataForDay?.weather[0].description,
                  timeOfDay,
                  true
                )}
              </Flex>
            </Flex>
          </Tile>
        );
      })}
    </Flex>
  );
};
