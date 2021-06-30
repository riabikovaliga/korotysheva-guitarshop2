import {Actions, DEFAULT_PAGE} from '../../const';
import {getFilteredNewCurrentGuitars} from '../../utils';
import {GUITARS} from '../data';

const initialState = {
    originalGuitars: [...GUITARS],
    currentGuitars: [...GUITARS],
    activePage: DEFAULT_PAGE,
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_PAGE:
            return {
                ...state,
                activePage: action.payload
            };
        case Actions.CHANGE_CURRENT_GUITARS:
            return {
                ...state,
                currentGuitars: getFilteredNewCurrentGuitars(state.originalGuitars, action.payload),
                activePage: DEFAULT_PAGE
            };
        default:
            return state;
    }
};

export {data};
