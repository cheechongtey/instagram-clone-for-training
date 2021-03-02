import React from "react";

function Home() {
    const Sidebar = React.lazy(() => import(`../content/sidebar`));
    const Main = React.lazy(() => import(`../content/main`));

    return (
        <React.Fragment>
            <Sidebar />
            <Main />
        </React.Fragment>
    );
}

export default Home;
