import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { getStoryQuery } from "../../app/actions/Story/story.action";
import { getMediaPath } from "../../utils";
import { useGetStoryHook } from "../../app/hooks";

const STORY_QUERY = getStoryQuery;

function Sidebar() {
    const handleCallQuery = useGetStoryHook(STORY_QUERY);
    const { loading, error, data } = useQuery(getStoryQuery);
    const storyObj = data?.stories || [];

    const [state, setState] = useState({
        isOnline: null,
        story: [1, 2, 3, 4, 5, 6, 7],
        suggestion: [1, 2, 3, 4, 5, 6, 7],
    });

    useEffect(() => {
        handleCallQuery({}).then((x) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    story: x,
                };
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (state.story.length >= 6) {
            const story = document.getElementById("story-horizontal-container");
            story.classList.add("sidebar-height");
        }
    }, [state.story.length]);

    useEffect(() => {
        if (state.suggestion.length >= 6) {
            const suggestion = document.getElementById("suggestions-container");
            suggestion.classList.add("sidebar-height");
        }
    }, [state.suggestion.length]);

    return (
        <div id="side-nav" className="d-none d-md-flex side-nav">
            <div
                className="side-nav__overlay-wrapper d-flex flex-column h-100 w-100 overflow-hidden position-relative z-10"
                id="scroll-container">
                <div className="flex-grow-1" id="story-horizontal-container">
                    <div className="close-friend-story side-nav-section">
                        <div className="side-nav-header m-3 pt-2">
                            <h5 className="font-weight-bold text-uppercase">Friend's Story</h5>
                        </div>
                    </div>
                    <div className="story side-nav-section" id="story-horizontal">
                        <div className="position-relative transition-group">
                            <div className="position-relative transition-group">
                                {storyObj.map((value, key) => {
                                    return (
                                        <div className="transition-start" key={key}>
                                            <div className="side-nav-card align-items-center d-flex position-relative">
                                                <Link
                                                    to={`/stories/${value._id}`}
                                                    className="side-nav-card__link align-items-center d-flex flex-nowrap w-100 py-2 px-3 position-relative">
                                                    <div className="side-nav-card__avatar align-items-center flex-shrink-0">
                                                        <figure
                                                            aria-label="aceu"
                                                            className="avatar avatar--size-30 m-0">
                                                            <img
                                                                className="d-block rounded-circle image image-avatar h-100 w-100"
                                                                alt={value.user.name}
                                                                src={getMediaPath(value.user.avatar)}
                                                            />
                                                        </figure>
                                                    </div>
                                                    <div className="tw-ellipsis d-flex w-100 justify-content-between">
                                                        <div className="tw-ellipsis w-100 ml-3">
                                                            <div className="side-nav-card__title align-items-center d-flex">
                                                                <p
                                                                    className="m-0 tw-c-text-alt tw-ellipsis flex-grow-1 tw-font-size-5 tw-line-height-heading font-weight-bold font-color-primary"
                                                                    title={value.user.name}>
                                                                    {value.user.name}
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="side-nav-card__metadata tw-pd-r-05"
                                                                data-a-target="side-nav-game-title">
                                                                <p
                                                                    className="m-0 tw-c-text-alt-2 tw-ellipsis tw-font-size-6 tw-line-height-heading font-color-secondary"
                                                                    title="Total Story">
                                                                    {value.count} New Stories
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-1" id="suggestions-container">
                    <div className="close-friend-story side-nav-section">
                        <div className="side-nav-header m-3 pt-2">
                            <h5 className="font-weight-bold text-uppercase">Suggestions For You</h5>
                        </div>
                    </div>
                    <div className="story side-nav-section" id="story-horizontal">
                        <div className="position-relative transition-group">
                            <div className="position-relative transition-group">
                                <div className="transition-start">
                                    <div className="side-nav-card align-items-center d-flex position-relative">
                                        <a
                                            href="/"
                                            className="side-nav-card__link align-items-center d-flex flex-nowrap w-100 py-2 px-3 position-relative">
                                            <div className="side-nav-card__avatar align-items-center flex-shrink-0">
                                                <figure aria-label="aceu" className="avatar avatar--size-30 m-0">
                                                    <img
                                                        className="d-block rounded-circle image image-avatar w-100"
                                                        alt="aceu"
                                                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/c7a4c96e-a434-4dfa-9bcf-6190995dd536-profile_image-70x70.png"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="tw-ellipsis d-flex w-100 justify-content-between">
                                                <div className="tw-ellipsis w-100 ml-3">
                                                    <div className="side-nav-card__title align-items-center d-flex">
                                                        <p
                                                            className="m-0 tw-c-text-alt tw-ellipsis flex-grow-1 tw-font-size-5 tw-line-height-heading font-weight-bold font-color-primary"
                                                            title="aceu">
                                                            aceu
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="side-nav-card__metadata tw-pd-r-05"
                                                        data-a-target="side-nav-game-title">
                                                        <p
                                                            className="m-0 tw-c-text-alt-2 tw-ellipsis tw-font-size-6 tw-line-height-heading font-color-secondary"
                                                            title="Apex Legends">
                                                            Apex Legends
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* <div className="side-nav-card__live-status flex-shrink-0 ml-5">
                                                                        <div className="align-items-center d-flex">
                                                                            <div className="tw-border-radius-rounded tw-channel-status-indicator tw-channel-status-indicator--live tw-channel-status-indicator--small d-inline-block position-relative"></div>
                                                                            <div className="ml-5">
                                                                                <span className="tw-c-text-alt tw-font-size-6">
                                                                                    2 New Stories
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
