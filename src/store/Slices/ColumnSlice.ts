import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColumnState } from "../../types/interfaces";

const initialState: ColumnState[] = [
  {
    title: `TODO`,
    id: `0`,
  },
  {
    title: `In Progress`,
    id: `1`,
  },
  {
    title: `Testing`,
    id: `2`,
  },
  {
    title: `Done`,
    id: `3`,
  },
];

export const columnSlice = createSlice({
  name: `columns`,
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<ColumnState>) {
      return state.map((column) =>
        column.id === action.payload.id
          ? { id: action.payload.id, title: action.payload.title }
          : column
      );
    },
  },
});

export default columnSlice.reducer;
