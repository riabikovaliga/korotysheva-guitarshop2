import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    changeBasket,
    changeVisibilityPopupAddToBasket,
    changeVisibilityPopupSuccessInBasket
} from '../../store/actions/actions';
import {GuitarAuthorPropType} from '../../store/data';
import {Button} from '../button/button';
import {PopupAddToBasket, PopupSuccessInBasket} from '../popups/popups';

const ProductCard = ({className, item}) => {
    const dispatch = useDispatch();
    const {name, reviewsCount, price, image} = item;
    const popupAddToBasketIsOpen = useSelector(state => state.POPUPS.popupAddToBasket.isOpen && state.POPUPS.popupAddToBasket.id === item.id);
    const popupSuccessInBasketIsOpen = useSelector(state => state.POPUPS.popupSuccessInBasket.isOpen && state.POPUPS.popupSuccessInBasket.id === item.id);

    const onOpenPopupAddToBasketButtonClick = () => {
        dispatch(changeVisibilityPopupAddToBasket({isOpen: true, id: item.id}));
    };

    const onOpenPopupSuccessInBasketButtonClick = () => {
        dispatch(changeVisibilityPopupSuccessInBasket({isOpen: true, id: item.id}));
    };

    const onAddToBasketButtonClick = () => {
        closePopupAddToBasket();
        dispatch(changeBasket({guitar: item, count: 1}));
        onOpenPopupSuccessInBasketButtonClick();
    };

    const closePopupAddToBasket = () => {
        dispatch(changeVisibilityPopupAddToBasket({isOpen: false, id: item.id}));
    };

    const closePopupSuccessInBasket = () => {
        dispatch(changeVisibilityPopupSuccessInBasket({isOpen: false, id: item.id}));
    };

    return (
        <>
            <article className={`${className} product`}>
                <div className="product__wrapper">
                    <img className="product__img"
                         src={image}
                         alt={name}/>
                </div>
                <div className="product__rating">
                    <svg className="product__stars" width="70" height="13" viewBox="0 0 70 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6415 5.13829L7.66615 4.70586L6.33608 2.00938C6.29975 1.93555 6.23998 1.87579 6.16615 1.83946C5.981 1.74805 5.756 1.82422 5.66342 2.00938L4.33334 4.70586L1.35795 5.13829C1.27592 5.15 1.20092 5.18868 1.1435 5.24727C1.07408 5.31862 1.03582 5.41461 1.03714 5.51416C1.03846 5.6137 1.07924 5.70864 1.15053 5.77813L3.30326 7.87696L2.79467 10.8406C2.78274 10.9096 2.79037 10.9805 2.81669 11.0453C2.84301 11.1101 2.88697 11.1663 2.94358 11.2074C3.00019 11.2485 3.06719 11.2729 3.13697 11.2779C3.20676 11.2829 3.27655 11.2682 3.33842 11.2356L5.99975 9.83633L8.66108 11.2356C8.73373 11.2742 8.81811 11.2871 8.89897 11.2731C9.10287 11.2379 9.23998 11.0445 9.20483 10.8406L8.69623 7.87696L10.849 5.77813C10.9076 5.72071 10.9462 5.64571 10.958 5.56368C10.9896 5.3586 10.8466 5.16875 10.6415 5.13829Z" fill="#FFD168"/>
                        <path d="M24.6415 5.13829L21.6662 4.70586L20.3361 2.00938C20.2997 1.93555 20.24 1.87579 20.1662 1.83946C19.981 1.74805 19.756 1.82422 19.6634 2.00938L18.3333 4.70586L15.358 5.13829C15.2759 5.15 15.2009 5.18868 15.1435 5.24727C15.0741 5.31862 15.0358 5.41461 15.0371 5.51416C15.0385 5.6137 15.0792 5.70864 15.1505 5.77813L17.3033 7.87696L16.7947 10.8406C16.7827 10.9096 16.7904 10.9805 16.8167 11.0453C16.843 11.1101 16.887 11.1663 16.9436 11.2074C17.0002 11.2485 17.0672 11.2729 17.137 11.2779C17.2068 11.2829 17.2765 11.2682 17.3384 11.2356L19.9997 9.83633L22.6611 11.2356C22.7337 11.2742 22.8181 11.2871 22.899 11.2731C23.1029 11.2379 23.24 11.0445 23.2048 10.8406L22.6962 7.87696L24.849 5.77813C24.9076 5.72071 24.9462 5.64571 24.958 5.56368C24.9896 5.3586 24.8466 5.16875 24.6415 5.13829Z" fill="#FFD168"/>
                        <path d="M38.6415 5.13829L35.6662 4.70586L34.3361 2.00938C34.2997 1.93555 34.24 1.87579 34.1662 1.83946C33.981 1.74805 33.756 1.82422 33.6634 2.00938L32.3333 4.70586L29.358 5.13829C29.2759 5.15 29.2009 5.18868 29.1435 5.24727C29.0741 5.31862 29.0358 5.41461 29.0371 5.51416C29.0385 5.6137 29.0792 5.70864 29.1505 5.77813L31.3033 7.87696L30.7947 10.8406C30.7827 10.9096 30.7904 10.9805 30.8167 11.0453C30.843 11.1101 30.887 11.1663 30.9436 11.2074C31.0002 11.2485 31.0672 11.2729 31.137 11.2779C31.2068 11.2829 31.2765 11.2682 31.3384 11.2356L33.9997 9.83633L36.6611 11.2356C36.7337 11.2742 36.8181 11.2871 36.899 11.2731C37.1029 11.2379 37.24 11.0445 37.2048 10.8406L36.6962 7.87696L38.849 5.77813C38.9076 5.72071 38.9462 5.64571 38.958 5.56368C38.9896 5.3586 38.8466 5.16875 38.6415 5.13829Z" fill="#FFD168"/>
                        <path d="M52.6415 5.13829L49.6662 4.70586L48.3361 2.00938C48.2997 1.93555 48.24 1.87579 48.1662 1.83946C47.981 1.74805 47.756 1.82422 47.6634 2.00938L46.3333 4.70586L43.358 5.13829C43.2759 5.15 43.2009 5.18868 43.1435 5.24727C43.0741 5.31862 43.0358 5.41461 43.0371 5.51416C43.0385 5.6137 43.0792 5.70864 43.1505 5.77813L45.3033 7.87696L44.7947 10.8406C44.7827 10.9096 44.7904 10.9805 44.8167 11.0453C44.843 11.1101 44.887 11.1663 44.9436 11.2074C45.0002 11.2485 45.0672 11.2729 45.137 11.2779C45.2068 11.2829 45.2765 11.2682 45.3384 11.2356L47.9997 9.83633L50.6611 11.2356C50.7337 11.2742 50.8181 11.2871 50.899 11.2731C51.1029 11.2379 51.24 11.0445 51.2048 10.8406L50.6962 7.87696L52.849 5.77813C52.9076 5.72071 52.9462 5.64571 52.958 5.56368C52.9896 5.3586 52.8466 5.16875 52.6415 5.13829Z" fill="#FFD168"/>
                        <path d="M58.5125 10.8243C58.4954 10.8932 58.4951 10.9649 58.5116 11.034C58.5282 11.103 58.5611 11.1677 58.608 11.2231C58.6549 11.2784 58.7145 11.3231 58.7824 11.3538C58.8503 11.3844 58.9247 11.4002 59 11.4C59.0988 11.4 59.1954 11.3725 59.2775 11.321L62 9.61511L64.7226 11.321C64.8077 11.3742 64.9082 11.4016 65.0104 11.3994C65.1126 11.3973 65.2117 11.3659 65.2943 11.3093C65.3769 11.2527 65.439 11.1736 65.4724 11.0828C65.5058 10.992 65.5088 10.8937 65.4811 10.8013L64.5666 7.79357L66.8346 5.87522C66.9072 5.81375 66.9591 5.73361 66.9838 5.64472C67.0085 5.55582 67.0049 5.46208 66.9735 5.37507C66.9421 5.28806 66.8843 5.21161 66.8072 5.15517C66.73 5.09873 66.637 5.06477 66.5396 5.0575L63.6891 4.84414L62.4555 2.27773C62.4163 2.19507 62.3524 2.12486 62.2716 2.07558C62.1908 2.0263 62.0965 2.00005 62.0002 2C61.9039 1.99995 61.8096 2.0261 61.7288 2.0753C61.6479 2.1245 61.5839 2.19464 61.5445 2.27726L60.311 4.84414L57.4605 5.05703C57.3647 5.06416 57.2732 5.09708 57.1968 5.15184C57.1204 5.2066 57.0624 5.28088 57.0298 5.36581C56.9971 5.45073 56.9912 5.5427 57.0127 5.63071C57.0342 5.71872 57.0822 5.79904 57.151 5.86206L59.258 7.79216L58.5125 10.8243ZM62 3.6124L63.021 5.73706L63.315 5.75914H63.3155L65.3016 5.90718L63.6661 7.29072L63.6656 7.29166L63.4341 7.48716L63.5196 7.76773V7.76914L64.1461 9.82988L62 8.48534V3.6124Z" fill="#FFD168"/>
                    </svg>
                    <span className="product__reviews">{reviewsCount}</span>
                </div>
                <div className="product__desk">
                    <h3 className="product__title">{name}</h3>
                    <span className="product__price">{price.toLocaleString()}₽</span>
                </div>
                <div className="product__info">
                    <a href="#" className="product__button">Подробнее</a>
                    <Button nameButton="Купить" onClick={onOpenPopupAddToBasketButtonClick} className="button--buy product__buy"/>
                </div>
            </article>
            {popupAddToBasketIsOpen && <PopupAddToBasket onAddButtonClick={onAddToBasketButtonClick} onClose={closePopupAddToBasket} className="product__add-popup" item={item}/>}
            {popupSuccessInBasketIsOpen && <PopupSuccessInBasket onClose={closePopupSuccessInBasket} className="product__success-popup"/>}
        </>
    );
};

ProductCard.propTypes = {
    className: PropTypes.string.isRequired,
    item: GuitarAuthorPropType
};

export {ProductCard};
