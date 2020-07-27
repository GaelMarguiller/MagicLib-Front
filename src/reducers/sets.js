import {
    GET_LIST_SETS,
    GET_LIST_SETS_FAILED,
    GET_LIST_SETS_SUCCEEDED
} from "../constants/setTypes";

const initialState = {
    id:'',
    name: '',
    icon: '',
    setType: ''
};

export default function SetsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_SETS:
            return {
                ...state,
                fetching: action.fetching
            };
        case GET_LIST_SETS_SUCCEEDED:
            return {
                ...state,
                sets: action.payload,
                fetching: action.fetching
            };
        case GET_LIST_SETS_FAILED:
            return {
                ...state,
                fetching: action.fetching,
                error: action.error
            };
        default:
            return state;
    }
}