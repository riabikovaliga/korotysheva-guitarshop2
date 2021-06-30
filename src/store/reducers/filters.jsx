import {Actions} from '../../const';

const initialState = {
    priceFrom: '',
    priceTo: '',
    guitarTypes: [],
    stringsCount: []
};

const updateElementInArray = (el, array) => {
    const index = array.findIndex((it) => it === el);
    if (index === -1) {
        return [...array, el];
    }
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

const filters = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_PRICE_FROM:
            return {
                ...state,
                priceFrom: action.payload
            };
        case Actions.CHANGE_PRICE_TO:
            return {
                ...state,
                priceTo: action.payload
            };
        case Actions.CHANGE_GUITAR_TYPES:
            return {
                ...state,
                guitarTypes: updateElementInArray(action.payload, state.guitarTypes),
            };
        case Actions.CHANGE_STRINGS_COUNT:
            return {
                ...state,
                stringsCount: updateElementInArray(action.payload, state.stringsCount)
            };
        default:
            return state;
    }
};

export {filters};
