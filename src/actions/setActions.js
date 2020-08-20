import axios from 'axios';

import {
    GET_SET,
    GET_SET_FAILED,
    GET_SET_SUCCEEDED
} from '../constants/setTypes';

const API_SET_URL = 'https://api.scryfall.com/sets';

export const requestSet = () => {
    return {
        type: GET_SET,
        fetching: true
    }
}

export const requestSetSuccess = (set) => {
    return {
        type: GET_SET_SUCCEEDED,
        payload: set,
        fetching: false
    }
}

export const requestSetFailed = (error) => {
    return {
        type: GET_SET_FAILED,
        payload: error,
        fetching: true
    }
}

export function getSet(id) {
    return dispatch => {
        dispatch(requestSet())
        return axios.get(`${API_SET_URL}/${id}`)
            .then(response => {
                const set = {
                    block: response.data.block,
                    blockCode: response.data.block_code,
                    setIcon: response.data.icon_svg_uri,
                    id: response.data.id,
                    setName: response.data.name,
                    setCard: response.data.search_uri,
                };
                dispatch(requestSetSuccess(set))
            })
            .catch(error => {
                console.log(error);
                dispatch(requestSetFailed(error))
            })
    }
}
