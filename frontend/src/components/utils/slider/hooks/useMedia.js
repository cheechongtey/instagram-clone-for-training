import React, { useEffect, useState } from "react";

function useMedia(obj) {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        if (obj && Object.values(obj).length !== 0) {
            setMedia((prevState) => {
                return (obj?.["medias"] || []).map((x) => {
                    return { value: x, progress: 0 };
                });
            });
        }
    }, [obj]);

    return [media, setMedia];
}

export default useMedia;
