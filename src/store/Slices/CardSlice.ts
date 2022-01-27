/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../../types/interfaces";

const initialState: Array<ICard> = [
  {
    header: `It's will be a second mission`,
    description: `Add redux to trello`,
    id: `0`,
    columnId: `0`,
  },
  {
    header: `Publish it to github`,
    description: `I'll need then send this to mentor`,
    id: `1`,
    columnId: `0`,
  },
  {
    header: `End up with trello`,
    description: `Add all needeed functionality`,
    id: `2`,
    columnId: `1`,
  },
  {
    header: `Hello world`,
    description: `It's where you will read this`,
    id: `3`,
    columnId: `2`,
  },
  {
    header: `Hope it cooming soon`,
    description: `Some day i'll get there`,
    id: `4`,
    columnId: `3`,
  },
];

export const cardSlice = createSlice({
  name: `cards`,
  initialState,
  reducers: {
    changeCardData(state, action: PayloadAction<ICard>) {
      return state.map((card) =>
        card.id === action.payload.id
          ? {
              ...action.payload,
            }
          : card
      );
    },
    deleteCard(state, action: PayloadAction<string>) {
      return state.filter((card) => card.id !== action.payload);
    },
    addCard(state, action: PayloadAction<ICard>) {
      state.push(action.payload);
    },
  },
});

export default cardSlice.reducer;
