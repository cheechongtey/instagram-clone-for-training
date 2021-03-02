import React from "react";

function Stories() {
    const Main = React.lazy(() => import(`../content/Stories`));
    return <Main />;
}

export default Stories;
