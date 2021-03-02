import React, { Fragment, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function NotificationItem() {
    const [state] = useState({
        notification: [1, 2, 3, 4, 5],
    });
    return (
        <Fragment>
            {state.notification.map((value, key) => {
                return (
                    <Dropdown.Item onClick={() => console.log(value)} key={`notification_${key}`}>
                        <div className="d-flex flex-row">
                            <figure aria-label="aceu" className="avatar avatar--size-30 m-0 flex-grow-0">
                                <img
                                    className="d-block rounded-circle image image-avatar w-100"
                                    alt="aceu"
                                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7a4c96e-a434-4dfa-9bcf-6190995dd536-profile_image-70x70.png"
                                />
                            </figure>
                            <div className="mx-3 flex-grow-1 notification-content">
                                <span>Approve or ignore requests</span>
                            </div>
                            <figure aria-label="aceu" className="avatar avatar--size-30 m-0 flex-grow-0">
                                <img
                                    className="d-block image image-avatar w-100"
                                    alt="aceu"
                                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7a4c96e-a434-4dfa-9bcf-6190995dd536-profile_image-70x70.png"
                                />
                            </figure>
                        </div>
                    </Dropdown.Item>
                );
            })}
        </Fragment>
    );
}

export default NotificationItem;
