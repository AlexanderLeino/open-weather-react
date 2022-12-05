import React from 'react'
import styled from 'styled-components'
import { Flex } from '../flex'



const Center = styled.div`
  position: absolute;
`


const WhiteCloud = styled.div`
    background: rgba(255, 255, 255);
    width: 300px; 
    height: 100px;
    border-radius: 150px;	
    box-shadow: 10px 10px rgba(0,0,0,0.2);
    animation: move 3s infinite;
    :after {
    content: '';
    background: rgba(255, 255, 255);
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: -50px;
    left: 50px;
    }
    :before {
    content: '';
    background: rgba(255, 255, 255);
    position: absolute;
    width: 170px;
    height: 150px;
    border-radius: 50%;
    top: -90px;
    right: 40px;
    }

`

export const Cloud = () => {
  return (

        <Center>
            <WhiteCloud>
            </WhiteCloud>
        </Center>

  )
}
