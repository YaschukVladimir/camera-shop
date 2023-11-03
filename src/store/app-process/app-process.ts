import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';


type AppProcess = {
  error: string | null;
  sortType: string;
  sortDirection: string;
}

const initialState: AppProcess = {
  error: null,
  sortType: '',
  sortDirection: '',
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state, action: PayloadAction<{message: string | null; delay: number}>) => {
      state.error = action.payload.message;
    },
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<string>) => {
      state.sortDirection = action.payload;
    }
  }
});

export const {setError, clearError, setSortDirection, setSortType} = appProcess.actions;
