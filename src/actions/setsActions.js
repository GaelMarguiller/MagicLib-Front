import axios from 'axios';

import {GET_LIST_SETS, GET_LIST_SETS_FAILED, GET_LIST_SETS_SUCCEEDED} from '../constants/setsListTypes';

const API_URL = 'https://api.scryfall.com/sets?type=core';

export const requestSetsList = () => {
    return {
        type: GET_LIST_SETS,
        fetching: true
    }
}

export const requestSetsListSuccess = (sets) => {
    return {
        type: GET_LIST_SETS_SUCCEEDED,
        payload: sets,
        fetching: false
    }
}

export const requestSetsListFailed = (error) => {
    return {
        type: GET_LIST_SETS_FAILED,
        payload: error,
        fetching: true
    }
}

export function getAllSets() {
    return dispatch => {
        dispatch(requestSetsList())
        return axios.get(API_URL)
            .then(response => {
                const setsList = response.data.data.filter(set =>
                    set.set_type === 'core' || set.set_type === 'expansion'
                );
                dispatch(requestSetsListSuccess(setsList));
            })
            .catch(error => {
                console.log(error);
                dispatch(requestSetsListFailed(error));
            });
    }
}
