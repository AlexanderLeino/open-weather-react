import React, { useEffect, useState } from "react";
import { Flex } from "../flex";
import Button from "../button";
import styled from "styled-components";
import { SevenDayForecast } from "../secondary-nav-views/7DayForecast";
import { HourlyForecast } from "../secondary-nav-views/hourlyForecast";
import { HistoricalForecast } from "../secondary-nav-views/historicalForecast";

const DayForecastButton = styled(Button)`
  background-color: ${({ selectedView }) =>
    selectedView === "7 Day Forecast" ? "lightblue" : null};
`;
const HourlyButton = styled(Button)`
  background-color: ${({ selectedView }) =>
    selectedView === "Hourly" ? "lightGreen" : null};
`;

const HistoricalButton = styled(Button)`
  background-color: ${({ selectedView }) =>
    selectedView === "Historical" ? "orange" : null};
`;
export const SecondaryNav = ({ data, timeOfDay }) => {
  const [selectedView, setSelectedView] = useState("7 Day Forecast");
  const handleOnClick = (e) => {
    let value = e.target.value;
    setSelectedView(value);
  };
  return (
    <>
      <Flex>
        <DayForecastButton
          className="7dayForecast"
          selectedView={selectedView}
          onClick={handleOnClick}
          value="7 Day Forecast"
        >
          7 Day Forecast
        </DayForecastButton>
        <HourlyButton
          selectedView={selectedView}
          onClick={handleOnClick}
          value="hourly"
        >
          Hourly
        </HourlyButton>
        <HistoricalButton
          selectedView={selectedView}
          onClick={handleOnClick}
          value="historical"
        >
          Historical
        </HistoricalButton>
      </Flex>
      {selectedView === "7 Day Forecast" ? (
        <SevenDayForecast data={data} timeOfDay={timeOfDay} />
      ) : selectedView === "hourly" ? (
        <HourlyForecast data={data} timeOfDay={timeOfDay} />
      ) : (
        <HistoricalForecast data={data} timeOfDay={timeOfDay} />
      )}
    </>
  );
};
