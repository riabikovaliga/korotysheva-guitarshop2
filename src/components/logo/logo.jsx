import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {ReactComponent as LogoDark} from './logo-dark.svg';
import {ReactComponent as LogoLight} from './logo-light.svg';

const Logo = ({className, isLight = false}) => {
    return (
        <Link to={AppRoute.ROOT} className={`${className} logo`}>
            {isLight
                ? <LogoLight className="logo__img"/>
                : <LogoDark className="logo__img"/>
            }
            <span className="visually-hidden">Главная страница</span>
        </Link>
    );
};

Logo.propTypes = {
    className: PropTypes.string.isRequired,
    isLight: PropTypes.bool
};

export {Logo};
