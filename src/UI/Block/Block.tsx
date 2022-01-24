import React from "react";
import { CardInteface } from "../../types/interfaces";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Flex from "../../components/Flex/Flex";
import Title from "../Title/Title";

interface Props {
  dataBlock: CardInteface[];
  openCard: any;
  titleBlock: string;
  changeBlockData: any;
  index: number;
}

const Block = ({
  dataBlock,
  titleBlock,
  openCard,
  changeBlockData,
  index,
}: Props) => {
  // props.setFullData(`hello`);

  // const dataColumnNumber = dataCard.column.toString();

  // const addNewCard = (columnNumber: string, newCard: any) => {
  //   const newDataWithCard = {
  //     ...dataCard,
  //     cards: [...dataCard.cards, { ...newCard }],
  //   };
  //   localStorage.setItem(columnNumber, JSON.stringify(newDataWithCard));
  //   setDataCard(newDataWithCard);
  // };

  const addNewCard = (newHeader: string) => {
    const newCard = {
      column: index,
      commnets: [],
      description: ``,
      header: newHeader,
      key: Date.now(),
      title: titleBlock,
    };
    changeBlockData(
      { title: titleBlock, cards: [...dataBlock, newCard] },
      index
    );
  };

  const changeBlockTitle = (newTitle: string) => {
    changeBlockData({ title: newTitle, cards: dataBlock }, index);
  };

  return (
    <Flex block>
      <Title changeBlockTitle={changeBlockTitle}>{titleBlock}</Title>
      {dataBlock.map((section: CardInteface) => {
        return (
          <Card
            key={section.key}
            blockString
            header={section.header}
            onClick={() => openCard({ ...section, title: titleBlock })}
          />
        );
      })}
      <Button addNewCard={addNewCard} />
    </Flex>
  );
};

export default Block;
