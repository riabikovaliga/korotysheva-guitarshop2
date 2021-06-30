export const AppRoute = {
    CATALOG: '/',
    BASKET: '/basket',
    ROOT: '/'
};

export const Actions = {
    CHANGE_BASKET: 'CHANGE_BASKET',
    CHANGE_GUITAR_TYPES: 'CHANGE_GUITAR_TYPES',
    CHANGE_PAGE: 'CHANGE_PAGE',
    CHANGE_PRICE_FROM: 'CHANGE_PRICE_FROM',
    CHANGE_PRICE_TO: 'CHANGE_PRICE_TO',
    CHANGE_STRINGS_COUNT: 'CHANGE_STRINGS_COUNT',
    CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET: 'CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET',
    CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET: 'CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET',
    CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET: 'CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET',
    CHANGE_SORTING_TYPE: 'CHANGE_SORTING_TYPE',
    CHANGE_SORTING_ORDER: 'CHANGE_SORTING_ORDER',
    CHANGE_PROMO_CODE: 'CHANGE_PROMO_CODE',
    CHANGE_CURRENT_GUITARS: 'CHANGE_CURRENT_GUITARS'
};

export const ESC_CODE = 27;

export const DEFAULT_PAGE = 1;

export const GuitarType = {
    ACOUSTIC: 'ACOUSTIC',
    ELECTRO: 'ELECTRO',
    UKULELE: 'UKULELE'
};

export const GuitarTypeNames = {
    ACOUSTIC: 'Акустическая гитара',
    ELECTRO: 'Электрогитара',
    UKULELE: 'Укулеле'
};

export const StringsCount = {
    FOUR: '4',
    SIX: '6',
    SEVEN: '7',
    TWELVE: '12'
};

export const SortingTypes = {
    PRICE: 'PRICE',
    POPULAR: 'POPULAR',
};

export const SortingOrders = {
    TO_LOW: 'high to low',
    TO_HIGH: 'low to high',
};

export const MAX_PERCENT_DISCOUNT = 0.3;
export const PAGE_ITEM_COUNT = 9;

export const PromoCodes = {
    GITARAHIT: 'GITARAHIT',
    SUPERGITARA: 'SUPERGITARA',
    GITARA2020: 'GITARA2020'
};

export const PromoCodesInterpretation = {
    GITARAHIT: 0.1, // даёт скидку 10%
    SUPERGITARA: 700, // скидка 700 рублей
    GITARA2020: 3500 //скидка 3500 рублей, но не больше MAX_PERCENT_DISCOUNT от заказа.
};
