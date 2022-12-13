import React, { useState } from "react";
import { CurrentWeatherCard } from "../currentWeather";
import Select from "../../select";
import { Flex } from "../flex";
import { HourlyForecast } from "../secondary-nav-views/hourlyForecast";
import { HistoricalForecast } from "../secondary-nav-views/historicalForecast";
import { OtherLocationsBox } from "../otherLocationsBox";
export const TopHalf = ({
  allGeoLocations,
  weatherResults,
  sunRise,
  sunSet,
  timeOfDay,
  currentTime,
  getWeatherData,
  hourlyData,
  historicalData
}) => {
  const [selectedView, setSelectedView] = useState("7 Day Forecast");
  const handleOnClick = (e) => {
    let value = e.target.value;
    setSelectedView(value);
  };
  return (
    <>
        <OtherLocationsBox allGeoLocations={allGeoLocations} getWeatherData={getWeatherData} />

        <CurrentWeatherCard
            data={weatherResults}
            sunRise={sunRise}
            sunSet={sunSet}
            timeOfday={timeOfDay}
            currentTime={currentTime}
        />
      <>
        <Flex>
          <button
            className="7dayForecast"
            selectedView={selectedView}
            onClick={handleOnClick}
            value="7 Day Forecast"
          >
            7 Day Forecast
          </button>
          <button
            selectedView={selectedView}
            onClick={handleOnClick}
            value="hourly"
          >
            Hourly
          </button>
          <button
            selectedView={selectedView}
            onClick={handleOnClick}
            value="historical"
          >
            Historical
          </button>
        </Flex>
        {selectedView === "7 Day Forecast" ? (
          <div></div>
        ) : selectedView === "hourly" ? (
          <HourlyForecast chartData={hourlyData} timeOfDay={timeOfDay} />
        ) : (
          <HistoricalForecast
            chartData={historicalData}
            timeOfDay={timeOfDay}
          />
        )}
      </>
    </>
  );
};
