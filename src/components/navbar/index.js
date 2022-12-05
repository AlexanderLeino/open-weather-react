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
    <Flex backgroundColor={'grey'} width='100%' alignItems='center' justifyContent='space-between' >
      <Title>Forecast</Title>
      <Flex alignItems='center'>
        <Input 
            setCityName={setCityName}
            placeholder='City Name'
            label='City Name'
        />
        <Button iconBefore={<VscSearch />} onClick={getGeoCoordinates}/>
      </Flex>
    </Flex>
  )
}
