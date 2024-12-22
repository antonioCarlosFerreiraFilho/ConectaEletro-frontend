import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleService from "../services/articleService";

const initialState = {
  articles: [],
  article: {},
  error: false,
  success: false,
  loading: false,
};

// SHOW ARTICLES
export const allArticle = createAsyncThunk("article/allArticle", async () => {
  const data = await articleService.allArticle();

  return data;
});

// GET ARTICLE
export const getArticle = createAsyncThunk("article/getArticle", async (id) => {
  const data = await articleService.getArticle(id);

  return data;
});

// COMMENTS
export const commentArticle = createAsyncThunk(
  "article/comments",
  async (commentData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await articleService.commentArticle(
      { comments: commentData.comments },
      commentData.id,
      token
    );

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// SEARCH
export const searchArticle = createAsyncThunk(
  "article/search",
  async (query, thunkAPI) => {
    const data = await articleService.searchArticle(query);

    return data;
  }
);

// ARTICLESLICE
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // SHOW
      .addCase(allArticle.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(allArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.articles = action.payload;
      })
      // GET
      .addCase(getArticle.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.article = action.payload;
      })
      // COMMENTS
      .addCase(commentArticle.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;

        state.article.comments.push(actions.payload.comments);
      })
      .addCase(commentArticle.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.error = actions.payload;
      })
      // SEARCH
      .addCase(searchArticle.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.articles = action.payload;
      });
  },
});

export const { reset } = articleSlice.actions;
export default articleSlice.reducer;
