import {Actions, SortingOrders, SortingTypes} from '../../const';

const initialState = {
    sortingType: null,
    sortingOrder: null,
};

const sorting = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_SORTING_TYPE:
            return {
                ...state,
                sortingType: action.payload,
                sortingOrder: state.sortingOrder ? state.sortingOrder : SortingOrders.TO_HIGH
            };
        case Actions.CHANGE_SORTING_ORDER:
            return {
                ...state,
                sortingOrder: action.payload,
                sortingType: state.sortingType ? state.sortingType : SortingTypes.PRICE
            };
        default:
            return state;
    }
};

export {sorting};
