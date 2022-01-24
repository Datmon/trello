import React, { MutableRefObject, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  addNewCard: (value: any) => void;
}

const StyledAddButton = styled.div<{
  active: boolean;
}>`
  display: ${({ active }) => (active ? `none` : `block`)};
  width: auto;
  min-height: 30px;
  padding: 4px 0 16px;
  cursor: pointer;
  padding: 7px;
  border-radius: 4px;
  &:hover {
    background-color: #d7d8dd;
    color: black;
  }
`;

const StyledText = styled.textarea<{
  active: boolean;
}>`
  display: ${({ active }) => (active ? `block` : `none`)};
  border-width: 0;
  border-color: #c5bbbb;
  border-radius: 4px;
  border-bottom-width: 1px;
  resize: none;
  outline: none;
  width: auto;
  min-height: 60px;
  padding: 5px 50px 5px 8px;
  margin-bottom: 2px;
`;

const useFocus = (): [any, () => void] => {
  const htmlElRef: MutableRefObject<any> = useRef(null);
  const setFocus = (): void => {
    htmlElRef?.current?.focus?.();
  };

  return [htmlElRef, setFocus];
};

const Button = ({ addNewCard }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const [newCard, setNewColumn] = useState<string | undefined>();
  const [inputRef, setInputFocus] = useFocus();

  const onEnterPress = (value: any) => {
    addNewCard(value);
    setNewColumn(``);
    setActive(false);
  };

  return (
    <>
      <StyledText
        active={active}
        placeholder="Введите заголовок для этой карточки"
        value={newCard}
        onMouseOut={() => setActive(false)}
        onChange={(e) => setNewColumn(e.target.value)}
        onKeyDown={(event) => event.key === `Enter` && onEnterPress(newCard)}
        ref={inputRef}
      />
      <StyledAddButton
        active={active}
        onClick={setInputFocus}
        onClickCapture={() => setActive(true)}
      >
        + Добавить карторчку
      </StyledAddButton>
    </>
  );
};

export default Button;
