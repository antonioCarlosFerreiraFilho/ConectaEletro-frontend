import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// PROFILE
export const profile = createAsyncThunk(
  "user/profile",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.profile(user, token);

    return data;
  }
);

// EDIT
export const editUser = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.editUser(user, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

//USER SLICE
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = null;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //PROFILE
      .addCase(profile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(profile.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = actions.payload;
      })
      //EDIT USER
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
        state.message = " Usuario atualizado. ";
       
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = {};
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
