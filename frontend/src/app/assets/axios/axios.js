import axios from "axios";
import React from "react";

const AxiosApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 5000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem(process.env["REACT_APP_ADMIN_TOKEN"])}`,
    },
});

export const AxiosContext = React.createContext();

const AxiosComponent = (props) => {
    return <AxiosContext.Provider value={AxiosApi}>{props.children}</AxiosContext.Provider>;
};

export default AxiosComponent;
