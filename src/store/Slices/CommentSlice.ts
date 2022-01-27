/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardComments } from "../../types/interfaces";

const initialState: Array<ICardComments> = [
  {
    columnId: `0`,
    cardId: `0`,
    id: `0`,
    content: `Well, here we are`,
    author: `Hello world`,
  },
  {
    columnId: `1`,
    cardId: `0`,
    id: `1`,
    content: `Hate this procces`,
    author: `Not hello world`,
  },
];

export const commentSlice = createSlice({
  name: `comments`,
  initialState,
  reducers: {
    changeCommentContent(state, action: PayloadAction<ICardComments>) {
      return state.map((comment) =>
        comment.id === action.payload.id
          ? {
              ...action.payload,
            }
          : comment
      );
    },
    deleteComment(state, action: PayloadAction<string>) {
      return state.filter((comment) => comment.id !== action.payload);
    },
    deleteCommentsOfCard(state, action: PayloadAction<string>) {
      return state.filter((comment) => comment.cardId !== action.payload);
    },
    addComment(state, action: PayloadAction<ICardComments>) {
      state.push(action.payload);
    },
  },
});

export const selectCardComments = createSelector(
  (state: any) => state,
  (_: any, currentCardId: any) => currentCardId,
  (state: any, currentCardId: any) =>
    state.filter((comment: any) => comment.cardId === currentCardId)
);

export default commentSlice.reducer;
