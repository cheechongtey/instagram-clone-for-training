import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import LoadingScreen from "./components/utils/LoadingScreen";
import { Provider } from "react-redux";
import store from "./app/assets/redux/store";
import client from "./app/assets/graphql/client";
import AxiosComponent from "./app/assets/axios/axios";

import "./css/header.scss";
import "./css/main.scss";
import "./css/index.scss";
import "./css/sidebar.scss";
import "font-awesome/css/font-awesome.min.css";
import { ApolloProvider } from "@apollo/client";

const HomeComponent = React.lazy(() => import("./App"));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Suspense fallback={<LoadingScreen />}>
                    <AxiosComponent>
                        <HomeComponent />
                    </AxiosComponent>
                </Suspense>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
