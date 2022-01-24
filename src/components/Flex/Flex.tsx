import React from "react";
import styled from "styled-components";

interface Props {
  main?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}

const StyledFlex = styled.div`
  display: flex;

  ${(props: Props) =>
    props.block &&
    `
      flex-direction: column;
      background-color: #ebecf0;
      width: 25%;
      margin: 0 5px;
      border-radius: 4px;
      min-height: 75px;
      height: fit-content;
      padding: 0 7px 7px;
    `}
  ${(props: Props) =>
    props.main &&
    `
      justify-content: center;
      flex-direction: row;
      padding: 50px 20px;
      width: auto;
      background-color: green;
      opacity: 100%;
      margin: 0 25px;
    `}
`;

const Flex = (props: Props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
