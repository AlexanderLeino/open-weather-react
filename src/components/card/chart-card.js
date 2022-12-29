import React, {useState} from "react";
import Card from ".";
import { LineChart } from "../line-chart";
import { Flex } from "../flex";
import Button from "../button";
import fakeData from "../../utils.js/fakeHistoricalData";
import styled from "styled-components";

  const ChartCardContainer = styled(Card)`
   @media(max-width: 1607px){
    margin-top: 10px;
  }
  @media(max-width: 768px){
    width: 500px;
  }
  @media(max-width: 540px){
    width: 315px;
  }
    
  
  @media(max-width: 412px){
    width: 315px;
  }
  `
  const ChartButton = styled(Button)`
  @media(max-width: 431px){
    font-size: 12px;
    height: auto;

  }
  `

export const ChartCard = ({historicalData, hourlyTemp}) => {

  const [selectedView, setSelectedView] = useState("hourlyTemp");
  const handleOnClick = (e) => {
    let value = e.target.value;
    setSelectedView(value);
  };


  return (
    <ChartCardContainer
      backgroundColor="#ebebeb"
      width='675px'
      border={"1px solid black"}
      borderRadius=".375rem"
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
      }
      padding={'15px'}

    >
      {selectedView === "historical" ? (
        <LineChart chartData={historicalData}/>
      ) : (
        <LineChart chartData={hourlyTemp}/>
      )}
      <Flex justifyContent="start" alignItems="center" margin={'20px 0px 10px 0px'} flexWrap='nowrap'>
        <ChartButton hoverBackgroundColor='#1e1e5d' onClick={handleOnClick} backgroundColor='white' border='1px solid black' value="hourlyTemp" borderRight='0px'>
          Temp (Hourly)
        </ChartButton>
        <ChartButton hoverBackgroundColor='#1e1e5d' onClick={handleOnClick} backgroundColor='white' border='1px solid black' value="historical">
          Historical
        </ChartButton>
      </Flex>
    </ChartCardContainer>
  );
};
