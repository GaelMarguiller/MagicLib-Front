import { appUrl } from '../constants/appUrl'

export function getBaseUrl() {
    return appUrl.BASE_URL
}

export function getSetsUrl() {
    return appUrl.SETS_URL
}

export function getSetUrl(id) {
    return `${appUrl.SET_URL}/${id}`
}

export function getSignInUrl() {
    return appUrl.SIGNIN_URL
}

export function getSignOutUrl() {
    return appUrl.SIGNOUT_URL
}

export function getSignUpUrl() {
    return appUrl.SIGNUP_URL
}
