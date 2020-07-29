import axios from 'axios';

import {GET_LIST_SETS, GET_LIST_SETS_FAILED, GET_LIST_SETS_SUCCEEDED} from '../constants/setTypes';

const API_URL = 'https://api.scryfall.com/sets?type=core';

export const requestSets = () => {
    return {
        type: GET_LIST_SETS,
        fetching: true
    }
}

export const requestSetsSuccess = (sets) => {
    return {
        type: GET_LIST_SETS_SUCCEEDED,
        payload: sets,
        fetching: false
    }
}

export const requestSetsFailed = (error) => {
    return {
        type: GET_LIST_SETS_FAILED,
        payload: error,
        fetching: true
    }
}

export function getAllSets() {
    return dispatch => {
        dispatch(requestSets())
        return axios.get(API_URL)
            .then(response => {
                dispatch(requestSetsSuccess(response.data.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(requestSetsFailed(error));
            })
    }
}