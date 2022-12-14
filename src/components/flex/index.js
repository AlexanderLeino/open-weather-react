import { border } from 'polished'
import React from 'react'
import styled from 'styled-components'

const FlexBox = styled.div`
    display: Flex;
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : null};
    align-items: ${({alignItems}) => alignItems ? alignItems : null};
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};
    margin: ${({margin}) => margin ? margin : 0};
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : null};
    height: ${({height}) => height ? height : 'auto'};
    width: ${({width}) => width ? width : 'auto'};
    flex-wrap: wrap;
    border: ${({border}) => border ? border : '0px'};
    padding: ${({padding}) => padding ? padding : '0px'};
    box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : '0px'};
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '0px'};
`


export const Flex = ({children, ...props}) => {
  return (
    <FlexBox {...props}>
        {children}
    </FlexBox>
  )
}