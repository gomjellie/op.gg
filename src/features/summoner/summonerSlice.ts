import { createSlice } from "@reduxjs/toolkit";
import Summoner, { exampleSummoner } from "./summoner.t";
import { RootState } from "../../app/store";

const initialState: { model: Summoner; status: string } = {
  model: exampleSummoner,
  status: "idle",
};

const summonerSlice = createSlice({
  name: "summoner",
  initialState,
  reducers: {},
});

export default summonerSlice.reducer;

export const selectSummoner = (state: RootState) => state.summoner.model;

export const selectPreviousTiers = (state: RootState) =>
  state.summoner.model.previousTiers
    .slice()
    .sort((t1, t2) => t1.season - t2.season);
