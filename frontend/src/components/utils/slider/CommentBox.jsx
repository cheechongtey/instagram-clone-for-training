import React from "react";
import { Flex, Box, StoryBoxComment, Button } from "./ui";

function CommentBox({ props }) {
    return (
        <StoryBoxComment>
            <Box position="relative">
                <Box
                    alignItems="stretch"
                    alignContent="stretch"
                    flexDirection="row"
                    justifyContent="flex-start"
                    flex="0 0 auto">
                    <Flex
                        alignItems="center"
                        border="1px solid #dbdbdb"
                        borderRadius="100vh"
                        flexDirection="row"
                        flexGrow="1"
                        pl="11px"
                        pr="8px"
                        extraStyle={{ "pointer-events": "auto", "min-height": "44px" }}>
                        <Flex
                            mr="4px"
                            flex="1 1 auto"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            alignContent="stretch">
                            <textarea
                                className="Xuckn"
                                placeholder="Reply to yingtze..."
                                style={{
                                    height: "32px",
                                    backgroundColor: "transparent",
                                    border: 0,
                                    color: "#dbdbdb",
                                    overflow: "auto",
                                    padding: "8px 9px",
                                    resize: "none",
                                    pointerEvents: "fill",
                                    outline: 0,
                                    width: "100%",
                                }}></textarea>
                            <Button as="a" alignSelf="center" px="10px" className="commentbox-button">
                                Send
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </StoryBoxComment>
    );
}

export default React.memo(CommentBox);
