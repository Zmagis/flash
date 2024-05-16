import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Result = {
  date: Date;
  score: number;
};

type Results = Record<string, Result[]> | null;

export interface ResultsState {
  results: Results;
}

export const INITIAL_STATE: ResultsState = {
  results: null,
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState: INITIAL_STATE,
  reducers: {
    setResults: (state, {payload}: PayloadAction<Results>) => {
      state.results = payload;
    },
  },
});

export const resultsConfig = {
  key: 'results',
};

export const {setResults} = resultsSlice.actions;
export default resultsSlice.reducer;
