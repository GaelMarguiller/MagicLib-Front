import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/errorActions';
import { withRouter } from 'react-router';

const Errors = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.errors.message);

    useEffect(() => {
        dispatch(actions.resetError());
    }, [])
    return (
        error &&
        <div className='alert alert-danger' role='alert'>
            {error}
        </div>
    );
}

export default withRouter((Errors));
