import {
    GET_SET,
    GET_SET_SUCCEEDED,
    GET_SET_FAILED
} from '../../constants/setTypes';

const initialState = {
    set: []

};

export default function SetReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SET:
            return {
                ...state,
                fetching: action.fetching
            };
        case GET_SET_SUCCEEDED:
            return {
                ...state,
                set: action.payload,
                fetching: action.fetching
            };
        case GET_SET_FAILED:
            return {
                ...state,
                fetching: action.fetching,
                error: action.error
            };
        default:
            return state;
    }
}
