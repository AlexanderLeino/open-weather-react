import { border } from 'polished'
import React from 'react'
import styled from 'styled-components'

const FlexBox = styled.div`
    display: Flex;
    border-bottom: ${({borderBottom}) => borderBottom ? borderBottom : 0};
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : null};
    align-items: ${({alignItems}) => alignItems ? alignItems : null};
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};
    margin: ${({margin}) => margin ? margin : 0};
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : null};
    height: ${({height}) => height ? height : 'auto'};
    width: ${({width}) => width ? width : 'auto'};
    flex-wrap: ${({flexWrap}) => flexWrap ? flexWrap : 'wrap'};
    border: ${({border}) => border ? border : '0px'};
    padding: ${({padding}) => padding ? padding : '0px'};
    box-shadow: ${({boxShadow}) => boxShadow ? boxShadow : '0px'};
    border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '0px'};
    flex-grow: ${({flexGrow}) => flexGrow ? flexGrow : 0};
    min-width: ${({minWidth}) => minWidth ? minWidth : 'auto'};
    align-content: ${({alignContent}) => alignContent ? alignContent : null};
`


export const Flex = ({children, ...props}) => {
  return (
    <FlexBox {...props}>
        {children}
    </FlexBox>
  )
}