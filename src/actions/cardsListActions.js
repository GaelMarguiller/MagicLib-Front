import axios from 'axios';

import {
    GET_CARDS_LIST,
    GET_CARDS_LIST_SUCCEEDED,
    GET_CARDS_LIST_FAILED
} from '../constants/cardListTypes';

export const requestCardsList = () => {
    return {
        type: GET_CARDS_LIST,
        fetching: true
    }
}

export const requestCardsListSuccess = (cardsList) => {
    return {
        type: GET_CARDS_LIST_SUCCEEDED,
        payload: cardsList,
        fetching: false
    }
}

export const requestCardsListFailed = (error) => {
    return {
        type: GET_CARDS_LIST_FAILED,
        payload: error,
        fetching: true
    }
}

export function getCardsList(url) {
    return dispatch => {
        dispatch(requestCardsList())
        return axios.get(url)
            .then(response => {
                dispatch(requestCardsListSuccess(response.data.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(requestCardsListFailed(error));
            });
    }
}
