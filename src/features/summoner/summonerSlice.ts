import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Summoner, { exampleSummoner } from "./t.summoner";
import { RootState } from "../../app/store";

type Status = "idle" | "loading" | "failed" | "succeeded";

const initialState: { model: Summoner; status: Status } = {
  model: exampleSummoner,
  status: "idle",
};

export const fetchSummoner = createAsyncThunk(
  "/summoner/fetchSummoner",
  async (summonerName: string) => {
    try {
      const response = await fetch(
        `https://codingtest.op.gg/api/summoner/${summonerName}?hl=en`
      ).then((res) => res.json());

      return (response as any).summoner;
    } catch {
      return exampleSummoner;
    }
  }
);

const summonerSlice = createSlice({
  name: "summoner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSummoner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSummoner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.model = action.payload;
      });
  },
});

export default summonerSlice.reducer;

export const selectSummoner = (state: RootState) => state.summoner.model;

export const selectSummonerStatus = (state: RootState) => state.summoner.status;

export const selectPreviousTiers = (state: RootState) =>
  state.summoner.model.previousTiers
    .slice()
    .sort((t1, t2) => t1.season - t2.season);
