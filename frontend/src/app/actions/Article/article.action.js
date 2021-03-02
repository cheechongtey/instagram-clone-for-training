import { createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "@apollo/client";

const MENU_URL = "/api/article";

export const getArticle = createAsyncThunk("Article/GetArticle2", async ({ api, data }, { rejectWithValue }) => {
    try {
        const result = await api({
            url: `${MENU_URL}/getArticle`,
            method: "POST",
            data,
        });

        return result;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const getPostQuery = gql`
    query data {
        posts {
            title
            images {
                img_path
            }
            like
            location {
                name
            }
            user {
                username
                avatar
                name
            }
        }
    }
`;
