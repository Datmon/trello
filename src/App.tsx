/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import Block from "./UI/Block/Block";
import Flex from "./components/Flex/Flex";
import { Modal } from "./UI/Modal/Modal";
import { CardInteface, NewBlock } from "./types/interfaces";
import defaultColumns from "./UI/defaultColumns";
import { useAppSelector } from "./hooks/redux";

interface columnData {
  title: string;
  cards: CardInteface[];
}

const getData = () => {
  const newData: string | null = localStorage.getItem(`data`);
  if (newData === null) {
    localStorage.setItem(`data`, JSON.stringify(defaultColumns));
    return defaultColumns;
  }
  return JSON.parse(newData);
};

function App() {
  const {} = useAppSelector((state) => state.dataReducer.data);

  const getUser = () => {
    const storageUser = localStorage.getItem(`username`);
    if (!storageUser) {
      return prompt() || `anon`;
    }
    return storageUser;
  };

  const [modalVisible, setModalVisivle] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<CardInteface>({
    header: `Unvisible text`,
    description: `You can't see this`,
    key: `string`,
    column: -1,
    title: `unvisible title`,
  });
  const [username, setUsername] = useState<string>(getUser());
  const [fullData, setFullData] = useState<columnData[]>(getData());

  // const changeCardDescription = (newDescription: string | undefined) => {
  //   const cardWithNewDescription = {
  //     ...currentCard,
  //     description: newDescription,
  //   };
  //   localStorage.setItem(
  //     JSON.stringify(currentCard.column),
  //     JSON.stringify(cardWithNewDescription)
  //   );
  //   console.log(cardWithNewDescription);
  // };

  const openCard = (cardData: CardInteface) => {
    setCurrentCard(cardData);
    setModalVisivle(true);
  };

  const changeBlockData = (newBlock: NewBlock, index: number) => {
    // console.log(fullData.filter((oldData) => oldData.title !== newBlock.title));
    // const dataWithoutChanges = fullData.filter(
    //   (oldData) => oldData.title !== newBlock.title
    // );
    // console.log([...dataWithoutChanges, newBlock]);

    const newFullData = fullData.map((oldBlock, indexOfOldBlock) => {
      if (indexOfOldBlock !== index) {
        return oldBlock;
      }
      return {
        ...fullData[index],
        title: newBlock.title,
        cards: newBlock.cards,
      };
    });
    setFullData(newFullData);
    localStorage.setItem(`data`, JSON.stringify(newFullData));
  };

  const changeCardData = (newCardData: CardInteface) => {
    changeBlockData(
      {
        cards: fullData[currentCard.column].cards.map((card) => {
          if (card.key !== newCardData.key) {
            return card;
          }
          return newCardData;
        }),
        title: newCardData.title,
      },
      newCardData.column
    );
    setCurrentCard(newCardData);
    // console.log(fullData[currentCard.column]);
    // changeBlockData(newCardData, newCardData.column);
  };

  const deleteCardFromData = (deletedCard: any) => {
    changeBlockData(
      {
        cards: fullData[currentCard.column].cards.filter(
          (card) => card.key !== deletedCard.key
        ),
        title: currentCard.title,
      },
      currentCard.column
    );
  };

  useEffect(() => {
    // alert(`Введите никнейм`);
    console.log(username);
    localStorage.setItem(`username`, username);
  }, []);

  return (
    <>
      <Modal
        isVisible={modalVisible}
        setVisible={setModalVisivle}
        currentCard={currentCard}
        changeCardData={changeCardData}
        currentUser={username}
        deleteCardFromData={deleteCardFromData}
      />
      <Flex main>
        {fullData.map((block, index) => {
          return (
            <Block
              index={index}
              dataBlock={block.cards}
              openCard={openCard}
              titleBlock={block.title}
              key={block.title}
              changeBlockData={changeBlockData}
            />
          );
        })}
      </Flex>
    </>
  );
}

export default App;
