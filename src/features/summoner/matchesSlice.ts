import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Matches from "./t.matches";
import { getMatches } from "../../api/matches";
import { RootState } from "../../app/store";

type GameType = "Total" | "Ranked Solo" | "Ranked Flex";

type Status = "idle" | "loading" | "failed" | "succeeded";

const initialState: { model?: Matches; status: Status; gameType: GameType } = {
  model: undefined,
  status: "idle",
  gameType: "Total",
};

export const fetchMatches = createAsyncThunk(
  "/matches/fetchMatches",
  async (summonerName: string) => {
    return getMatches(summonerName);
  }
);

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    switchGameType(state, action: PayloadAction<{ gameType: GameType }>) {
      state.gameType = action.payload.gameType;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.model = action.payload;
      });
  },
});

export default matchesSlice.reducer;

export const selectGameType = (state: RootState) => state.matches.gameType;

export const selectChampions = (state: RootState) =>
  state.matches.model?.champions;

export const selectSummary = (state: RootState) => state.matches.model?.summary;

export const selectPositions = (state: RootState) =>
  state.matches.model?.positions;

export const selectGames = (state: RootState) => state.matches.model?.games;

export const selectMatchesStatus = (state: RootState) => state.matches.status;

export const { switchGameType } = matchesSlice.actions;
