import Header from '../containers/header';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home';
import SignIn from './signin';
import { SignOut } from './signout';
import SignUp from './signup';
import Errors from './errors';
require('../style.css');

export const App= () => {
  return (
      <div>
        <Header />
        <div className='container body-content'>
          <Errors />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signout' component={SignOut} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </div>
  );
}
