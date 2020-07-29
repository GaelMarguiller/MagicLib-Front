import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

export default function(ChildComponent) {
  const RequireAuthentification = props => {
    const {history} = props
    const isLoggedIn = useSelector(state => state.authentification.isLoggedIn)

    useEffect(() => {
      if (!isLoggedIn) {
        history.push('/')
      }
    }, [isLoggedIn, history]);

    return isLoggedIn && <ChildComponent />;
  }

  return connect(null)(RequireAuthentification);
}
