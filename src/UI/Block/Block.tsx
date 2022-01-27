import React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Flex from "../../components/Flex/Flex";
import Title from "../Title/Title";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cardSlice } from "../../store/Slices/CardSlice";
import { columnSlice } from "../../store/Slices/ColumnSlice";

interface Props {
  openCard: (cardId: string) => void;
  titleBlock: string;
  blockId: string;
}

const Block = ({ titleBlock, openCard, blockId }: Props) => {
  const dataCards = useAppSelector((state) => state.cardReducer);
  const dispatch = useAppDispatch();
  const { changeTitle } = columnSlice.actions;
  const { addCard } = cardSlice.actions;

  const addNewCard = (newHeader: string) => {
    const newCard = {
      header: newHeader,
      columnId: blockId,
      id: uuidv4(),
      description: ``,
    };
    dispatch(addCard(newCard));
  };

  const changeBlockTitle = (newTitle: string) => {
    const changedTitle = {
      title: newTitle,
      id: blockId,
    };
    dispatch(changeTitle(changedTitle));
  };

  return (
    <Flex block>
      <Title changeBlockTitle={changeBlockTitle}>{titleBlock}</Title>
      {dataCards
        .filter((card) => card.columnId === blockId)
        .map((section) => (
          <Card
            key={section.id}
            blockString
            header={section.header}
            onClick={() => openCard(section.id)}
          />
        ))}

      <Button addNewCard={addNewCard} />
    </Flex>
  );
};

export default Block;
