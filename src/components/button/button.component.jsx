import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;
  border: none;
  margin-left: 20px;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSign) {
    return googleSignInStyle;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: "Inter";
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
