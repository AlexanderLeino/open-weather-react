import React from "react";
import Card from "../card";
import Button from '../button'
export const PreviousSearch = ({setCityName, previousLocations}) => {
  return (
    <Card
      backgroundColor="lightBlue"
      width={"auto"}
      height="auto"
      borderRadius=".375rem"
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
      }
      border={"1px solid black"}
      padding="15px"
    >
    <div>Previously Searched Locations</div>
    {previousLocations.map((location) => {
        return (
            <Button value={location} onClick={(e) => setCityName(e.target.value)}>{location.name}</Button>
        )
    })}
    </Card>
  );
};
