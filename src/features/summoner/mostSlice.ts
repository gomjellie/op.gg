import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Most from "./t.most";
import { getMost } from "../../api/most";
import { RootState } from "../../app/store";

type MostType = "Champion Win Ratio" | "Rank win rate per week";

type Status = "idle" | "loading" | "failed" | "succeeded";

const initialState: { model?: Most; status: Status; mostType: MostType } = {
  model: undefined,
  status: "idle",
  mostType: "Champion Win Ratio",
};

export const fetchMost = createAsyncThunk(
  "/most/fetchMost",
  async (summonerName: string) => {
    return getMost(summonerName);
  }
);

const mostSlice = createSlice({
  name: "most",
  initialState,
  reducers: {
    switchMostType(state, action: PayloadAction<{ mostType: MostType }>) {
      state.mostType = action.payload.mostType;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.model = action.payload;
      });
  },
});

export default mostSlice.reducer;

export const selectMostChampions = (state: RootState) =>
  state.most.model?.champions.slice().sort((c1, c2) => c2.games - c1.games);

export const selectMostRecents = (state: RootState) =>
  state.most.model?.recentWinRate
    .slice()
    .sort((c1, c2) => c2.wins + c2.losses - (c1.wins + c1.losses));

export const selectMostType = (state: RootState) => state.most.mostType;

export const selectMostStatus = (state: RootState) => state.most.status;

export const { switchMostType } = mostSlice.actions;
