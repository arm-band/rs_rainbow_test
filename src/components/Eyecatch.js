import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const CloudConatiner = styled(animated.div).attrs(props => ({
    basePath: props.basepath || ''
}))`
    position: absolute;
    background-image: url(${props => props.basePath}/img/cloud.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.8;
    will-change: transform;
    &:first-of-type {
        width: 400px;
        height: 200px;
        left: 55%;
        top: 55%;
    }
    &:nth-of-type(2) {
        width: 600px;
        height: 300px;
        left: 2%;
        top: 8%;
    }
    &:last-of-type {
        width: 500px;
        height: 250px;
        left: 40%;
        top: 30%;
    }
    &:hover {
        opacity: 1;
    }
`;

const interp = (i) => {
    return (r) => {
        return `translate3d(${10 * Math.cos(r + (i * 2 * Math.PI) / 1.6)}px, 0, 0)`;
    };
};

const Eyecatch = (props) => {
    const { commonVars } = props.data;
    const { radians } = useSpring({
        to: async next => {
            while (1) {
                await next({ radians: 2 * Math.PI });
            }
        },
        from: {
            radians: 0
        },
        config: {
            duration: 10000
        },
        reset: true,
    });

    return (
        [ 0, 1, 2 ].map((i) => {
        return (
            <CloudConatiner basepath={commonVars.basePath} key={i} style={{ transform: radians.interpolate(interp(i)) }} />
            );
        })
    );
};

export default Eyecatch;
