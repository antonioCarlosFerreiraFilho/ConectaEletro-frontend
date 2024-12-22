import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "../services/contactService";

const initialState = {
  ContactSend: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// CONTACT
export const newContact = createAsyncThunk(
  "contact/send",
  async (ContactSend, ThunckAPI) => {
    const data = await contactService.newContact(ContactSend);

    if (data.errors) {
      return ThunckAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// contactSlice
export const contactSlice = createSlice({
  name: "contact",
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
      // CONTACT
      .addCase(newContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(newContact.fulfilled, (state, actions) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.ContactSend = actions.payload;
        state.message = "Contato enviado, agradecemos pela preferência !."
      })
      .addCase(newContact.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.ContactSend = null;
        state.error = actions.payload;
      });
  },
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
