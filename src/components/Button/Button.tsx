import React from "react";
import styled from "styled-components";

interface Props {
  blockString: any;
  children: any;
}

const StyledButton: any = styled.button`
  ${(props: Props) =>
    props.blockString &&
    `
    background-color: #ffffff;
    width: auto;
    margin: 0 0px;
    min-height: 32px;
    cursor: pointer;
    border-width: 0;
    border-color: #eee;
    border-radius: 4px;
    border-bottom-width: 1px;
    text-align: left;
    padding: 0 8px;
    margin-bottom: 8px;
    &:hover {
      background-color: #f9f9f9;
    }
  `}
`;

const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;
