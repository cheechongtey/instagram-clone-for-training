import React, { useState } from "react";
import Downshift from "downshift";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../css/autosuggest.scss";

function Autosuggest() {
    const [state, setState] = useState({
        movies: [],
    });
    const inputOnChange = (event) => {
        if (!event.target.value) {
            console.log("hihihi");
            return;
        }
        fetchMovies(event.target.value);
    };

    const downshiftOnChange = (selectedMovie) => {
        alert(`your favourite movie is ${selectedMovie.title}`);
    };

    const fetchMovies = (movie) => {
        const moviesURL = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${movie}`;
        axios.get(moviesURL).then((response) => {
            setState((prevState) => ({ ...prevState, movies: response.data.results }));
        });
    };

    return (
        <Downshift onChange={downshiftOnChange} itemToString={(item) => (item ? item.title : "")}>
            {({ selectedItem, getInputProps, getItemProps, highlightedIndex, isOpen, inputValue, getLabelProps }) => (
                <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
                    <div className="input-group w-75">
                        <input
                            {...getInputProps({
                                className: "form-control px-4",
                                placeholder: "Search movies",
                                onChange: inputOnChange,
                                style: { paddingTop: "1.5rem", paddingBottom: "1.5rem" },
                            })}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2"
                                style={{ paddingLeft: "1.8rem", paddingRight: "1.8rem" }}>
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                            </button>
                        </div>
                    </div>

                    {isOpen ? (
                        <div className="downshift-dropdown w-75">
                            {state.movies
                                .filter(
                                    (item) => !inputValue || item.title.toLowerCase().includes(inputValue.toLowerCase())
                                )
                                .slice(0, 10)
                                .map((item, index) => (
                                    <div
                                        className="downshift-item"
                                        {...getItemProps({ key: index, index, item })}
                                        style={{
                                            backgroundColor: highlightedIndex === index ? "#fafafa" : "white",
                                        }}>
                                        <div className="child-avatar">
                                            <div className="child-avatar__wrapper">
                                                <a href="/">
                                                    <img
                                                        alt="epicfunnypage's profile"
                                                        className="h-100 w-100"
                                                        data-testid="user-avatar"
                                                        draggable="false"
                                                        src={item.avatar || ""}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="child-content">
                                            <span
                                                style={{
                                                    fontWeight: "bolder",
                                                }}>
                                                {item.title}
                                            </span>
                                            <span
                                                style={{
                                                    color: "lightgray",
                                                }}>
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ) : null}
                </div>
            )}
        </Downshift>
    );
}

export default Autosuggest;
