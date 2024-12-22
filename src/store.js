import { configureStore } from "@reduxjs/toolkit";

// SLICES
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';
import articleSlice from "./slices/articleSlice";
import contactSlice from "./slices/contactSlice";
import newSletterSlice from "./slices/newSletterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    article: articleSlice,
    contact: contactSlice,
    newsletter: newSletterSlice,
  },
});
