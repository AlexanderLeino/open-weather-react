import React from 'react'
import Input from '../input'
import Button from '../button'
import { Flex } from '../flex'
import styled from 'styled-components'
import {VscSearch} from 'react-icons/vsc'
import Card from '../card'
import Select from '../select'
import './navbar.css'




export const NavBar = ({setCityName, getGeoCoordinates}) => {
  return (
      <>
     <Flex className='navBar' alignItems='center' justifyContent='space-between'  height='60px'>
        <div style={{fontWeight: 'bold', fontSize: '25px'}}>Weather Dashboard</div>
        <form onSubmit={getGeoCoordinates} style={{padding: '0px', margin:'0px', height: '50px'}}>
          <Input 
              setCityName={setCityName}
              placeholder='City Name'
              label='City Name'
              borderRadius='25px'

          />
          <Button 
            iconBefore={<VscSearch style={{color: 'Black'}}/>} 
            backgroundColor='lightgrey' onClick={getGeoCoordinates} borderRadius='15px 0px 0px 15px'
            position='relative'
            top='-42px'
            height='32px'
            left='-1px'
            border={'0px 2px 0px 0px solid red'}
            />
        </form>
      </Flex>
      
      </>
  
  )
}
