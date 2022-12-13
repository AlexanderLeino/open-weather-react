import React from 'react'
import Input from '../input'
import Button from '../button'
import { Flex } from '../flex'
import styled from 'styled-components'
import {VscSearch} from 'react-icons/vsc'

const Title = styled.div`
  margin-top: 10px;
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
`


export const NavBar = ({setCityName, getGeoCoordinates}) => {
  return (
   
      
      <Flex alignItems='center' justifyContent='center' backgroundColor='#141414' height='60px'>
        <form onSubmit={getGeoCoordinates} style={{padding: '0px', margin:'0px'}}>
          <Input 
              setCityName={setCityName}
              placeholder='City Name'
              label='City Name'
              borderRadius='25px'

          />
          <Button 
            iconBefore={<VscSearch style={{color: 'white'}}/>} 
            backgroundColor='black' onClick={getGeoCoordinates} borderRadius='15px 0px 0px 15px'
            position='relative'
            top='-42px'
            height='32px'
            left='-2px'

            />
        </form>
      </Flex>
  
  )
}
