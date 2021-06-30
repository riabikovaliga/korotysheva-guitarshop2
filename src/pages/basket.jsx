import React from 'react';
import {Footer} from '../components/footer/footer';
import {Header} from '../components/header/header';
import {MainBasket as Main} from '../components/main-basket/main-basket';

const Basket = () => {
    return (
        <React.Fragment>
            <Header className="header--basket"/>
            <Main/>
            <Footer className="footer--basket"/>
        </React.Fragment>
    );
};

export {Basket};
