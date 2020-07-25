import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { useDispatch } from 'react-redux';

import * as actions from '../actions';
import * as validations from '../validations';

const FIELDS = {
    email: 'email',
    password: 'password',
    secondPassword: 'secondPassword'
};
const SignUp = props => {
    const {history} = props;
    const dispatch = useDispatch();

    const handleSubmit = formValues => {
        dispatch(actions.signUpUser(formValues, history));
    };

    const renderInputComponent = field => {
        return (
            <div className='row justify-content-md-center'>
                <fieldset className='col-md-4 form-group'>
                    <label className='bmd-label-floating'>{field.label}</label>
                    <input {...field.input} type={field.type} className='form-control'/>
                    {field.meta.touched &&
                    field.meta.error &&
                    <span className='error'>{field.meta.error}</span>}
                </fieldset>
            </div>
        );
    };

    return (
        <form onSubmit={ props.handleSubmit(handleSubmit)}>
            <div className='row justify-content-md-center'>
                <h1>Inscription</h1>
            </div>
            <Field
                name={FIELDS.email}
                component={renderInputComponent}
                type='text'
                label='email'
            />
            <Field
                name={FIELDS.password}
                component={renderInputComponent}
                type='password'
                label='Mot de passe'
            />
            <Field
                name={FIELDS.secondPassword}
                component={renderInputComponent}
                type='password'
                label='Mot de passe (répétez)'
            />
            <div className='row justify-content-md-center'>
                <button type='submit' className='btn btn-primary btn-raised'>
                    Inscription
                </button>
            </div>
        </form>
    );
}

function validate(formValues) {
    const errors = {};
    errors.email = validations.validateEmail(formValues.email);
    errors.password = validations.validateNotEmpty(formValues.password);
    errors.secondPassword = validations.validateEqual(
        formValues.password,
        formValues.secondPassword
    );
    return errors;
}

export default reduxForm({
    form: 'SignUpForm',
    fields: Object.keys(FIELDS),
    validate
})(SignUp);