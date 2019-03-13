// Actions type
export const AT_INI_API_TEST_CALL = 'AT_INI_API_TEST_CALL';
export const AT_API_TEST_CALL_SUCESS = 'AT_API_TEST_CALL_SUCESS';
export const AT_API_TEST_CALL_ERROR = 'AT_API_TEST_CALL_ERROR';

// Actions creators
export function iniApiTestCall() {
    return {type: AT_INI_API_TEST_CALL};
}

export function apiTestCallSucess(response) {
    return {type: AT_API_TEST_CALL_SUCESS, response};
}

export function apiTestCallError(error) {
    return {type: AT_API_TEST_CALL_ERROR, error};
}