import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  other_users: [],
  error: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    }, 
    logout: (state) =>{
      state.user = null
    },
    getOtherUsers: (state, action) =>{
      state.other_users = action.payload
    },
    getError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    }

  },
  
});

export const { login, logout, getOtherUsers, getError, clearError } = appSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default appSlice.reducer;
