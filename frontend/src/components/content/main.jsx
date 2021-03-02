import React from "react";
import Article from "./Article";

function Main() {
    return (
        <main className="main" id="main-scroll-container">
            <div className="main-content">
                <div className="main-content__wrapper" id="main-content_wrapper">
                    <Article />
                </div>
            </div>
        </main>
    );
}

export default Main;
