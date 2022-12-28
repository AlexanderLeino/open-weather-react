import styled from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
const StyledSelect = styled.select`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#313335"};
  border: ${({ border }) => (border ? border : "1px solid lightgrey")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
  -webkit-border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
  -moz-border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
  -ms-border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : 0};
  padding: ${({ padding }) => (padding ? padding : "0px 10px 0px 0px")};
  width: ${({ width }) => (width ? width : "100%")};
  max-width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  color: ${({ color }) => (color ? color : 'black')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : ".85rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  white-space: nowrap;
 
  &:focus {
    outline: none !important;
  }
  & > option {
    padding: 5px;
    &:hover {
      background: ${'Green'};
    }
  }
`;

const SelectContainer = styled.div`
  position: relative;
  margin: ${({ margin }) => (margin ? margin : "0px")};
  white-space: nowrap;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  
`;

const SubTitleText = styled.label`
  position: absolute;
  top: -9px;
  background-color: #313335 ;
  left: 12px;
  color: #a8a8a8;
  font-size: 13px;
  padding: 0px 3px 0px 3px;
`;

const TriangleContainer = styled.span`
  display: ${({ triangleDisplay }) =>
    triangleDisplay ? triangleDisplay : "inline"};
  position: relative;
  top: ${({ triangleTop }) => (triangleTop ? triangleTop : '-5px')};
  right: ${({ triangleRight }) => (triangleRight ? triangleRight : 0)};
  bottom: ${({ triangleBottom }) => (triangleBottom ? triangleBottom : 0)};
  transform: rotate(180deg);
  color: ${({ triangleColor }) =>
    triangleColor ? triangleColor : 'white'};
  font-size: ${({ triangleSize }) => (triangleSize ? triangleSize : "10px")};
  pointer-events: none;
 
  
`;

const Select = ({
  children,
  value,
  onChange,
  subtitle,
  borderRadius,
  border,
  subtitleText,
  fullWidth,
  margin,
  backgroundColor,
  fontSize,
  triangleTop,
  triangleLeft,
  triangleRight,
  triangleBottom,
  triangleDisplay,
  padding,
  color,
  triangleColor,
  labelId,
  name,
  label,
  type,
  width,
  ...props
}) => {


  return (
    <>
      <SelectContainer fullWidth={fullWidth} margin={margin}>
        {subtitleText ? <SubTitleText>{subtitleText}</SubTitleText> : null}
        <StyledSelect
          {...props}
          labelId={labelId}
          id={props?.id}
          label={label}
          name={name}
          borderRadius={borderRadius}
          backgroundColor={backgroundColor}
          fontSize={fontSize}
          border={border}
          padding={padding}
          color={color}
          value={value}
          onChange={onChange}
          type={type}
          width={width}
        >
          {children}
        </StyledSelect>
        <TriangleContainer
          triangleTop={triangleTop}
          triangleLeft={triangleLeft}
          triangleRight={triangleRight}
          triangleBottom={triangleBottom}
          triangleDisplay={triangleDisplay}
          triangleColor={triangleColor}
        >
          <BsFillTriangleFill style={{ transform: "rotate(-180deg)" }} />
        </TriangleContainer>
      </SelectContainer>
    </>
  );
};

export default Select;
