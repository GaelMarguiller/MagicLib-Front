import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';

import * as actions from '../../actions/userActions';

const FIELDS = { email: 'email', password: 'password' };

const SignIn = props => {
    const {history} = props;
    const dispatch = useDispatch();

    const handleSubmit = credentials => {
        dispatch(actions.signInUser(credentials, history));
    };
    return (
        <form onSubmit={ props.handleSubmit(handleSubmit) }>
            <div className='row justify-content-md-center'>
                <h1>Connexion</h1>
            </div>
            <div className='row justify-content-md-center'>
                <fieldset className='col-md-4 form-group'>
                    <label className='bmd-label-floating'>Email</label>
                    <Field
                        name={FIELDS.email}
                        component='input'
                        type='text'
                        className='form-control'
                    />
                </fieldset>
            </div>
            <div className='row justify-content-md-center'>
                <fieldset className='col-md-4 form-group'>
                    <label className='bmd-label-floating'>Mot de passe</label>
                    <Field
                        name={FIELDS.password}
                        component='input'
                        type='password'
                        className='form-control'
                    />
                </fieldset>
            </div>
            <div className='row justify-content-md-center'>
                <button type='submit' className='btn btn-primary btn-raised'>
                    Connexion
                </button>
            </div>
        </form>
    );
}

export default reduxForm({
  form: 'SignInForm',
  fields: Object.keys(FIELDS)
})(SignIn);

