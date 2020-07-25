import axios from 'axios';

import {
  SET_AUTHENTIFICATION,
  INCREMENT_ACTION_COUNT,
  PARSE_MESSAGE,
  PARSE_ERROR,
  RESET_ERROR
} from './action-types';

const BASE_URL = 'http://localhost:3090';

export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn
  };
}

export function incrementActionCount() {
  return {
    type: INCREMENT_ACTION_COUNT
  };
}


export function parseError(errorMessage) {
  return { type: PARSE_ERROR, payload: errorMessage };
}
export function resetError() {
  return { type: RESET_ERROR };
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

export function getSpecialRessource() {
  return function(dispatch) {
    axios
      .get(`${BASE_URL}/specialRessource`, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({ type: PARSE_MESSAGE, payload: response.data.result });
      })
      .catch(error => {
        console.log(error);
      });
  };
}