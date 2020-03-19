import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import createRootReducer from '../reducer';


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['gnome', 'gnomes']
    };

const pReducer = persistReducer(persistConfig, createRootReducer());


export const configureStore = createStore(
    pReducer
 );
 
 export const persistor = persistStore(configureStore);

/* export default () => {

    const store = createStore(
        combineReducers({
            gnome: gnomeReducer,
            filters: filtersReducer,
            gnomes: gnomesReducer
        })
     );

    return store;
}; */