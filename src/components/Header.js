import React from 'react';
import Eyecatch from './Eyecatch';
import styled from 'styled-components';

const HeaderConatiner = styled.header.attrs(props => ({
    basePath:        props.basepath || '',
    backgroundImage: props.backgroundimage || '/img/rainbow.png',
    headerHeight:    props.headerheight || '60vh'
}))`
    width: 100%;
    height: ${props => props.headerHeight};
    position: relative;
    text-align: center;
    overflow: hidden;
    user-select: none;
    background-image: url(${props => props.basePath}${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
`;

const Header = (props) => {
    const { commonVars } = props.data;

    return (
        <HeaderConatiner headerheight={commonVars.headerHeight} basepath={commonVars.basePath} backgroundimage={commonVars.backgroundImage}>
            <Eyecatch data={props.data} />
        </HeaderConatiner>
    );
};

export default Header;
