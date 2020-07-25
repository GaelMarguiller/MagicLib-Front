import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import AuthentificationReducer from "./authentification";
import ErrorsReducer from "./errors";

const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  errors: ErrorsReducer
});

export default rootReducer;
