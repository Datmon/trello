import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  blockHead?: any;
}

const StyledDiv: any = styled.div`
  ${(props: Props) =>
    props.blockHead &&
    `
  width: auto;
  margin: 0 7px;
  min-height: 40px;
  font-weight: 700;
  padding: 12px 0 8px;
`}
`;

const Title = (props: Props) => {
  return <StyledDiv {...props} />;
};

export default Title;
