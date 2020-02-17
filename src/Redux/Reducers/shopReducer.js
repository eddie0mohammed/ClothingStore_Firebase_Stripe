import {data} from '../../pages/Shop/data';

const initalState = {
    collections : data

}

const shopReducer = (state = initalState, action) => {

    switch (action.type){

        default:
            return state;
    }
}

export default shopReducer;