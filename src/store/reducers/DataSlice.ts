import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewBlock } from "../../types/interfaces";

interface DataState {
  data: NewBlock[];
}

const initialState: DataState = {
  data: [
    {
      title: `TODO`,
      cards: [
        {
          header: `Add redux to trello`,
          description: `It's will be a second mission`,
          key: `0`,
          column: 0,
          title: `TODO`,
          commnets: [
            {
              author: `Danil`,
              content: `Well, here we are`,
              key: `000`,
            },
          ],
        },
        {
          header: `Publish it to github`,
          description: `I'll need then send this to mentor`,
          key: `01`,
          column: 0,
          title: `TODO`,
        },
      ],
    },
    {
      title: `In Progress`,
      cards: [
        {
          header: `End up with trello`,
          description: `Add all needeed functionality`,
          key: `1`,
          column: 1,
          title: `In Progress`,
        },
      ],
    },
    {
      title: `Testing`,
      cards: [
        {
          header: `Hello world`,
          description: `It's where you will read this`,
          key: `2`,
          column: 2,
          title: `Testing`,
        },
      ],
    },
    {
      title: `Done`,
      cards: [
        {
          header: `Hope it cooming soon`,
          description: `Some day i'll get there`,
          key: `3`,
          column: 3,
          title: `Done`,
        },
      ],
    },
  ],
};

export const dataSlice = createSlice({
  name: `columns`,
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
