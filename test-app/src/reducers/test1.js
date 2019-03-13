import { AT_UPDATE_TEXT } from '../actions';

/**
 * Function reducer
 * @param {*} state 
 * @param {*} action 
 */
function updateTextReducer(state, action) {
    return {...state, text: action.text};
}

/**
 * Choose reducer by action type
 * @param {*} state 
 * @param {*} action 
 */
export function test1Reducer(state = initialState, action) {
    switch (action.type) {
        case AT_UPDATE_TEXT:
            return updateTextReducer(state, action);
        default:
            return state;
    }
}

/**
 * Initial state of the reducer
 */
const initialState = {
    text: ''
};