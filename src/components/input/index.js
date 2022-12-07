import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: ${({ labelHidden }) => labelHidden ? 'none' : 'block'};
  font-size: ${({ subtitleFontSize }) =>
    subtitleFontSize ? subtitleFontSize : "1em"};
  color: ${({ color, subtitleColor }) =>
    subtitleColor ? subtitleColor : color ? color : `black`};
  opacity: 1;
  transform: translateY(-1.25em);
  transform-origin: 0 0;
  transition: all 0.3s;
  pointer-events: none;
  margin-left: 5px;
  margin-top: -8px;
`;
const StyledInput = styled.input`
  box-shadow: none;
  border-radius: 0px;
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "10px")};
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  transition: all 2s;
  padding: 10px;
  font-size: 1em;
  border: ${({ border }) => (border ? border : "1px solid lightgrey")};
  color: ${({ color }) => (color ? color : `black`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  white-space: normal;

  &::placeholder {
    color: transparent;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border-color: black;
  }
  &:focus + ${Label}, :not(:placeholder-shown) + ${Label} {
    transform: translateY(-3.0em) scale(0.8);
    margin-top: 0;
  }
  &:focus + ${Label} {
    margin-top: 0;
  }
`;

const InputContainer = styled.div`
  transition: all 0.3s;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  margin: ${({ margin, labelHidden }) => {
    return labelHidden
      ? 0
      : margin
        ? margin
        : '25px 0px 0px 0px'
  }};
  margin-right: ${({marginRight}) => {
  return  marginRight ? marginRight : null
  }};
`;

const Input = ({
  setCityName, 
  handleChange, 
  placeholder,
  type,
  color,
  height,
  width,
  subtitleColor,
  calenderColor,
  required = false,
  labelHidden,
  disabled,
  onChange,
  name,
  id,
  label,
  value,
  border,
  labelBackgroundColor,
  margin,
  fullWidth,
  backgroundColor,
  multiple = false,
  min,
  marginRight,
  step
}) => {

  const handleInputChange = (e) => {
    e.preventDefault()
    let value = e.target.value
    setCityName(value)
  }
    return (
      <div style={{ height: "70px", width: fullWidth ? "100%" : "auto" }}>
        <InputContainer
          margin={margin}
          fullWidth={fullWidth}
          labelHidden={labelHidden}
          marginRight={marginRight}
          
        >
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
            multiple={multiple}
            
          />
          <Label
            htmlFor={type}
            subtitleColor={subtitleColor}
            color={color}
            labelHidden={labelHidden}
          >
            {label}
          </Label>
        </InputContainer>
      </div>
    )
};

export default Input;
