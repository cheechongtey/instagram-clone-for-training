import React from "react";
import { StoryBoxContent, Flex, Box, Img } from "../ui";

function StoriesContent({ contentObj }) {
    return (
        <StoryBoxContent>
            <Flex alignItems="center" justifyContent="center" width="100%" height="100%" overflow="hidden">
                <Box display="block" position="relative">
                    {(contentObj || []).map((x, key) => {
                        return (
                            <Img
                                src={`${process.env.REACT_APP_MEDIA_URL}${x.item?.value}` || ""}
                                display="block"
                                height="100%"
                                left="0"
                                position="absolute"
                                t="0"
                                key={key}
                            />
                        );
                    })}
                </Box>
            </Flex>
        </StoryBoxContent>
    );
}

export default StoriesContent;
