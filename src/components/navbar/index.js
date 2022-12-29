import React from 'react'
import Input from '../input'
import Button from '../button'
import { Flex } from '../flex'
import styled from 'styled-components'
import {VscSearch} from 'react-icons/vsc'

const NavBarContainer = styled(Flex)`
  background-color: #313335;
 
  @media(max-width: 641px){
    height: auto;
    justify-content: center;
  }
`
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;
  @media(max-width: 373px){
    font-size: 28px;
  }

  @media(max-width: 351px){
    font-size: 26px;
  }

  @media(max-width: 351px){
    font-size: 24px;
  }

  @media(max-width: 351px){
    font-size: 20px;
  }

`



export const NavBar = ({setCityName, getGeoCoordinates}) => {
  return (
      <>
     <NavBarContainer alignItems='center' justifyContent='space-between'  height='60px'>
        <Title>Weather Dashboard</Title>
        <form onSubmit={getGeoCoordinates} style={{padding: '0px', margin:'0px', height: '50px'}}>
          <Input 
              setCityName={setCityName}
              placeholder='City Name'
              label='City Name'
              borderRadius='25px'
              border={'2px solid lightBlue'}

          />
          <Button 
            iconBefore={<VscSearch style={{color: 'blue',fontSize: '20px', fontWeight: 'bold'}}/>} 
            backgroundColor='#e2f3ff' onClick={getGeoCoordinates} borderRadius='15px 0px 0px 15px'
            position='relative'
            top='-49px'
            height='39px'
            left='-1px'
            border={'2px solid lightBlue'}
            borderRight={'2px solid lightBlue'}
           
            
            />
        </form>
      </NavBarContainer>
      
      </>
  
  )
}
