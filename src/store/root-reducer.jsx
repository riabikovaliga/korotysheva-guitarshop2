import {combineReducers} from 'redux';
import {basket} from './reducers/basket';
import {data} from './reducers/data';
import {filters} from './reducers/filters';
import {popups} from './reducers/popups';
import {sorting} from './reducers/sorting';

export const NameSpace = {
    BASKET: 'BASKET',
    DATA: 'DATA',
    FILTERS: 'FILTERS',
    POPUPS: 'POPUPS',
    SORTING: 'SORTING'
};

export default combineReducers({
    [NameSpace.BASKET]: basket,
    [NameSpace.DATA]: data,
    [NameSpace.FILTERS]: filters,
    [NameSpace.POPUPS]: popups,
    [NameSpace.SORTING]: sorting
});
