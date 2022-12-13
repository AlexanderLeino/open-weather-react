import React from 'react'
import Button from '../button'
import { Flex } from '../flex';
export const OtherLocationsBox = ({allGeoLocations, getWeatherData}) => {
    
    const handleSelectChange = (e) => {
        let foundLocation = allGeoLocations[e.target.value];
        getWeatherData(foundLocation);
      };
    
  return (
    <>
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
    {allGeoLocations && 
        
        allGeoLocations.map((location, index) => {
            return (
            <Button onClick={handleSelectChange} value={index}>
                {location.name}, {location.state} - {location.country}
            </Button>
            )
        }
    )}
    </Flex>
    {/* {allGeoLocations && (
        <Flex margin={"0px 10px 0px 10px"}>
          <Select onChange={handleSelectChange}>
            {allGeoLocations.map((location, index) => {
              return (
                <option value={index} key={index}>
                  {location.name}, {location.state} - {location.country}
                </option>
              );
            })}
          </Select>
        </Flex>
      )}
     */}
    </>
  )
}
