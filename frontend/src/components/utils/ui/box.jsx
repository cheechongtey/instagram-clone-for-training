import styled from "styled-components";

import {
    background,
    border,
    bottom,
    boxShadow,
    color,
    compose,
    layout,
    left,
    position,
    right,
    space,
    top,
    typography,
    justifyContent,
    alignItems,
    height,
    width,
    borderRadius,
    flexbox,
} from "styled-system";

export const composedHelpers = compose(
    background,
    layout,
    border,
    space,
    color,
    typography,
    top,
    bottom,
    left,
    right,
    position,
    boxShadow,
    justifyContent,
    alignItems,
    height,
    width,
    borderRadius,
    flexbox
);

export const Box = styled.div`
    ${composedHelpers}
    ${(props) => {
        if (props?.extraStyle) {
            return Object.entries(props.extraStyle).map(([key, value]) => {
                return {
                    [key]: value,
                };
            });
        }
    }};
`;

export const StoryBoxWrapper = styled.div`
    ${composedHelpers}
    background : #000;
    display: inline-block;
    height: 100%;
    position: relative;
    width: 100%;
`;

export const StoryBoxContent = styled.div`
    ${composedHelpers}
    align-items: center;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

export const StoryBoxHeader = styled.header`
    ${composedHelpers}
    background: linear-gradient(180deg,rgba(38,38,38,.8) 0%,rgba(38,38,38,0) 100%);
    padding: 20px 16px 32px;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const StoryBoxComment = styled.div`
    ${composedHelpers}
    background: linear-gradient(180deg,rgba(38,38,38,0) 0%,rgba(38,38,38,.6) 100%);
    bottom: 0;
    height: 150px;
    justify-content: flex-end;
    left: 0;
    margin-top: auto;
    padding: 0 16px 16px;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 999;
    flex-direction: column;
    display: flex;
`;

Box.defaultProps = {};
