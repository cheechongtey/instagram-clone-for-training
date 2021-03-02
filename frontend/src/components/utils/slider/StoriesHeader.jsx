import React from "react";
import { AvatarButton, Flex, Box, StoryBoxHeader, Button, StoryHeaderButton } from "../ui";

function StoriesHeader({ mediaObj }) {
    return (
        <StoryBoxHeader>
            {/* <Flex className="loading-bar" mb="8px" flexDirection="row" justifyContent="space-between">
                {Object.entries(mediaObj).map(([key, x]) => {
                    return (
                        <Box mr="1.7px" position="relative" flexGrow="1" height="2px" className="bar" key={key}>
                            <Box
                                background="rgba(255,255,255,.35)"
                                position="absolute"
                                top="0"
                                extraStyle={{ height: "100%", width: "100%", "border-radius": "2px" }}
                            />
                            <AnimatedBox
                                borderRadius="2px"
                                position="absolute"
                                top="0"
                                background="#fff"
                                height="2px"
                                style={props[key]}></AnimatedBox>
                        </Box>
                    );
                })}
            </Flex> */}
            <Flex
                className="story-user"
                justifyContent="space-between"
                flexDirection="row"
                flex="0 0 auto"
                alignContent="stretch"
                alignItems="center">
                <Box className="user" color="#fff" fontSize="14px" fontWight="400" lineHeight="18px">
                    <Flex>
                        <AvatarButton
                            as="a"
                            backgroundColor="#fafafa"
                            borderRadius="50%"
                            flex="0 0 auto"
                            position="relative">
                            <img
                                alt=""
                                className="w-100 h-100"
                                draggable="false"
                                src="https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/137659972_322404405687963_9102911420345865012_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&amp;_nc_ohc=exxT4pFZI8gAX-HEwnH&amp;tp=1&amp;oh=048bd609357e4fb80a6418b60a35494a&amp;oe=6053BF4B"
                            />
                        </AvatarButton>
                        <Flex
                            ml="8px"
                            flex="0 0 auto"
                            justifyContent="flex-start"
                            alignItems="center"
                            alignContent="stretch">
                            <Flex pr="10px" justifyContent="center" flexDirection="row" alignItems="center">
                                <Button
                                    as="a"
                                    ml="-5px"
                                    pl="5px"
                                    display="block"
                                    textOverflow="hidden"
                                    extraStyle={{
                                        overflow: "hidden",
                                        "white-space": "nowrap",
                                        color: "#fff !important",
                                        "font-weight": "600",
                                    }}>
                                    jeii_pong
                                </Button>
                            </Flex>
                            <time className="BPyeS Nzb55" dateTime="2021-02-14T16:35:56.000Z" title="Feb 15, 2021">
                                22h
                            </time>
                        </Flex>
                    </Flex>
                </Box>
                <Flex className="tool" ml="auto" flexDirection="row">
                    <StoryHeaderButton as="a" className="play">
                        <Box justifyContent="center" alignItems="center">
                            <svg
                                aria-label="Play"
                                className="_8-yf5 "
                                fill="#ffffff"
                                height="16"
                                viewBox="0 0 48 48"
                                width="16">
                                <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
                            </svg>
                        </Box>
                    </StoryHeaderButton>
                    <StoryHeaderButton as="a" className="mute">
                        <Box justifyContent="center" alignItems="center">
                            <svg
                                aria-label="Video has no audio."
                                className="_8-yf5 "
                                fill="#ffffff"
                                height="16"
                                viewBox="0 0 48 48"
                                width="16">
                                <path
                                    clipRule="evenodd"
                                    d="M42.9 24l4.6 4.6c.6.6.6 1.6 0 2.2l-1.4 1.4c-.6.6-1.6.6-2.2 0l-4.6-4.6-4.6 4.6c-.6.6-1.6.6-2.2 0l-1.4-1.4c-.6-.6-.6-1.6 0-2.2l4.6-4.6-4.6-4.6c-.6-.6-.6-1.6 0-2.2l1.4-1.4c.6-.6 1.6-.6 2.2 0l4.6 4.6 4.6-4.6c.6-.6 1.6-.6 2.2 0l1.4 1.4c.6.6.6 1.6 0 2.2L42.9 24zM24.1 47.6L11.3 34.7H1.6C.7 34.7 0 34 0 33.2V14.8c0-.8.7-1.5 1.5-1.5h9.7L24.1.4c.9-.9 2.5-.3 2.5 1v45.1c0 1.3-1.6 2-2.5 1.1z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </Box>
                    </StoryHeaderButton>
                </Flex>
            </Flex>
        </StoryBoxHeader>
    );
}

export default StoriesHeader;
