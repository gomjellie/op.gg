import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Matches, { exampleMatches } from "./matches.t";
import { RootState } from '../../app/store';

type GmaeType = "Total" | "Ranked Solo" | "Ranked Flex";

const initialState: { model: Matches; status: string; gameType: GmaeType } = {
  model: exampleMatches,
  status: 'idle',
  gameType: "Total",
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    switchGameType(state, action: PayloadAction<{gameType: GmaeType}>) {
      state.gameType = action.payload.gameType;
    },
  },
});

export default matchesSlice.reducer;

export const selectGameType = (state: RootState) => state.matches.gameType;

export const selectChampions = (state: RootState) => state.matches.model.champions;

export const selectSummary = (state: RootState) => state.matches.model.summary;

export const selectPositions = (state: RootState) => state.matches.model.positions;

export const { switchGameType } = matchesSlice.actions;
