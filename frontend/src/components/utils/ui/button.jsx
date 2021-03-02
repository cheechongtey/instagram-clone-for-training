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
    alignSelf,
} from "styled-system";

const composedHelpers = compose(
    background,
    border,
    bottom,
    boxShadow,
    color,
    layout,
    left,
    position,
    right,
    space,
    top,
    typography,
    justifyContent,
    alignItems,
    alignSelf,
    height,
    width,
    borderRadius
);

export const Button = styled.button`
    ${composedHelpers}
    cursor: pointer;
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

export const AvatarButton = styled.button`
    ${composedHelpers}
    display: block;
    overflow: hidden;
    cursor: pointer;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    &:after {
        border: 1px solid rgba(0, 0, 0, 0.0975);
        border-radius: 50%;
        bottom: 0;
        content: "";
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
    }
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

export const StoryHeaderButton = styled.button`
    cursor: pointer;
    display: flex;
    border: 0;
    background: 0 0;
    padding: 4px;
    align-items: center;
    justify-content: center;
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

export const StoryNavigateButton = styled.a`
    cursor: pointer;
    display: flex;
    border: 0;
    background: 0 0;
    padding: 4px;
    height: 32px;
    position: absolute;
    top: 50vh;
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

export const StyledIcon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 30px;
    height: 30px;

    ${StoryNavigateButton}:hover > svg * {
        fill: rebeccapurple;
        background-color: red;
    }
`;

Button.defaultProps = {};
