import { useState, useEffect, useRef } from "react";

const useStoryInterval = (handler, interval, callback = "") => {
    const [intervalId, setIntervalId] = useState();
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = handler;
    }, [handler]);

    useEffect(() => {
        function tick() {
            savedCallback.current(intervalId);
        }

        if (interval) {
            const id = setInterval(tick, interval);
            setIntervalId(id);
        }

        return () => clearInterval(intervalId);
    }, [interval, intervalId]);

    if (typeof callback === "function") {
        callback(intervalId);
    }

    return () => clearInterval(intervalId);
};

export default useStoryInterval;
