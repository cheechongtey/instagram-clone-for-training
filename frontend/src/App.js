import React, { Suspense, useEffect } from "react";
import NProgress from "nprogress";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";

function App() {
    const LazyLoad = () => {
        useEffect(() => {
            NProgress.start();

            return () => {
                NProgress.done();
            };
        });

        return "";
    };

    const Header = React.lazy(() => import(`./components/header`));
    const SubHeader = React.lazy(() => import(`./components/header/subheader`));
    const Home = React.lazy(() => import(`./components/page/Home`));
    const Chat = React.lazy(() => import(`./components/page/Chat`));
    const Explorer = React.lazy(() => import(`./components/page/Explorer`));
    const Stories = React.lazy(() => import(`./components/page/Stories`));

    return (
        <div className="d-flex flex-column flex-nowrap position-absolute w-100">
            <Suspense fallback={<LazyLoad />}>
                <Router>
                    <Route exact path="/stories/:id" component={Stories} />

                    <Route exact path={["direct/chat", "explore", "", "/"]}>
                        <Header />
                        <SubHeader />

                        <div className="d-flex flex-nowrap h-100 overflow-hidden position-relative">
                            <Route exact path="direct/chat" component={Chat} />
                            <Route exact path="explore" component={Explorer} />
                            <Route exact path="/" component={Home} />
                        </div>
                    </Route>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
