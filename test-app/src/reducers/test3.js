import { AT_INI_API_TEST_CALL, AT_API_TEST_CALL_SUCESS, AT_API_TEST_CALL_ERROR } from '../actions';

/**
 * Inicialize call
 * @param {*} state 
 */
function iniApiTestCallReducer(state) {
    return {...state, loading: true, response: null, error: null};
}

/**
 * Sucess response
 * @param {*} state 
 * @param {*} action 
 */
function apiTestCallSucess(state, action) {
    return {...state, loading: false, response: action.response, error: null};
}

/**
 * Error response
 * @param {*} state 
 * @param {*} action 
 */
function apiTestCallError(state, action) {
    return {...state, loading: false, response: null, error: action.error};
}

/**
 * Choose reducer by action type
 * @param {*} state 
 * @param {*} action 
 */
export function test3Reducer(state = initialState, action) {
    switch (action.type) {
        case AT_INI_API_TEST_CALL:
            return iniApiTestCallReducer(state);
        case AT_API_TEST_CALL_SUCESS:
            return apiTestCallSucess(state, action);
        case AT_API_TEST_CALL_ERROR:
            return apiTestCallError(state, action);
        default:
            return state;
    }
}

/**
 * Initial state of the reducer
 */
const initialState = {
    loading: false,
    response: null,
    error: null
};