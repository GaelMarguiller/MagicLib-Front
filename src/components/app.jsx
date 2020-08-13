import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../containers/header';
import {Home} from './home';
import {SetsList} from './setsComponent/setsList';
import { SetListCard } from './setComponent/setCardList';
import SignIn from './userComponent/signin';
import {SignOut} from './userComponent/signout';
import SignUp from './userComponent/signup';
import Errors from './errorComponent/errors';

import RequireAuthentification from '../helpers/require-authentification'

import {appUrl as url} from '../constants/appUrl'

require('../style.css');

export const App = () => {
    return (
        <div>
            <Header/>
            <div className='container body-content'>
                <Errors/>
                <Switch>
                    <Route exact path={`${url.BASE_URL}`} component={Home}/>
                    <Route exact path={`${url.SETS_URL}`} component={RequireAuthentification(SetsList)}/>
                    <Route exact path={`${url.SET_URL}`} component={RequireAuthentification(SetListCard)}/>
                    <Route exact path={`${url.SIGNIN_URL}`} component={SignIn}/>
                    <Route exact path={`${url.SIGNOUT_URL}`} component={SignOut}/>
                    <Route exact path={`${url.SIGNUP_URL}`} component={SignUp}/>
                </Switch>
            </div>
        </div>
    );
}
