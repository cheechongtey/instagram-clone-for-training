import styled from "styled-components";
import { Box } from "./box";

import { compose, flexbox } from "styled-system";

const composedHelpers = compose(flexbox);

export const Flex = styled(Box)`
    display: flex;
    ${composedHelpers}
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
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

Flex.defaultProps = {};
