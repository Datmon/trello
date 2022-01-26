/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import Block from "./UI/Block/Block";
import Flex from "./components/Flex/Flex";
import { Modal } from "./UI/Modal/Modal";
import { useAppSelector } from "./hooks/redux";

function App() {
  const dataTitles = useAppSelector((state) => state.columnReducer);

  const [modalVisible, setModalVisivle] = useState<boolean>(false);
  const [currentCardId, setCurrentCardId] = useState<string>(`0`);

  const [username, setUsername] = useState<string>(``);

  const openCard = (cardId: string) => {
    setCurrentCardId(cardId);
    setModalVisivle(true);
  };

  useEffect(() => {
    setUsername(prompt() || `anon`);
  }, []);

  return (
    <>
      <Modal
        isVisible={modalVisible}
        setVisible={setModalVisivle}
        currentCardId={currentCardId}
        currentUser={username}
      />
      <Flex main>
        {dataTitles.map((block) => {
          return (
            <Block
              openCard={openCard}
              titleBlock={block.title}
              blockId={block.id}
              key={block.title}
            />
          );
        })}
      </Flex>
    </>
  );
}

export default App;
