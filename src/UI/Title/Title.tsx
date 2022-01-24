import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  children: any;
  changeBlockTitle: (newTitle: string) => void;
}

const StyledDiv = styled.input`
  width: 100%;
  font-weight: 700;
  margin: 5px 0;
  height: 30px;
  padding: 7px 7px;
  background-color: #ebecf0;
  resize: none;
  border-radius: 4px;
  border: none;
  outline: none;
  &:hover {
    background-color: #d7d8dd;
    color: black;
  }
`;

const Title = ({ changeBlockTitle, children }: Props) => {
  const [titleValue, setTitleValue] = useState(children);
  return (
    <StyledDiv
      value={titleValue}
      onKeyDown={(event) =>
        event.key === `Enter` && changeBlockTitle(titleValue)
      }
      onChange={(e) => {
        setTitleValue(e.target.value);
      }}
      onMouseOut={() => changeBlockTitle(titleValue)}
    />
  );
};

export default Title;
