import React, { useState } from "react";
import Swiper from "./Swiper";
import { Link, useParams } from "react-router-dom";

import "../../css/stories.scss";
function Stories() {
    const [state] = useState({
        show: true,
    });

    let { id } = useParams();
    let filter = { id };

    return (
        <React.Fragment>
            <section className="stories">
                <div className="wrapper">
                    {/* <div className="container"> */}
                    <Swiper filter={filter} />
                    {/* </div> */}
                </div>
                <div className="stories__logo">
                    <button className="wpO6b " type="button">
                        <div className="QBdPU ">
                            <svg
                                aria-label="Home"
                                className="_8-yf5 "
                                fill="#ffffff"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24">
                                <path d="M24 5.1c6.1 0 6.9 0 9.3.1 2.2.1 3.5.5 4.3.8 1.1.4 1.8.9 2.6 1.7.8.8 1.3 1.6 1.7 2.6.3.8.7 2 .8 4.3.1 2.4.1 3.2.1 9.3s0 6.9-.1 9.3c-.1 2.2-.5 3.5-.8 4.3-.4 1.1-.9 1.8-1.7 2.6-.8.8-1.6 1.3-2.6 1.7-.8.3-2 .7-4.3.8-2.4.1-3.2.1-9.3.1s-6.9 0-9.3-.1c-2.2-.1-3.5-.5-4.3-.8-1.1-.4-1.8-.9-2.6-1.7-.8-.8-1.3-1.6-1.7-2.6-.3-.8-.7-2-.8-4.3-.1-2.4-.1-3.2-.1-9.3s0-6.9.1-9.3c.1-2.2.5-3.5.8-4.3.4-.9.9-1.7 1.7-2.5.8-.8 1.6-1.3 2.6-1.7.8-.3 2-.7 4.3-.8 2.4-.1 3.2-.2 9.3-.2M24 1c-6.2 0-7 0-9.5.1-2.4.1-4.1.5-5.6 1.1-1.5.6-2.8 1.4-4 2.7-1.3 1.2-2.1 2.5-2.7 4-.6 1.5-1 3.1-1.1 5.6C1 17 1 17.8 1 24s0 7 .1 9.5c.1 2.4.5 4.1 1.1 5.6.6 1.5 1.4 2.8 2.7 4.1 1.3 1.3 2.6 2.1 4.1 2.7 1.5.6 3.1 1 5.6 1.1H24c6.2 0 7 0 9.5-.1 2.4-.1 4.1-.5 5.6-1.1 1.5-.6 2.8-1.4 4.1-2.7 1.3-1.3 2.1-2.6 2.7-4.1.6-1.5 1-3.1 1.1-5.6V24c0-6.2 0-7-.1-9.5-.1-2.4-.5-4.1-1.1-5.6-.6-1.5-1.4-2.8-2.7-4.1-1.3-1.3-2.6-2.1-4.1-2.7-1.5-.6-3.1-1-5.6-1.1H24zm0 11.2c-6.5 0-11.8 5.3-11.8 11.8S17.5 35.8 24 35.8 35.8 30.5 35.8 24 30.5 12.2 24 12.2zm0 19.5c-4.2 0-7.7-3.4-7.7-7.7s3.4-7.7 7.7-7.7 7.7 3.4 7.7 7.7-3.5 7.7-7.7 7.7zM36.3 9c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8c1.5 0 2.8-1.2 2.8-2.8S37.8 9 36.3 9z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="stories__close">
                    <Link className="wpO6b" to="/">
                        <div className="QBdPU ">
                            <svg
                                aria-label="Close"
                                className="_8-yf5 "
                                fill="#ffffff"
                                height="24"
                                viewBox="0 0 48 48"
                                width="24">
                                <path
                                    clipRule="evenodd"
                                    d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </section>
            <div className={`stories-modal-backdrop fade ${state.show ? "show" : ""}`}></div>
        </React.Fragment>
    );
}

export default React.memo(Stories);
