import * as userActions from '../../actions/userActions'
import {SET_AUTHENTIFICATION} from '../../constants/userTypes';

describe('User actions', () => {

    it('set is user is logged', () => {
        const isLoggedIn = true;
        const expectedActions = {
            type: SET_AUTHENTIFICATION,
            payload: isLoggedIn
        }

        expect(userActions.setAuthentification(isLoggedIn)).toEqual(expectedActions)
    })
});
