import React from "react";
import styled from "styled-components";

interface Props {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  width?: string;
  height?: string;
  padding?: string;
  background?: string;
  children?: any;
  block?: any;
}

const StyledFlex: any = styled.div`
  display: flex;
  flex-direction: ${(props: Props) => props.direction || `row`};
  align-items: ${(props: Props) => props.align || `stretch`};
  justify-content: ${(props: Props) => props.justify || `stretch`};
  margin: ${(props: Props) => props.margin || `row`};
  height: ${(props: Props) => props.height || `fit-content`};
  width: ${(props: Props) => props.width || `fit-content`};
  padding: ${(props: Props) => props.padding || `0`};
  background-color: ${(props: Props) => props.background || `none`};

  ${(props: Props) =>
    props.block &&
    `
    flex-direction: column;
    background-color: #ebecf0;
    width: 25%;
    margin: 0 5px;
    border-radius: 4px;
    min-height: 75px;
    padding: 0 7px 0;
  `}
`;

const Flex = (props: Props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
