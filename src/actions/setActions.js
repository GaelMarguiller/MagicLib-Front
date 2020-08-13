import {GET_SET, GET_SET_FAILED, GET_SET_SUCCEEDED} from '../constants/setTypes';

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

export function getSet(setState) {
    return dispatch => {
        dispatch(requestSet())
        const set = {
            block: setState.block,
            blockCode: setState.block_code,
            setIcon: setState.icon_svg_uri,
            id: setState.id,
            setName: setState.name,
            setCard: setState.search_uri,
        }
        return dispatch(requestSetSuccess(set))
    }
}
