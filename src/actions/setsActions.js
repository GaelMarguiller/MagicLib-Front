//import axios from 'axios';

import {
    GET_LIST_SETS,
    GET_LIST_SETS_FAILED,
    GET_LIST_SETS_SUCCEEDED
} from "../constants/setTypes";

const API_URL = 'https://api.scryfall.com/sets';

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
    console.log('toto')
    return dispatch => {
        console.log('tutu')
        dispatch(requestSets())
        console.log('tata');
        return fetch(API_URL, {
            method: 'GET'
        })
            .then(response => {
                console.log(response)
                if (!response.status === 200) {
                    throw new Error('Error - 404 not found')
                }
            })
            .then((response) => {
                console.log(response)
                dispatch(requestSetsSuccess(response));
            })
            .catch((error) => {
                console.log(error);
                dispatch(requestSetsFailed(error));
            })
    }
}