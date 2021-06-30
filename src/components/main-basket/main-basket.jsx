import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, MAX_PERCENT_DISCOUNT, PromoCodes, PromoCodesInterpretation} from '../../const';
import {changePromoCode} from '../../store/actions/actions';
import {Breadcrumbs} from '../breadcrumbs/breadcrumbs';
import {Button} from '../button/button';
import {InputText} from '../input-text/input';
import {ProductBasket} from '../product-basket/product-basket';

const getTotalSum = (basket, promoCode) => {
    const clearSum = basket.reduce((sum, item) => (item.guitar.price * item.count) + sum, 0);
    const maxPercentDiscount = clearSum * MAX_PERCENT_DISCOUNT;

    switch (promoCode) {
        case PromoCodes.GITARAHIT:
            return clearSum -  (clearSum * PromoCodesInterpretation.GITARAHIT);
        case PromoCodes.SUPERGITARA:
            return clearSum - PromoCodesInterpretation.SUPERGITARA;
        case PromoCodes.GITARA2020:
            return PromoCodesInterpretation.GITARA2020 > maxPercentDiscount ? clearSum - maxPercentDiscount : clearSum - PromoCodesInterpretation.GITARA2020;
        default:
            return clearSum;
    }
};

const MainBasket = () => {
    const dispatch = useDispatch();
    const breadcrumbs = [{title: 'Каталог', url: AppRoute.CATALOG}, {title: 'Оформляем', url: AppRoute.BASKET}];
    const basket =  useSelector(state => state.BASKET.basket);
    const promoCode =  useSelector(state => state.BASKET.promoCode);
    const [inputValue, setInputValue] = useState(promoCode);
    const [error, setError] = useState('');

    const onInputChange = (target) => {
        setError('');
        setInputValue(String(target).toUpperCase());
    };

    const onApplyButtonClick = () =>  {
        if (PromoCodes[inputValue]) {
            setError('');
            dispatch(changePromoCode(inputValue));
        } else {
            setError('Промокод не действителен');
        }
    };

    return (
        <main className="main wrapper">
            <h1 className="main__title main__title--basket">Корзина</h1>
            <Breadcrumbs list={breadcrumbs} className="main__breadcrumbs breadcrumbs--basket"/>
            <div className="main__content basket">
                {
                    basket.map((item) =>
                        <ProductBasket key={item.guitar.id} className="basket__item" item={item.guitar} count={item.count}/>
                    )
                }
            </div>
            <section className="main__summary">
                <div className="summary__wrapper promocode">
                    <h3 className="promocode__title">Промокод на скидку</h3>
                    <p className="promocode__desc">Введите свой промокод, если он у вас есть.</p>

                    <div className="promocode__wrapper">
                        <InputText
                            className="promocode__input"
                            name="promocode"
                            value={inputValue}
                            error={error}
                            onInputChange={onInputChange}
                        />
                        <Button
                            onClick={onApplyButtonClick}
                            className="promocode__button"
                            type="button"
                            nameButton="Применить купон"
                        />
                    </div>
                </div>

                <div className="summary__wrapper">
                    <p className="summary__total">Всего: {getTotalSum(basket, promoCode).toLocaleString()} ₽</p>
                    <a href="#" className="summary__submit">Оформить заказ</a>
                </div>
            </section>
        </main>
    );
};

export {MainBasket};
