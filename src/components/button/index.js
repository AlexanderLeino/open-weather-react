import styled from "styled-components";
import { darken } from "polished";

const StyledButton = styled.button`
  display: flex;
  position: relative;
  top: ${({top}) => top ? top : 0};
  bottom: ${({bottom}) => bottom ? bottom : 0};
  left: ${({left}) => left ? left : 0};
  right: ${({right}) => right ? right : 0};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  background: ${({ backgroundColor }) => backgroundColor || "none"};
  border: ${({ border }) => (border ? border : "none")};
  ${({ borderRight }) => (borderRight && `border-right: ${borderRight};`)};
  color: ${({ color }) => (color ? color : 'black')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)};
  cursor: pointer;
  outline: none;
  padding: ${({ padding }) => padding || "10px 15px"};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "bold")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : "none")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "Roboto Condensed"};
  letter-spacing: 1px;
  line-height: normal;
  height: ${({height}) => height ? height : '33px'};
  text-transform: uppercase;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : null)};
  border-bottom: ${({ borderBottom }) => (borderBottom ? borderBottom : null)};
  margin-top: ${({marginTop}) => marginTop ? marginTop : 0};
  border-right: ${({borderRight}) => borderRight ? borderRight : null};
  white-space: nowrap;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || "white"};
    background: ${({ backgroundColor, hoverBackgroundColor }) =>
    hoverBackgroundColor
      ? hoverBackgroundColor
      : backgroundColor
        ? darken(0.05, backgroundColor)
        : null};
  }
  &:disabled {
    border: ${({ disabledBorder }) =>
    disabledBorder ? disabledBorder : "transparent"};
    color: ${({ disabledTextColor }) =>
    disabledTextColor ? disabledTextColor : "#e7e7e7"};
    background: ${({ disabledBackgroundColor }) =>
    disabledBackgroundColor ? disabledBackgroundColor : "lightgrey"};
    cursor: not-allowed;
  }
  :focus {
    background-color: lightgrey;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  transform: ${({ rotate = 0 }) => `rotate(${rotate}deg)`};
  padding: ${({ iconPadding }) => (iconPadding ? iconPadding : 0)};
  font-size: 20px;
  color: ${({ iconColor }) => (iconColor ? iconColor : null)};
  margin-right: ${({ iconBefore }) => (iconBefore ? "5px" : "0")};
  margin-left: ${({ iconAfter }) => (iconAfter ? "5px" : "0")};
`;

const Button = ({ iconColor, value, name, key, ...props }) => {
  return (
    <StyledButton {...props} key={key} value={value}
    name={name}
    >
      {props.iconBefore && (
        <Span
          iconColor={iconColor}
          rotate={props.rotateBefore}
          rotateBefore={props.rotateBefore}
          iconBefore={props.iconBefore}
          value={value}
        >
          {props.iconBefore}
        </Span>
      )}

      {props.children}

      {props.iconAfter && (
        <Span
          iconColor={iconColor}
          rotate={props.rotateAfter}
          rotateAfter={props.rotateAfter}
          iconAfter={props.iconAfter}
          value={value}
        >
          {props.iconAfter}
        </Span>
      )}
    </StyledButton>
  );
};

export default Button;
