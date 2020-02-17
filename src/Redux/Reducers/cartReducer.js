
import * as actionTypes from '../Actions/actionTypes';

import {addItemToCart,removeItemFromCart } from '../../utilities';

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    
    switch (action.type){

        case (actionTypes.TOGGLE_CART_HIDDEN):
            return {
                ...state,
                hidden: !state.hidden
            }


        case (actionTypes.ADD_ITEM):
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case (actionTypes.REMOVE_ITEM):
            const updatedItems = state.cartItems.filter(elem => elem.id !== action.payload);
            return {
                ...state,
                cartItems: updatedItems
            }

        case(actionTypes.REMOVE_SINGLE_ITEM):


            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        
        default:
            return state;
    }
}

export default cartReducer;