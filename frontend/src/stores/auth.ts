import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
  }

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authSuccess: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isAuthenticated = true;
    },
    authUnsuccess: (state) => {
      state.isAuthenticated = false;
    },
    signOut: (state) => {
        state.isAuthenticated = false;
    }
  },
});

export const { authSuccess, authUnsuccess, signOut } = authSlice.actions;

export const useAuthenticationStore = configureStore({
  reducer: authSlice.reducer,
  devTools: true,
});
