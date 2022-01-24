import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  blockString: boolean;
  header?: string;
}

const StyledCard = styled.div`
  ${(props: Props) =>
    props.blockString &&
    `
    background-color: #ffffff;
    width: auto;
    margin: 0 0px;
    min-height: 32px;
    cursor: pointer;
    border: solid;
    border-width: 0;
    border-color: #c5bbbb;
    border-radius: 4px;
    border-bottom-width: 1px;
    text-align: left;
    padding: 5px 8px;
    margin-bottom: 8px;
    &:hover {
      background-color: #f9f9f9;
    }
  `}
`;

const Card = ({ header, onClick, blockString }: Props) => {
  return (
    <StyledCard
      blockString={blockString}
      onClick={() => {
        onClick();
      }}
    >
      {header}
    </StyledCard>
  );
};

export default Card;
