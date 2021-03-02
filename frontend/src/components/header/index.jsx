import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCompass, faUserCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import Notification from "./notification";
import Autosuggest from "../utils/Autosuggest";

function Header() {
    const [state, setState] = useState({
        showSearchBar: false,
    });
    const wrapperRef = useRef();
    // const handleClickOutside = (event) => {
    //     if (wrapperRef && !wrapperRef.current.contains(event.target)) {
    //         setState((prevState) => ({
    //             ...prevState,
    //             showSearchBar: false,
    //         }));
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    // }, []);

    return (
        <div className="d-flex flex-column flex-nowrap h-100">
            <nav className="top-nav flex-shrink-0">
                <div
                    className={`top-nav-menu ${
                        state.showSearchBar ? "d-flex" : "d-none"
                    } align-items-center flex-nowrap h-100 px-3 `}>
                    <div className="flex-grow-1 d-flex align-items-center h-100" ref={wrapperRef}>
                        <div className="searchbar__back">
                            <i
                                className="fa fa-arrow-left"
                                onClick={() => setState((prevState) => ({ ...prevState, showSearchBar: false }))}></i>
                        </div>
                        <Autosuggest />
                    </div>
                </div>
                <div
                    className={`top-nav-menu align-items-center flex-nowrap h-100 ${
                        state.showSearchBar ? "d-none" : "d-flex"
                    }`}>
                    <div className="box-1 d-flex align-items-center justify-content-start h-100 pl-2 pr-0 px-md-5">
                        <div className="h-75">
                            <img src={process.env.PUBLIC_URL + "/instagram.png"} className="nav__logo" alt="" />
                        </div>
                    </div>

                    <div className="box-2 d-none d-md-flex justify-content-start align-items-center h-100">
                        <Autosuggest />
                    </div>

                    <div className="box-3 d-flex h-100 navbar navbar-expand">
                        <ul className="navbar-nav">
                            <li className="nav-item d-block d-md-none">
                                <a
                                    href="#"
                                    className="nav-link pl-2 pr-1 mx-3 py-3 my-n2"
                                    onClick={() => setState((prevState) => ({ ...prevState, showSearchBar: true }))}>
                                    <FontAwesomeIcon icon={faSearch} size="2x" className="nav-item__icon" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link pl-2 pr-1 mx-3 py-3 my-n2">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        style={{ fontSize: "24px" }}
                                        className="nav-item__icon"
                                    />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/direct/chat" className="nav-link pl-2 pr-1 mx-3 py-3 my-n2">
                                    <FontAwesomeIcon
                                        icon={faFacebookMessenger}
                                        style={{ fontSize: "24px" }}
                                        className="nav-item__icon"
                                    />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/explore" className="nav-link pl-2 pr-1 mx-3 py-3 my-n2">
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className="nav-item__icon"
                                        style={{ fontSize: "24px" }}
                                    />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Notification />
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="nav-link pl-2 pr-1 mx-3 py-3 my-n2">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        style={{ fontSize: "24px" }}
                                        className="nav-item__icon"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
