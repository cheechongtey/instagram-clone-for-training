import { createSlice } from "@reduxjs/toolkit";
import { getArticle } from "./article.action";

const initialArticleState = {
    posts: [],
    stories: [],
};

export const articleSlice = createSlice({
    name: "Article",
    initialState: initialArticleState,
    reducers: {
        resetArticleState: (state, { payload }) => {
            if (state[payload]) {
                state[payload] = {};
            }
        },
    },
    extraReducers: {
        [getArticle.fulfilled.type]: (state, { payload }) => {
            const { post, stories } = payload.data.result;
            state.posts = post;
            state.stories = stories;
        },
    },
});
