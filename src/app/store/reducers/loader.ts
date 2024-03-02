import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type InitialState = {
    isLoading: boolean;
}

const initialState: InitialState = {
    isLoading: false,
}

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});



export const { setLoader } = loaderSlice.actions;
export const loaderSelector = (state: RootState) => state.loader.isLoading;

export default loaderSlice.reducer;
