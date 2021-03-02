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
    zIndex,
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
    zIndex
);

export const Header = styled.header`
    ${composedHelpers}
`;

Header.defaultProps = {};
