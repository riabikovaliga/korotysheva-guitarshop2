import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortingOrders, SortingTypes} from '../../const';
import {changeSortingOrder, changeSortingType} from '../../store/actions/actions';

const Sorting = ({className}) => {
    const dispatch = useDispatch();
    const sortingType = useSelector(state => state.SORTING.sortingType);
    const sortingOrder = useSelector(state => state.SORTING.sortingOrder);

    const onSortTypeChange = (type) => {
        dispatch(changeSortingType(type));
    };

    const onSortOrderChange = (order) => {
        dispatch(changeSortingOrder(order));
    };

    return (
        <div className={`sorting ${className}`}>
            <p className="sorting__title">
                Сортировать:&nbsp;
            </p>
            <button onClick={() => onSortTypeChange(SortingTypes.PRICE)} className={`sorting__item ${sortingType === SortingTypes.PRICE && 'sorting__item--active'}`}>
                по&nbsp;цене
            </button>
            <button onClick={() => onSortTypeChange(SortingTypes.POPULAR)} className={`sorting__item ${sortingType === SortingTypes.POPULAR && 'sorting__item--active'}`}>
                по&nbsp;популярности
            </button>
            <div className="sorting__wrapper">
                <button onClick={() => onSortOrderChange(SortingOrders.TO_HIGH)} className={`sorting__item sorting__item--img ${sortingOrder === SortingOrders.TO_HIGH && 'sorting__item--active'}`}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z" fill="#6C6C6C"/>
                    </svg>
                    <span className="visually-hidden">от меньшего к большему</span>
                </button>
                <button onClick={() => onSortOrderChange(SortingOrders.TO_LOW)} className={`sorting__item sorting__item--img ${sortingOrder === SortingOrders.TO_LOW && 'sorting__item--active'}`}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z" fill="#6C6C6C"/>
                    </svg>
                    <span className="visually-hidden">от большего к меньшему</span>
                </button>
            </div>
        </div>
    );
};

Sorting.propTypes = {
    className: PropTypes.string.isRequired
};

export {Sorting};
