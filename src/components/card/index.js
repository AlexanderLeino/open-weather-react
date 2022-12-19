import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  position: ${({ position }) => (position ? position : "relative")};
  top: ${({ top }) => (top ? top : null)};
  bottom: ${({ bottom }) => (bottom ? bottom : null)};
  right: ${({ right }) => (right ? right : null)};
  left: ${({ left }) => (left ? left : null)};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : null};
  border: ${({ border }) => (border ? border : null)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "fit-content")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  flex-wrap: wrap;
  flex-grow: ${({flexGrow}) => flexGrow ? flexGrow : 1};
  flex-shrink: 1;
  height: ${({height}) => height ? height : 'auto'};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "0")};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "none"};
  background-image: ${({backgroundImage}) => backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'none'};  
  background-blend-mode: multiply;
  
 
`;

const Card = (props) => {
  return <CardContainer {...props}>{props.children}</CardContainer>;
};

export default Card;
