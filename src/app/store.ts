import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import matchesSlice from "../features/summoner/matchesSlice";
import summonerSlice from '../features/summoner/summonerSlice';
import mostSlice from "../features/summoner/mostSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    matches: matchesSlice,
    summoner: summonerSlice,
    most: mostSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
