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
                fetching: action.fetching
            };
        case GET_SET_SUCCEEDED:
            return {
                set: action.payload,
                fetching: action.fetching
            };
        case GET_SET_FAILED:
            return {
                fetching: action.fetching,
                error: action.error
            };
        default:
            return state;
    }
}
