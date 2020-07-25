import {PARSE_ERROR, RESET_ERROR} from '../constants/errorConstant';

export function parseError(errorMessage) {
    return { type: PARSE_ERROR, payload: errorMessage };
}
export function resetError() {
    return { type: RESET_ERROR };
}