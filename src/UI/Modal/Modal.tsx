/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cardSlice } from "../../store/reducers/CardSlice";
import { commentSlice } from "../../store/reducers/CommentSlice";
import { ICard, ICardComments } from "../../types/interfaces";

interface Props {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  currentCardId: string;
  currentUser: string | null;
}

const StyledBackround = styled.div`
  display: ${(props: { isVisible: boolean }) =>
    props.isVisible ? `block` : `none`};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 70%;
`;

const StyledModal = styled.div`
  display: ${(props: { isVisible: boolean }) =>
    props.isVisible ? `flex` : `none`};
  flex-direction: column;
  padding: 20px;
  position: absolute;
  background-color: #ebecf0;
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-top: 50px;
  border-radius: 4px;
  overflow: auto;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
  height: fit-content;
`;

const StyledTitle = styled.input`
  font-size: 20px;
  margin-bottom: 4px;
  border-width: 0;
  padding: 5px;
  padding-left: 0;
  outline: none;
  border-radius: 4px;
  background-color: inherit;
`;

const StyledTitleDescription = styled.p`
  font-size: 14px;
  color: #5e6c84;
`;

const StyledDescription = styled.textarea`
  height: auto;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  border: none;
  resize: none;
  outline: none;
`;

const StyledText = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StyledCommentHead = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCommentContent = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const StyledAddCommnets = styled.button<{
  visibleAddComment: boolean;
}>`
  display: ${({ visibleAddComment }) =>
    !visibleAddComment ? `block` : `none`};
  width: 100%;
  background-color: white;
  border: none;
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d7d8dd;
  }
`;

const StyledAddCommentTextarea = styled.input<{
  visibleAddComment: boolean;
}>`
  display: ${({ visibleAddComment }) => (visibleAddComment ? `block` : `none`)};
  width: 100%;
  background-color: white;
  border: none;
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledSendButton = styled.button<{
  visibleAddComment: boolean;
}>`
  display: ${({ visibleAddComment }) => (visibleAddComment ? `block` : `none`)};
  cursor: pointer;
`;

const StyledButtonsPanel = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const StyledCommentHeadText = styled.div`
  margin-right: 10px;
  margin-bottom: 5px;
`;

const DeleteCommentButton = styled.button`
  color: red;
  border: none;
  padding: 0;
  background-color: none;
  margin-bottom: 4px;
  cursor: pointer;
`;

export const Modal = ({
  currentCardId,
  setVisible,
  isVisible,
  currentUser,
}: Props) => {
  const dataCard = useAppSelector(
    (state) =>
      state.cardReducer.find((card) => card.id === currentCardId) as ICard
  );
  const dataComments = useAppSelector(
    (state) =>
      state.commentReducer.filter(
        (comment: ICardComments) => comment.cardId === currentCardId
      ) as Array<ICardComments>
  );

  const columnTitle =
    useAppSelector((state) => state.columnReducer).find(
      (column) => column.id === dataCard.columnId
    )?.title || `unknown`;

  const dispatch = useAppDispatch();

  const { changeCardData, deleteCard } = cardSlice.actions;
  const { addComment, deleteComment } = commentSlice.actions;

  const [newDescription, setNewDescription] = useState<string | undefined>(``);
  const [newTitle, setNewTitle] = useState<string | undefined>(``);
  const [visibleAddComment, setVisibleAddComment] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string | undefined>(``);
  const changeCardDescription = (newDesc: string | undefined) => {
    const newCard: ICard = {
      columnId: dataCard.columnId,
      description: newDesc,
      header: dataCard.header,
      id: dataCard.id,
    };
    dispatch(changeCardData(newCard));
  };

  const changeCardTitle = (
    newTitleValue: string | undefined = `Empty title`
  ) => {
    const newCard: ICard = {
      columnId: dataCard.columnId,
      description: dataCard.description,
      header: newTitleValue,
      id: dataCard.id,
    };
    dispatch(changeCardData(newCard));
  };

  const addCommnet = (valueNewComment: string | undefined) => {
    if (valueNewComment) {
      const newCommentCard: ICardComments = {
        author: currentUser || `anon`,
        cardId: dataCard.id,
        columnId: dataCard.columnId,
        id: uuidv4(),
        content: valueNewComment,
      };
      dispatch(addComment(newCommentCard));
    }
    setNewComment(``);
    setVisibleAddComment(false);
  };

  const deleteCurrentCard = () => {
    setVisible(false);
    dispatch(deleteCard(dataCard.id));
  };

  useEffect(() => {
    setNewDescription(dataCard.description);
    setNewTitle(dataCard.header);
  }, [currentCardId]);

  return (
    <>
      <StyledBackround
        onClick={() => setVisible(false)}
        isVisible={isVisible}
      />
      <StyledModal isVisible={isVisible}>
        <StyledHeader>
          <DeleteCommentButton onClick={() => deleteCurrentCard()}>
            Удалить карточку
          </DeleteCommentButton>
          <StyledTitle
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onMouseOut={() => changeCardTitle(newTitle)}
            onKeyDown={(event) =>
              event.key === `Enter` && changeCardTitle(newTitle)
            }
          />
          <StyledTitleDescription>
            в колонке {columnTitle}
          </StyledTitleDescription>
        </StyledHeader>
        <StyledDescription
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
          placeholder="Добавить описание"
          value={newDescription}
          onMouseOut={() => changeCardDescription(newDescription)}
        />
        <StyledText>Комментарии:</StyledText>
        {dataComments.map((commnet) => {
          return (
            <div key={commnet.id}>
              <StyledCommentHead>
                <StyledCommentHeadText>{commnet.author}</StyledCommentHeadText>
                {commnet.author === currentUser && (
                  <DeleteCommentButton
                    onClick={() => dispatch(deleteComment(commnet.id))}
                  >
                    Удалить
                  </DeleteCommentButton>
                )}
              </StyledCommentHead>
              <StyledCommentContent>{commnet.content}</StyledCommentContent>
            </div>
          );
        })}
        <StyledAddCommentTextarea
          visibleAddComment={visibleAddComment}
          placeholder="Введите комментарий"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          onKeyDown={(event) => event.key === `Enter` && addCommnet(newComment)}
        />
        <StyledButtonsPanel>
          <StyledSendButton
            onClick={() => addCommnet(newComment)}
            visibleAddComment={visibleAddComment}
          >
            Добавить
          </StyledSendButton>
          <StyledSendButton
            onClick={() => setVisibleAddComment(false)}
            visibleAddComment={visibleAddComment}
          >
            Закрыть
          </StyledSendButton>
        </StyledButtonsPanel>

        <StyledAddCommnets
          visibleAddComment={visibleAddComment}
          onClick={() => setVisibleAddComment(true)}
        >
          Добавить комментарий
        </StyledAddCommnets>
      </StyledModal>
    </>
  );
};
