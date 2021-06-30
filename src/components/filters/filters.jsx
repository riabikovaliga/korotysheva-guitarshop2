import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GuitarType, GuitarTypeNames, StringsCount} from '../../const';
import {
    changeCurrentGuitars,
    changeGuitarTypes,
    changePriceFrom,
    changePriceTo,
    changeStringsCount
} from '../../store/actions/actions';
import {getFilteredNewCurrentGuitars, getMaximumPrice, getMinimumPrice} from '../../utils';
import {Button} from '../button/button';
import {InputCheckbox} from '../input-checkbox/input-checkbox';
import {Input} from '../input/input';

const Filters = ({className}) => {
    const dispatch = useDispatch();
    const priceFrom = useSelector(state => state.FILTERS.priceFrom);
    const priceTo = useSelector(state => state.FILTERS.priceTo);
    const guitarTypes = useSelector(state => state.FILTERS.guitarTypes);
    const stringsCount = useSelector(state => state.FILTERS.stringsCount);
    const allGuitarsWithoutPrice = useSelector(state => getFilteredNewCurrentGuitars(state.DATA.originalGuitars, {priceFrom: '', priceTo: '', guitarTypes: guitarTypes.length ? guitarTypes : [...Object.values(GuitarType)], stringsCount: stringsCount.length ? stringsCount : [...Object.values(StringsCount)]}));
    const minPrice = allGuitarsWithoutPrice.length && getMinimumPrice(allGuitarsWithoutPrice);
    const maxPrice = allGuitarsWithoutPrice.length && getMaximumPrice(allGuitarsWithoutPrice);
    const allGuitarsWithoutStringsCount = useSelector(state => getFilteredNewCurrentGuitars(state.DATA.originalGuitars, {priceFrom, priceTo, guitarTypes, stringsCount: [...Object.values(StringsCount)]}));
    const stringsCountNotDisabled = new Set(allGuitarsWithoutStringsCount.map(guitar => guitar.stringsCount));

    const onBeginPricesChange = (value) => {
        dispatch(changePriceFrom(Number(value)));
    };

    const onEndPricesChange = (value) => {
        dispatch(changePriceTo(Number(value)));
    };

    const onGuitarTypesChange = (type) => {
        dispatch(changeGuitarTypes(type));
    };

    const onStringsCountChange = (count) => {
        dispatch(changeStringsCount(count));
    };

    const onSubmitButtonClick = () => {
        dispatch(changeCurrentGuitars({priceFrom, priceTo, guitarTypes: guitarTypes.length ? guitarTypes : [...Object.values(GuitarType)], stringsCount: stringsCount.length ? stringsCount : [...Object.values(StringsCount)]}));
    };

    return (
        <div className={`filters ${className}`}>
            <h2 className="filters__title">Фильтр</h2>
            <div className="filters__block price-block">
                <h3 className="filters__title price-block__title">Цена, ₽</h3>
                <Input onInputChange={onBeginPricesChange} max={priceTo || maxPrice} min={minPrice} value={priceFrom} className="price-block__begin" name="begin-price" placeholder={Number(minPrice).toLocaleString('ru-RU')}/>
                <span className="price-block__line">&nbsp;&mdash;&nbsp;</span>
                <Input onInputChange={onEndPricesChange} max={maxPrice} min={priceFrom || minPrice} value={priceTo} className="price-block__end" name="end-price" placeholder={Number(maxPrice).toLocaleString('ru-RU')}/>
            </div>
            <div className="filters__block type-block">
                <h3 className="filters__title type-block__title">Тип гитар</h3>
                {Object.keys(GuitarTypeNames).map((item, i) => (
                    <InputCheckbox
                        className="type-block__checkbox"
                        key={`guitar-type-${i}`}
                        label={GuitarTypeNames[item]}
                        name={item}
                        onChange={() => onGuitarTypesChange(item)}
                        value={!!guitarTypes.includes(item)}
                    />
                ))}
            </div>
            <div className="filters__block strings-block">
                <h3 className="filters__title strings-block__title">Количество струн</h3>
                {Object.keys(StringsCount).map((item, i) => (
                    <InputCheckbox
                        className="strings-block__checkbox"
                        key={`strings-count-${i}`}
                        label={StringsCount[item]}
                        name={item}
                        onChange={() => onStringsCountChange(StringsCount[item])}
                        disabled={guitarTypes.length > 0 && !stringsCountNotDisabled.has(StringsCount[item])}
                        value={!!stringsCount.includes(StringsCount[item])}
                    />
                ))}
            </div>
            <Button className="filters__submit" onClick={onSubmitButtonClick} nameButton={String('Показать').toUpperCase()}/>
        </div>
    );
};

Filters.propTypes = {
    className: PropTypes.string.isRequired
};

export {Filters};
