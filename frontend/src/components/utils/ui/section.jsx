import styled from "styled-components";
import { Box } from "./box";

import { compose, flexbox } from "styled-system";

const composedHelpers = compose(flexbox);

export const Section = styled.div`
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

export const ActiveStorySection = styled(Box)`
    border-left: 46px solid transparent;
    border-right: 46px solid transparent;
    box-sizing: content-box;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-left: -46px;
    user-select: none;
    width: 100%;
`;

Section.defaultProps = {};
