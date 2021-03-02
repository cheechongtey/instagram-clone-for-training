import { combineReducers } from "redux";
import { articleSlice } from "../../actions/Article/article.slice";

const rootReducer = combineReducers({
    article: articleSlice.reducer,
});

export default rootReducer;
