import React, {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import * as actions from '../actions';
import {withRouter} from 'react-router';

const Errors = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.errors.message);

    useEffect(() => {
        dispatch(actions.resetError());
    })
    return (
        error &&
        <div className='alert alert-danger' role='alert'>
            {error}
        </div>
    );
}

export default withRouter(connect(null, actions)(Errors));
