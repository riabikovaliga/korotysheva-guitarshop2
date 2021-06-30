import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GuitarTypeNames} from '../../const';
import {
    changeBasket, changeVisibilityPopupRemoveFromBasket,
} from '../../store/actions/actions';
import {GuitarAuthorPropType} from '../../store/data';
import {ButtonsWithNumber} from '../buttons-with-number/buttons-with-number';
import {CloseButton} from '../close-button/close-button';
import {PopupRemoveFromBasket} from '../popups/popups';

const ProductBasket = ({className, item, count}) => {
    const dispatch = useDispatch();
    const {vendorCode, name, type, stringsCount, price, image} = item;
    const popupRemoveFromBasketIsOpen = useSelector(state => state.POPUPS.popupRemoveFromBasket.isOpen && state.POPUPS.popupRemoveFromBasket.id === item.id);

    const onOpenPopupRemoveFromBasketButtonClick = () => {
        dispatch(changeVisibilityPopupRemoveFromBasket({isOpen: true, id: item.id}));
    };

    const onRemoveFromBasketButtonClick = () => {
        dispatch(changeBasket({guitar: item, count: 0}));
        closePopupRemoveFromBasket();
    };

    const closePopupRemoveFromBasket = () => {
        dispatch(changeVisibilityPopupRemoveFromBasket({isOpen: false, id: item.id}));
    };

    const changeBasketCount = (count) => {
        if (count < 1) {
            dispatch(changeVisibilityPopupRemoveFromBasket({isOpen: true, id: item.id}));
        } else {
            dispatch(changeBasket({guitar: item, count}));
        }
    };

    return (
        <>
            <article className={`${className} product-basket`}>
                <CloseButton onClick={onOpenPopupRemoveFromBasketButtonClick} className="product-basket__close"/>
                <div className="product-basket__wrapper">
                    <img className="product-basket__img"
                         src={image}
                         alt={name}/>
                </div>
                <div className="product-basket__desk">
                    <h3 className="product-basket__title">{String(`${GuitarTypeNames[type]} ${name}`).toUpperCase()}</h3>
                    <span className="product-basket__vendor-code">Артикул: {vendorCode}</span>
                    <span className="product-basket__type">{GuitarTypeNames[type]}, {stringsCount}-струнная</span>
                </div>
                <div className="product-basket__price">{price.toLocaleString()} ₽</div>
                <ButtonsWithNumber className="product-basket__wrapper-buttons" onChange={changeBasketCount} value={count}/>
                <div className="product-basket__total">{(price * count).toLocaleString()} ₽</div>
            </article>
            {popupRemoveFromBasketIsOpen && <PopupRemoveFromBasket onRemoveButtonClick={onRemoveFromBasketButtonClick} onClose={closePopupRemoveFromBasket} className="product-basket__remove-popup" item={item}/>}
        </>
    );
};

ProductBasket.propTypes = {
    className: PropTypes.string.isRequired,
    item: GuitarAuthorPropType,
    count: PropTypes.number,
};

export {ProductBasket};
