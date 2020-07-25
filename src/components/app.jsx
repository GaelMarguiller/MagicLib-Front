import Header from '../containers/header';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './userComponent/signin';
import { SignOut } from './userComponent/signout';
import SignUp from './userComponent/signup';
import Errors from './errorComponent/errors';
require('../style.css');

export const App= () => {
  return (
      <div>
        <Header />
        <div className='container body-content'>
          <Errors />
          <Switch>
            <Route exact path='/'/>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signout' component={SignOut} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </div>
  );
}
