import React from "react";
import styled from "styled-components";
import {VscSearch} from 'react-icons/vsc'
import Button from "../button";

const StyledInput = styled.input`
  box-shadow: none;
  border-radius: 0px;
  position: relative;
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "15px")};
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  transition: all 2s;
  padding: 10px;
  font-size: 1em;
  border: ${({ border }) => (border ? border : "1px solid lightgrey")};
  color: ${({ color }) => (color ? color : `black`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  white-space: normal;
  margin: 10px 0px 10px 0px;
  border-radius: 25px;
  :placeholder-shown {
    padding-left: 60px;
  }
  :not(:placeholder-shown) {
    padding-left: 60px;
  }
  :focus-visible {
    outline: none;
  }

`;



const Input = ({
  setCityName, 
  placeholder,
  type,
  color,
  height,
  width,
  required = false,
  disabled,
  name,
  id,
  label,
  value,
  border,
  backgroundColor,
  getGeoCoordinates,
}) => {

  const handleInputChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    setCityName(value)
  }
    return (
        <>
          <StyledInput
            color={color}
            placeholder={placeholder}
            type={type}
            width={width}
            height={height}
            onChange={handleInputChange}
            required={required}
            name={name}
            id={id}
            label={label}
            value={value}
            border={border}
            disabled={disabled}
            backgroundColor={backgroundColor}
          />
          
        </>
    )
};

export default Input;
