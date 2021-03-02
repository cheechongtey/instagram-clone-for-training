import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./rootReducer";

const middleware = [
    ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        // thunk: true,
    }),
    thunk,
];

const store = configureStore({
    reducer,
    middleware,
    devtools: process.env.Node_ENV !== "production",
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */

export default store;
