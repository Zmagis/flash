import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';

export const store = configureStore({
  reducer: {user: userReducer},
});

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
