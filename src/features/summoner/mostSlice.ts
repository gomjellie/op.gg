import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Most, { exampleMost } from "./t.most";
import { RootState } from "../../app/store";

type MostType = "Champion Win Ratio" | "Rank win rate per week";

const initialState: { model: Most; status: string; mostType: MostType } = {
  model: exampleMost,
  status: "idle",
  mostType: "Champion Win Ratio",
};

const mostSlice = createSlice({
  name: "most",
  initialState,
  reducers: {
    switchMostType(state, action: PayloadAction<{ mostType: MostType }>) {
      state.mostType = action.payload.mostType;
    },
  },
});

export default mostSlice.reducer;

export const selectMostChampions = (state: RootState) => state.most.model.champions;

export const selectMostRecents = (state: RootState) => state.most.model.recentWinRate;

export const selectMostType = (state: RootState) => state.most.mostType;

export const { switchMostType } = mostSlice.actions;
