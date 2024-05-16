import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import appReducer from './app/AppSlice';

export const store = configureStore({
  reducer: {user: userReducer, app: appReducer},
});

export type appDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
