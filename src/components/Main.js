import React from 'react';
import styled from 'styled-components';

const MainConatiner = styled.main.attrs(props => ({
    headerHeight: props.headerheight || '60vh',
    footerHeight: props.footerheight || '60px',
    textColor:    props.textcolor || 'white'
}))`
    height: calc(100vh - (${props => props.headerHeight} + ${props => props.footerheight}));
    padding-top: 5rem;
    text-align: center;
`;
const Title = styled.h1.attrs(props => ({
    textColor: props.textcolor || 'white'
}))`
    font-size: 2rem;
    color: ${props => props.textColor};
`;

const Main = (props) => {
    const { config, commonVars } = props.data;

    return (
        <MainConatiner headerheight={commonVars.headerHeight} footerheight={commonVars.footerHeight}>
            <Title textcolor={commonVars.textColor}>{config.title}</Title>
        </MainConatiner>
    );
};

export default Main;
