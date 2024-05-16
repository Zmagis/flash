import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import appReducer from './app/AppSlice';
import resultsReducer from './results/ResultsSlice';

export const store = configureStore({
  reducer: {user: userReducer, results: resultsReducer, app: appReducer},
});

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
