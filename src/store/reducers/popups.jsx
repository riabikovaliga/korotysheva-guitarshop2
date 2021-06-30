import {Actions} from '../../const';

const initialState = {
    popupAddToBasket: {isOpen: false, id: 0},
    popupRemoveFromBasket: {isOpen: false, id: 0},
    popupSuccessInBasket: {isOpen: false, id: 0},
};

const popups = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_VISIBILITY_POPUP_ADD_TO_BASKET:
            return {
                ...state,
                popupAddToBasket: {isOpen: action.payload.isOpen, id: action.payload.id},
            };
        case Actions.CHANGE_VISIBILITY_POPUP_REMOVE_FROM_BASKET:
            return {
                ...state,
                popupRemoveFromBasket: {isOpen: action.payload.isOpen, id: action.payload.id},
            };
        case Actions.CHANGE_VISIBILITY_POPUP_SUCCESS_IN_BASKET:
            return {
                ...state,
                popupSuccessInBasket: {isOpen: action.payload.isOpen, id: action.payload.id},
            };
        default:
            return state;
    }
};

export {popups};
