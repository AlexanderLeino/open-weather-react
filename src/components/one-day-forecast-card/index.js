import React from "react";
import { Flex } from "../flex";
import moment from "moment";
import { WeatherIconSwitch } from "../../utils.js/weatherIcons";
import styled from "styled-components";

const CapitalizedText = styled.div`
  text-transform: capitalize;
  font-size: 20px;
  text-align: center;
  margin-top: -12px;
`;

const OneDayCard = styled(Flex)`
  @media (min-width: 1235px) {
    white-space: normal;
    width: 200px;
    min-width: 200px;
  }
`;
export const OneDayForecastCard = ({ index, dataForDay, timeOfDay }) => {
  return (
    <OneDayCard
      flexDirection="column"
      width="150px"
      key={index}
      border="3px solid white"
      borderRadius="20px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#8ca2b2"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      padding={"10px"}
      margin={"0px 10px 0px 10px"}
      minWidth="150px"
    >
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        {moment()
          .add(index + 1, "days")
          .format("dddd")}
      </div>
      <Flex flexDirection="column" alignItems="center" justifyContent="space-between" width='100%'>
        <Flex flexDirection="column" alignItems="center">
            {WeatherIconSwitch(
              dataForDay?.weather[0].description,
              timeOfDay,
              true
            )}
          <CapitalizedText>
            {dataForDay?.weather[0].description}
          </CapitalizedText>
        </Flex>

        <Flex justifyContent="center">
          <div style={{ fontSize: "25px", fontWeight: "bold", marginTop: '10px'}}>
            {dataForDay.temp.day}
            <span>&#176;</span>F
          </div>
        </Flex>
      </Flex>
    </OneDayCard>
  );
};
