import {Actions} from '../../const';

export const changeBasket = (payload) => ({
    type: Actions.CHANGE_BASKET,
    payload: payload
});

export const changeCurrentGuitars = (payload) => ({
    type: Actions.CHANGE_CURRENT_GUITARS,
    payload: payload
});

export const changePage = (payload) => ({
    type: Actions.CHANGE_PAGE,
    payload: payload
});

export const changePriceFrom = (payload) => ({
    type: Actions.CHANGE_PRICE_FROM,
    payload: payload
});

export const changePriceTo = (payload) => ({
    type: Actions.CHANGE_PRICE_TO,
    payload: payload
});

export const changeGuitarTypes = (payload) => ({
    type: Actions.CHANGE_GUITAR_TYPES,
    payload: payload
});

export const changeStringsCount = (payload) => ({
    type: Actions.CHANGE_STRINGS_COUNT,
    payload: payload
});

export const changeVisibilityPopupAddToBasket = (payload) => ({
    type: Actions.CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET,
    payload: payload
});

export const changeVisibilityPopupRemoveFromBasket = (payload) => ({
    type: Actions.CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET,
    payload: payload
});

export const changeVisibilityPopupSuccessInBasket = (payload) => ({
    type: Actions.CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET,
    payload: payload
});

export const changeSortingType = (payload) => ({
    type: Actions.CHANGE_SORTING_TYPE,
    payload: payload
});

export const changeSortingOrder = (payload) => ({
    type: Actions.CHANGE_SORTING_ORDER,
    payload: payload
});

export const changePromoCode = (payload) => ({
    type: Actions.CHANGE_PROMO_CODE,
    payload: payload
});
