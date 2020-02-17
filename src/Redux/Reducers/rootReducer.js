
import {combineReducers} from 'redux';

import userReducer from './userReducer'
import cartReducer from './cartReducer';
import shopReducer from './shopReducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}



export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);