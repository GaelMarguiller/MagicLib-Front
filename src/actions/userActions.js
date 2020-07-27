import axios from 'axios';

import {SET_AUTHENTIFICATION} from '../constants/userTypes';
import { parseError } from './errorActions';

const BASE_URL = 'http://localhost:3090';

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}

export function signInUser({ email, password }, history) {
    return function(dispatch) {
        axios
            .post(`${BASE_URL}/signin`, {
                email,
                password
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(setAuthentification(true));
                history.push('/');
            })
            .catch(errors => {
                console.log(errors);
                dispatch(parseError(errors.response.data.message));
            });
    };
}

export function signUpUser({ email, password }, history) {
    return function(dispatch) {
        axios
            .post(`${BASE_URL}/signup`, {
                email,
                password
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(setAuthentification(true));
                history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function signOutUser() {
    return function(dispatch) {
        dispatch(setAuthentification(false));
        localStorage.removeItem('token');
    };
}