import {SortingOrders, SortingTypes} from './const';

export const getMinimumPrice = (guitars) => guitars.reduce((min, guitar) => guitar.price < min ? guitar.price : min, guitars[0].price);

export const getMaximumPrice = (guitars) => guitars.reduce((max, guitar) => guitar.price > max ? guitar.price : max, guitars[0].price);

export const getSortedGuitars = (array, sortingType, sortingOrder) => {
    const isHighToLowOrder = 1 - 2 * (sortingOrder === SortingOrders.TO_HIGH);
    switch (sortingType) {
        case SortingTypes.PRICE:
            return [...array].sort((a, b) => isHighToLowOrder * (b.price - a.price));
        case SortingTypes.POPULAR:
            return [...array].sort((a, b) => isHighToLowOrder * (b.reviewsCount - a.reviewsCount));
        default:
            return [...array];
    }
};

export const getFilteredNewCurrentGuitars = (guitars, {priceFrom, priceTo, guitarTypes, stringsCount}) => {
    return getFilteredPrice(getFilteredGuitarType(getFilteredStringsCount(guitars, stringsCount), guitarTypes), priceFrom, priceTo);
};

const getFilteredPrice = (array, priceFrom, priceTo) => {
    if (priceFrom && priceTo) {
        return array.filter((item) => item.price >= priceFrom && item.price <= priceTo);
    } else if (priceFrom) {
        return array.filter((item) => item.price >= priceFrom);
    } else if (priceTo) {
        return array.filter((item) => item.price <= priceTo);
    }
    return array;
};

const getFilteredGuitarType = (array, guitarTypes) => array.filter((item) => guitarTypes.includes(item.type));
const getFilteredStringsCount = (array, stringsCount) => array.filter((item) => stringsCount.includes(item.stringsCount));
