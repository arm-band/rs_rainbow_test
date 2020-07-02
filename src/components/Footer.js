import React from 'react';
import styled from 'styled-components';

const FooterConatiner = styled.footer.attrs(props => ({
    footerHeight: props.footerheight || '60px',
    textColor:    props.textcolor || 'white'
}))`
    position: absolute;
    width: 100%;
    height: ${props => props.footerHeight};
    bottom: 0;
    padding: 1rem;
    text-align: center;
    color: ${props => props.textColor};
`;

const Footer = (props) => {
    const { config, commonVars } = props.data;

    return (
        <FooterConatiner textcolor={commonVars.textColor} footerheight={commonVars.footerHeight}>
            <small>© {config.cr}- {config.author}</small>
        </FooterConatiner>
    );
};

export default Footer;
