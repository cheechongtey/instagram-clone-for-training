import React, { useCallback, useEffect, useRef, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import { getPostQuery } from "../../app/actions/Article/article.action";
import { AxiosContext } from "../../app/assets/axios/axios";
import { useGetPostHook } from "../../app/hooks";
import { getMediaPath } from "../../utils";

import ArticleImage from "./ArticleImage";

let initialValue = {
    page: 1,
    limit: 10,
    totalResult: 0,
    totalPages: 0,
    postObj: [],
};
const STORY_QUERY = getPostQuery;

function Article() {
    const dispatch = useDispatch(),
        textareaRefs = useRef([]),
        imageRefs = useRef([]),
        doubleClickIcon = useRef([]),
        buttonLikeRef = useRef([]),
        [state, setState] = useState({
            postObj: initialValue.postObj,
            page: initialValue.page,
            limit: initialValue.page,
            totalResults: initialValue.totalResults,
            totalPages: initialValue.totalPages,
            isFetching: false,
            fetched: false,
        }),
        api = useContext(AxiosContext),
        handleCallQuery = useGetPostHook(STORY_QUERY);

    function onInput(event) {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    }

    function imageOnDblClick(event, key) {
        let heart = doubleClickIcon.current[key];
        heart.classList.add("fade");
        handleLikeClick(key);

        setTimeout(function () {
            heart.classList.remove("fade");
        }, 500);
    }

    const handleLikeClick = (key) => {
        const currentState = state.postObj[key].like;
        buttonLikeRef.current[key].classList.add("animation");

        setTimeout(function () {
            buttonLikeRef.current[key].classList.remove("animation");
        }, 500);

        setState((prevState) => {
            console.log(prevState);

            const newList = state.postObj.map((x, postKey) => {
                return {
                    ...x,
                    like: currentState ? false : true,
                };
            });

            return {
                ...prevState,
                postObj: newList,
            };
        });
    };

    // const handleScroll = useCallback(() => {
    //     const container = document.getElementById("main-scroll-container");
    //     if (Math.ceil(container.clientHeight + container.scrollTop) !== container.scrollHeight || state.isFetching)
    //         return;

    //     setState((prevState) => {
    //         return {
    //             ...prevState,
    //             isFetching: true,
    //         };
    //     });
    // }, []);

    useEffect(() => {
        // const container = document.getElementById("main-scroll-container");
        // container.addEventListener("scroll", handleScroll);
        console.log("rerun1");
        handleCallQuery({}).then((x) => {
            console.log(x);
            setState((prevState) => {
                return {
                    ...prevState,
                    postObj: x,
                };
            });
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [api, dispatch]);

    return state.postObj.map((value, key) => {
        return (
            <article key={key}>
                <div className="article__header">
                    <div className="article__header-avatar">
                        <div className="article__header-avatar__wrapper">
                            <a href="/">
                                <img
                                    alt="epicfunnypage's profile"
                                    className="h-100 w-100"
                                    data-testid="user-avatar"
                                    draggable="false"
                                    src={getMediaPath(value.user.avatar)}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="article__header-details ml-3">
                        <div className="article__header-user">
                            <span className="font-weight-bold">{value.user.name}</span>
                        </div>
                        {Object.keys(value.location).length !== 0 && (
                            <div className="article__header-location">
                                <span>{value.location?.name}</span>
                            </div>
                        )}
                    </div>
                </div>
                <ArticleImage
                    imageRefs={imageRefs}
                    imageOnDblClick={imageOnDblClick}
                    imgObj={value.images}
                    doubleClickIcon={doubleClickIcon}
                    propsKey={key}
                />

                <div className="body__post-info">
                    <div className="body__post-button-group mb-3">
                        <div
                            className="body__post-button button-like"
                            ref={(e) => (buttonLikeRef.current[key] = e)}
                            onClick={() => handleLikeClick(key)}>
                            <span className={`span__like ${value.like === true ? "like" : "unlike"}`}>
                                <i className={`fa ${value.like === true ? "fa-heart" : "fa-heart-o"}`}></i>
                            </span>
                        </div>
                        <div className="body__post-button button-comment">
                            <svg aria-label="Comment" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                <path
                                    clipRule="evenodd"
                                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="body__post-button button-share">
                            <svg aria-label="Share Post" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="body__post-like-count">
                        <h5>
                            <b>{value?.totalLike || 0} likes</b>
                        </h5>
                    </div>
                    <h5>
                        <b>{value.user.name}</b>&nbsp; {value.title}
                    </h5>
                </div>
                <div className="body__post-commentbox">
                    <textarea
                        data-incrementheight="18"
                        data-count="1"
                        className="commentbox-textarea"
                        placeholder="Add a comment...."
                        ref={(e) => {
                            textareaRefs.current[key] = e;
                        }}></textarea>
                    <button className="commentbox-button">Post</button>
                </div>
            </article>
        );
    });
}

export default React.memo(Article);
