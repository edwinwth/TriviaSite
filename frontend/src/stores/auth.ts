import { User } from "@/features/auth/types";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authSuccess: (state) => {
      state.isAuthenticated = true;
    },
    authUnsuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  },
});

export const { authSuccess, authUnsuccess, signOut, setUser } = authSlice.actions;

export const useAuthenticationStore = configureStore({
  reducer: authSlice.reducer,
  devTools: true,
});
