import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import {PAGE_ITEM_COUNT} from '../../const';
import {getSortedGuitars} from '../../utils';
import {ProductCard} from '../product-card/product-card';
import {Sorting} from '../sorting/sorting';

const CatalogBlock = ({className}) => {
    const activePage = useSelector(state => state.DATA.activePage);
    const allGuitars = useSelector(state => getSortedGuitars(state.DATA.currentGuitars, state.SORTING.sortingType, state.SORTING.sortingOrder));
    const guitars = allGuitars.slice((activePage - 1) * PAGE_ITEM_COUNT, activePage * PAGE_ITEM_COUNT);

    return (
        <div className={`catalog-block ${className}`}>
            <h2 className="visually-hidden">Список гитар</h2>
            <Sorting className="catalog-block__sorting"/>
            <div className="products">
                {!guitars.length && <p className="products__empty">Гитар по заданным параметрам не найдено.<br/>Измените условия фильтрации.</p>}
                {
                    guitars.map((guitar) =>
                        <ProductCard key={guitar.id} className="products__item" item={guitar}/>
                    )
                }
            </div>
        </div>
    );
};

CatalogBlock.propTypes = {
    className: PropTypes.string.isRequired
};

export {CatalogBlock};
