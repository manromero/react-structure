/*************************************************************
 * API example
 ************************************************************/
import axios from 'axios';
import { API_TYPI_CODE_DEMO_POST } from './endPoints';

export function callTest() {
    const url = API_TYPI_CODE_DEMO_POST;
    return (
        axios.get(url)
    );
}