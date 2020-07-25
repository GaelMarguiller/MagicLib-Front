import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../actions/userActions';

export const SignOut= () => {
    const dispatch = useDispatch();
  useEffect(() => {
      dispatch(actions.signOutUser());
  })
  return (
      <div>
        Aurevoir !
      </div>
  );
}
