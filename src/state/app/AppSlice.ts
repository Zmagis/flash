Orientation.getInitialOrientation();

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Orientation, {OrientationType} from 'react-native-orientation-locker';

export interface AppState {
  orientation: OrientationType;
}

export const INITIAL_STATE: AppState = {
  orientation: Orientation.getInitialOrientation(),
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setOrientation: (state, {payload}: PayloadAction<OrientationType>) => {
      state.orientation = payload;
    },
  },
});

export const appConfig = {
  key: 'app',
};

export const {setOrientation} = appSlice.actions;
export default appSlice.reducer;
