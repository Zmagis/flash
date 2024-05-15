import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  userName: string;
}

export const INITIAL_STATE: UserState = {
  userName: 'TestName',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUserName: (state, {payload}: PayloadAction<string>) => {
      console.log('setUserName', payload);
      state.userName = payload;
    },
  },
});

export const userConfig = {
  key: 'user',
};

export const {setUserName} = userSlice.actions;
export default userSlice.reducer;
