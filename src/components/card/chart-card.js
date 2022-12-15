import React, {useState} from "react";
import Card from ".";
import { LineChart } from "../line-chart";
import { Flex } from "../flex";
import Button from "../button";
export const ChartCard = ({historicalData, hourlyTemp}) => {
  const [selectedView, setSelectedView] = useState("hourlyTemp");
  const handleOnClick = (e) => {
    let value = e.target.value;
    setSelectedView(value);
  };
  return (
    <Card
      backgroundColor="lightgreen"
      width="auto"
      border={"1px solid black"}
      borderRadius=".375rem"
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
      }
    >
      {selectedView === "historical" ? (
        <LineChart chartData={historicalData} />
      ) : (
        <LineChart chartData={hourlyTemp} />
      )}
      <Flex justifyContent="start" alignItems="center" width="100%">
        <Button onClick={handleOnClick} value="hourlyTemp">
          Temp (Hourly)
        </Button>
        <Button onClick={handleOnClick} value="historical">
          Historical
        </Button>
      </Flex>
    </Card>
  );
};
