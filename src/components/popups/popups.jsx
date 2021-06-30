import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, GuitarType, GuitarTypeNames} from '../../const';
import {GuitarAuthorPropType} from '../../store/data';
import {Button} from '../button/button';
import {Modal} from '../modal/modal';

const Popups = ({onClose, info, children, header}) => (
    <Modal closeModal={onClose}>
        <article className="popup">
            <h2 className="popup__header">{header}</h2>
            {info &&
                <div className="popup__info">
                    <div className="popup__wrapper">
                        <img className="popup__img"
                             src={info.img}
                             alt="Изображение выбранной гитары"/>
                    </div>
                    <div className="popup__desk">
                        <h3 className="popup__title">{info.title.toUpperCase()}</h3>
                        <span className="popup__vendor-code">Артикул: {info.vendorCode}</span>
                        <span className="popup__type">{info.guitarType}</span>
                        <div className="popup__price">Цена: {Number(info.price).toLocaleString()} ₽</div>
                    </div>
                </div>
            }
            <div className={`popup__wrapper-buttons ${!info && 'popup__wrapper-buttons--row'}`}>
                {children}
            </div>
        </article>
     </Modal>
);

const BasePopupWithContent = ({isAdd = false, item, onButtonClick, onClose, className}) => {
    const {vendorCode, name, type, stringsCount, price, image} = item;
    return (
        <Popups className={className}
                onClose={onClose}
                header= {isAdd ? 'Добавить товар в корзину' : 'Удалить этот товар?'}
                info={{
                    img: image,
                    title: `${type === GuitarType.UKULELE ? GuitarTypeNames[type] : 'Гитара'} ${String(name).toUpperCase()}`,
                    vendorCode: vendorCode,
                    guitarType: `${GuitarTypeNames[type]}, ${stringsCount}-струнная`,
                    price: price
                }}>
            <Button nameButton={isAdd ? 'Добавить в корзину' : 'Удалить товар'} className={isAdd ? 'add-to-basket-button' : 'remove-from-basket-button'} onClick={onButtonClick}/>
            {!isAdd && <Button nameButton="Продолжить покупки" className="continue-shopping-button" onClick={onClose}/>}
        </Popups>
    );
};

const PopupAddToBasket = ({className, item, onClose, onAddButtonClick}) => (
    <BasePopupWithContent isAdd item={item} onButtonClick={onAddButtonClick} onClose={onClose} className={`${className} popup--add-to-basket`} />
);

const PopupRemoveFromBasket = ({className, item, onClose, onRemoveButtonClick}) => (
    <BasePopupWithContent item={item} onButtonClick={onRemoveButtonClick} onClose={onClose} className={`${className} popup--remove-from-basket`} />
);

const PopupSuccessInBasket = ({className, onClose}) => (
    <Popups className={`${className} popup--success-in-basket`}
            onClose={onClose}
            header="Товар успешно добавлен в корзину"
            >
        <Link to={AppRoute.BASKET} onClick={onClose} className="go-to-basket-button">Перейти в корзину</Link>
        <Button nameButton="Продолжить покупки" className="continue-shopping-button" onClick={onClose}/>
    </Popups>
);

Popups.propTypes = {
    onClose: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    info: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        vendorCode: PropTypes.string,
        guitarType: PropTypes.string,
        price: PropTypes.number
    }),
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

BasePopupWithContent.propTypes = {
    isAdd: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    item: GuitarAuthorPropType.isRequired
};

PopupAddToBasket.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    item: GuitarAuthorPropType.isRequired
};

PopupRemoveFromBasket.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    item: GuitarAuthorPropType.isRequired
};

PopupSuccessInBasket.propTypes = {
    onClose: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
};

export {PopupAddToBasket, PopupRemoveFromBasket, PopupSuccessInBasket};

