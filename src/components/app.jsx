import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from '../containers/header';
import {Home} from "./home";
import {SetLists} from "./setsComponent/setsList";
import SignIn from './userComponent/signin';
import {SignOut} from './userComponent/signout';
import SignUp from './userComponent/signup';
import Errors from './errorComponent/errors';

import RequireAuthentification from '../helpers/require-authentification'

require('../style.css');

export const App = () => {
    return (
        <div>
            <Header/>
            <div className='container body-content'>
                <Errors/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/sets' component={RequireAuthentification(SetLists)}/>
                    <Route exact path='/signin' component={SignIn}/>
                    <Route exact path='/signout' component={SignOut}/>
                    <Route exact path='/signup' component={SignUp}/>
                </Switch>
            </div>
        </div>
    );
}
