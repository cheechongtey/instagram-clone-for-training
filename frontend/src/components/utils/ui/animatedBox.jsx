import styled from "styled-components";
import { animated } from "react-spring";

import { composedHelpers } from "./box";

export const AnimatedBox = styled(animated.div)`
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

AnimatedBox.defaultProps = {};
