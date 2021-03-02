import React, { useEffect } from "react";

export const useLoadingScreen = () => {
    useEffect(() => {
        // console.log("useEffect");
        // let percent = 60;
        // let maxPercent = 95;

        // const progressEnd = () => {
        //     clearInterval(progressInterval);
        //     progressBar.style.width = `${100}%`;
        //     progressBox.classList.add("hidden");
        // };

        // const progressBar = document.getElementById("progress-bar");
        // const progressBox = document.getElementById("progress-box");

        // const progressInterval = setInterval(() => {
        //     let randomPercent = Math.ceil(Math.random() * 5);

        //     if (percent + randomPercent > maxPercent) {
        //         percent = maxPercent;
        //         clearInterval(progressInterval);
        //     } else {
        //         percent += randomPercent;
        //     }

        //     progressBar.style.width = `${percent}%`;
        // }, 800);

        return () => {
            console.log("hihih im end now");
        };
    }, []);
};

const LoadingScreen = () => {
    // const custom = useLoadingScreen();

    return (
        <div id="progress">
            <div id="progress-box">
                <div id="progress-bar">
                    <div className="peg"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
