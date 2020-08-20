import {
    GET_CARDS_LIST,
    GET_CARDS_LIST_SUCCEEDED,
    GET_CARDS_LIST_FAILED
} from '../constants/cardListTypes';

const initialState = {
    cardsList: []

};

export default function CardsListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARDS_LIST:
            return {
                ...state,
                fetching: action.fetching
            };
        case GET_CARDS_LIST_SUCCEEDED:
            return {
                cardsList: action.payload,
                fetching: action.fetching
            };
        case GET_CARDS_LIST_FAILED:
            return {
                ...state,
                fetching: action.fetching,
                error: action.error
            };
        default:
            return state;
    }
}
