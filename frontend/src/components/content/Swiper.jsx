import React, { useState, useEffect } from "react";
import { useTransition } from "react-spring";
import StoriesCards from "react-insta-stories";
import { getStoryQuery } from "../../app/actions/Story/story.action";
import { useGetStoryHook } from "../../app/hooks";
import { AnimatedBox, StyledIcon, StoryNavigateButton, Flex } from "../utils/ui";

const STORY_QUERY = getStoryQuery;

function SwiperComponent({ filter }) {
    const handleCallQuery = useGetStoryHook(STORY_QUERY);
    const [[index, dir], setIndex] = useState([0, 0]);
    const [state, setState] = useState({
        story: [],
    });

    const transition = useTransition(state.story?.[index], (item) => item?._id, {
        from: {
            opacity: 0,
            transform: `translate3d(${dir === 1 ? 100 : -100}%,0,0) scale(0.5)`,
            position: "absolute",
        },
        enter: {
            opacity: 1,
            transform: "translate3d(0%,0,0) scale(1)",
        },
        leave: {
            opacity: 0,
            transform: `translate3d(${dir === 1 ? -100 : 100}%,0,0) scale(0.5)`,
        },
    });

    const slideLeft = () => setIndex([(index - 1 + state.story.length) % state.story.length, -1]);
    const slideRight = () => setIndex([(index + 1) % state.story.length, 1]);

    useEffect(() => {
        handleCallQuery({ filter }).then((x) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    story: x,
                };
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Flex className="test" mt="2.5%" justifyContent="center">
            <StoryNavigateButton as="a" className="left" left="33%" onClick={() => slideLeft()}>
                <StyledIcon viewBox="0 0 30 30">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="0" y="0" width="30" height="30" />
                        <circle fill="#3a3a3a" opacity="0.5" cx="15" cy="15" r="13" />
                        <path
                            d="M6.96323356,15.1775211 C6.62849853,15.5122561 6.08578582,15.5122561 5.75105079,15.1775211 C5.41631576,14.842786 5.41631576,14.3000733 5.75105079,13.9653383 L10.8939067,8.82248234 C11.2184029,8.49798619 11.7409054,8.4866328 12.0791905,8.79672747 L17.2220465,13.5110121 C17.5710056,13.8308912 17.5945795,14.3730917 17.2747004,14.7220508 C16.9548212,15.0710098 16.4126207,15.0945838 16.0636617,14.7747046 L11.5257773,10.6149773 L6.96323356,15.1775211 Z"
                            fill="#1b1b1b"
                            fillRule="nonzero"
                            transform="translate(13.500001, 15.000001) scale(-1, 1) rotate(-270.000000) translate(-11.500001, -12.000001) "
                        />
                    </g>
                </StyledIcon>
            </StoryNavigateButton>

            {transition &&
                transition.length !== 0 &&
                transition.map(({ item, props, key }) => {
                    if (!item || Object.values(item).length === 0) return <>Empty</>;

                    return (
                        <AnimatedBox key={key} style={{ ...props }}>
                            <StoriesCards
                                stories={item.medias}
                                storyStyles={{
                                    width: "auto",
                                    maxWidth: "100%",
                                    height: "100%",
                                    margin: "auto",
                                    objectFit: "contain",
                                }}
                                // delay="500"
                                onAllStoriesEnd={() => slideRight()}
                            />
                            {/* test {key} */}
                        </AnimatedBox>
                    );
                })}

            <StoryNavigateButton className="right" right="33%" onClick={() => slideRight()}>
                <StyledIcon viewBox="0 0 30 30">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="0" y="0" width="30" height="30" />
                        <circle fill="#3a3a3a" opacity="0.5" cx="15" cy="15" r="13" />
                        <path
                            d="M7.96323356,15.1775211 C7.62849853,15.5122561 7.08578582,15.5122561 6.75105079,15.1775211 C6.41631576,14.842786 6.41631576,14.3000733 6.75105079,13.9653383 L11.8939067,8.82248234 C12.2184029,8.49798619 12.7409054,8.4866328 13.0791905,8.79672747 L18.2220465,13.5110121 C18.5710056,13.8308912 18.5945795,14.3730917 18.2747004,14.7220508 C17.9548212,15.0710098 17.4126207,15.0945838 17.0636617,14.7747046 L12.5257773,10.6149773 L7.96323356,15.1775211 Z"
                            fill="#1b1b1b"
                            fillRule="nonzero"
                            transform="translate(15.500001, 15.000001) rotate(-270.000000) translate(-12.500001, -12.000001) "
                        />
                    </g>
                </StyledIcon>
            </StoryNavigateButton>
        </Flex>
    );
}

export default SwiperComponent;
