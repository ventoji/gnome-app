import { combineReducers } from 'redux';

import gnomeReducer from '../reducer/gnome';
import filtersReducer from '../reducer/filter';
import gnomesReducer from '../reducer/gnomes';

const rootReducer = () =>
  combineReducers({
    gnome: gnomeReducer,
    filters: filtersReducer,
    gnomes: gnomesReducer
  });

export default rootReducer;