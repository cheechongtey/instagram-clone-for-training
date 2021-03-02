import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NotificationItem from "./NotificationItem";

import "bootstrap/dist/css/bootstrap.min.css";

function Notification() {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    align="right"
                    as={React.forwardRef(({ children, onClick }, ref) => {
                        return (
                            <div
                                className="nav-link pl-2 pr-1 mx-3 py-3 my-n2"
                                ref={ref}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClick(e);
                                }}
                                style={{ cursor: "pointer" }}>
                                <FontAwesomeIcon
                                    icon={faBell}
                                    style={{ fontSize: "24px" }}
                                    className="nav-item__icon"
                                />
                            </div>
                        );
                    })}></Dropdown.Toggle>

                <Dropdown.Menu align="right">
                    <div className="notification-container">
                        <Dropdown.Item href="#/action-1" key="follow_request">
                            <div className="d-flex flex-column">
                                <span>
                                    <b>Follow Request</b>
                                </span>
                                <span>Approve or ignore requests</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <NotificationItem />
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Notification;
