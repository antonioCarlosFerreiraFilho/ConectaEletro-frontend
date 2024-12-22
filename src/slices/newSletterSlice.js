import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newSletterService from "../services/newSletterService";

const initialState = {
  EmailSend: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// NEWSLETTER
export const newSletter = createAsyncThunk(
  "newsletter/send",
  async (EmailSend, ThunckAPI) => {
    const data = await newSletterService.newSletter(EmailSend);

    if (data.errors) {
      return ThunckAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// newSletterSlice
export const newSletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // NEWSLETTER
      .addCase(newSletter.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(newSletter.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.EmailSend = actions.payload;
        state.message = "Voce recebera Notificações por Email."
      })
      .addCase(newSletter.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.EmailSend = null;
        state.error = actions.payload;
      });
  },
});

export const { reset } = newSletterSlice.actions;
export default newSletterSlice.reducer;
