import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './scss/styles.scss';

const App = () => {

    const commons = {
        config: {
            title:  'Everything is gonna be okay / MAKE IT BLUE',
            cr:     '2020',
            author: 'アルム＝バンド'
        },
        commonVars: {
            headerHeight:    '60vh',
            footerHeight:    '56px',
            textColor:       'white',
            backgroundColor: '#17509f',
            basePath:        process.env.PUBLIC_URL || '',
            backgroundImage: '/img/rainbow.png'
        }
    };

    return (
        <>
            <Header data={commons} />
            <Main data={commons} />
            <Footer data={commons} />
        </>
    );
};

export default App;
