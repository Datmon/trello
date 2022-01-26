import { combineReducers, configureStore } from "@reduxjs/toolkit";
import columnReducer from "./reducers/ColumnSlice";
import cardReducer from "./reducers/CardSlice";
import commentReducer from "./reducers/CommentSlice";

const rootReducer = combineReducers({
  columnReducer,
  cardReducer,
  commentReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore[`dispatch`];
