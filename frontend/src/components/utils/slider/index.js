import React, { useState } from "react";
import { animated, useTransition, useSprings } from "react-spring";
import styled, { ThemeProvider } from "styled-components";
import { ChevronRight, ChevronLeft } from "react-feather";

import { Box, Container, Heading, Typography, Flex, theme } from "./ui";

import { slides } from "./mock";

import "./scss/style.scss";

const sliderHeight = 350;

const Slide = styled(animated(Flex))``;
Slide.defaultProps = {
    position: "absolute",
    justifyContent: "flex-end",
    height: sliderHeight,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    willChange: "opacity",
};

const SlideText = styled(animated(Flex))``;
SlideText.defaultProps = {
    flexDirection: "column",
    width: [1, null, null, 1 / 2],
    alignSelf: "flex-end",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    p: 2,
    m: [0, null, null, 2],
};

const ControlsWrap = styled(Flex)``;
ControlsWrap.defaultProps = {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
};

const Control = styled(Flex)`
    cursor: pointer;
`;
Control.defaultProps = {
    background: "#c6c6c6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    size: [24, null, 36],
};

const Bullet = styled(animated(Control))``;
Bullet.defaultProps = {
    mx: [1, null, 2],
    color: "text500",
};

const Arrow = styled(Control)``;
Arrow.defaultProps = {
    mx: [1, null, 6],
};

function Slider() {
    const [[index, dir], setIndex] = useState([0, 0]);
    const [rows, set] = useState(slides);

    const slideLeft = () => setIndex([(index - 1 + slides.length) % slides.length, -1]);
    const slideRight = () => setIndex([(index + 1) % slides.length, 1]);

    const transitions = useTransition(rows, (item) => item.url, {
        from: {
            opacity: 0,
            transform: `translate3d(${dir === 1 ? 100 : -100}%,0,0) scale(0.5)`,
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

    const bulletSprings = useSprings(
        slides.length,
        slides.map((item, i) => ({
            border: "2px solid",
            borderColor: index === i ? "#2d2dff" : "#e6e6e6",
            background: index === i ? "rgba(0,0,0,0)" : "#c6c6c6",
            color: index === i ? "#2d2dff" : "#39393a",
            from: {
                border: "2px solid",
                borderColor: "#e6e6e6",
                color: "#39393a",
            },
        }))
    );

    return (
        <ThemeProvider theme={theme}>
            <Box bg="bg100" minHeight="100vh" py={1}>
                <Container>
                    <Heading textAlign="center">React Spring Example - useTransition</Heading>
                    <Box height={sliderHeight + 48}>
                        <Box position="relative">
                            {transitions.map(({ item, props, key }) => (
                                <animated.div key={key} class="card">
                                    <Slide
                                        style={props}
                                        background={`url(${item.url}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`}>
                                        <SlideText>
                                            <Typography fontWeight={2} fontSize={4}>
                                                {item.title}
                                            </Typography>
                                            {item.text}
                                        </SlideText>
                                    </Slide>
                                    <div class="cell">
                                        <div class="details" style={{ backgroundImage: item.css }} />
                                    </div>
                                </animated.div>
                            ))}
                            <ControlsWrap pt={sliderHeight + 8}>
                                <Arrow onClick={() => slideLeft()}>
                                    <ChevronLeft />
                                </Arrow>
                                {bulletSprings.map((props, i) => (
                                    <Flex
                                        key={i}
                                        onClick={() => setIndex((prevState) => [i, i > prevState[0] ? 1 : -1])}>
                                        <Bullet style={props}>{i + 1}</Bullet>
                                    </Flex>
                                ))}
                                <Arrow onClick={() => slideRight()}>
                                    <ChevronRight />
                                </Arrow>
                            </ControlsWrap>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
        // <>
        //     {transitions.map(({ item, props, key }) => (
        //         <div className="slider">
        //             <div className="slider__container">
        //                 <div className="slider__body">
        //                     <div className="item__background unseen"></div>
        //                     <div className="item__user">
        //                         <div className="user__wrapper">
        //                             <div className="user__avatar"></div>
        //                             <div className="user__name"></div>
        //                             <div className="timeframe"></div>
        //                         </div>
        //                     </div>
        //                     <img
        //                         className="w-100"
        //                         decoding="sync"
        //                         sizes="120.6624984741211px"
        //                         srcSet="https://instagram.fkul16-1.fna.fbcdn.net/v/t51.2885-15/e15/149182286_125613572793652_5762586036759357679_n.jpg?_nc_ht=instagram.fkul16-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=oJQIqPod1U0AX-MPM0W&amp;tp=1&amp;oh=b07eefe1a72e253b5e146859f735cb4e&amp;oe=602A7A02&amp;ig_cache_key=MjUwODMxNDg4MDc5NDk5ODU3Mw%3D%3D.2 640w,https://instagram.fkul16-1.fna.fbcdn.net/v/t51.2885-15/e15/p480x480/149182286_125613572793652_5762586036759357679_n.jpg?_nc_ht=instagram.fkul16-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=oJQIqPod1U0AX-MPM0W&amp;tp=1&amp;oh=8eb751a37bf68590e4befe445a2aa35e&amp;oe=602A6A06&amp;ig_cache_key=MjUwODMxNDg4MDc5NDk5ODU3Mw%3D%3D.2 480w,https://instagram.fkul16-1.fna.fbcdn.net/v/t51.2885-15/e15/p320x320/149182286_125613572793652_5762586036759357679_n.jpg?_nc_ht=instagram.fkul16-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=oJQIqPod1U0AX-MPM0W&amp;tp=1&amp;oh=d8dfd39c686f1fed0d24089e18137dfa&amp;oe=602AA043&amp;ig_cache_key=MjUwODMxNDg4MDc5NDk5ODU3Mw%3D%3D.2 320w,https://instagram.fkul16-1.fna.fbcdn.net/v/t51.2885-15/e15/p240x240/149182286_125613572793652_5762586036759357679_n.jpg?_nc_ht=instagram.fkul16-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=oJQIqPod1U0AX-MPM0W&amp;tp=1&amp;oh=7e0d776b104a8e8081bd6228be0d0737&amp;oe=602A983D&amp;ig_cache_key=MjUwODMxNDg4MDc5NDk5ODU3Mw%3D%3D.2 240w,https://instagram.fkul16-1.fna.fbcdn.net/v/t51.2885-15/e15/p150x150/149182286_125613572793652_5762586036759357679_n.jpg?_nc_ht=instagram.fkul16-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=oJQIqPod1U0AX-MPM0W&amp;tp=1&amp;oh=0e9ae3467910aa0aae35a0d6a396b6ed&amp;oe=602A9C3B&amp;ig_cache_key=MjUwODMxNDg4MDc5NDk5ODU3Mw%3D%3D.2 150w"
        //                         src="https://instagram.fkul16-1.fna.fbcdn.net/v/t51.2885-15/e15/149182286_125613572793652_5762586036759357679_n.jpg?_nc_ht=instagram.fkul16-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=oJQIqPod1U0AX-MPM0W&amp;tp=1&amp;oh=b07eefe1a72e253b5e146859f735cb4e&amp;oe=602A7A02&amp;ig_cache_key=MjUwODMxNDg4MDc5NDk5ODU3Mw%3D%3D.2"
        //                         alt="test"></img>
        //                     {/* Image Here */}
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </>
    );
}

export default Slider;
