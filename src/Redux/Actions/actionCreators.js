
import * as actionTypes from './actionTypes';


export const setCurrentUser = (user) => {

    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: user
    }
}


export const toggleCart = () => {
    return {
        type: actionTypes.TOGGLE_CART_HIDDEN,
        payload: ''
    }
}


export const addItem = (item) => {

    return {
        type: actionTypes.ADD_ITEM,
        payload: item
    }

}

export const removeItem = (id) => {

    return {
        type: actionTypes.REMOVE_ITEM,
        payload: id
    }
}

export const removeSingleItem = (id) => {
    return {
        type: actionTypes.REMOVE_SINGLE_ITEM,
        payload: id
    }
}