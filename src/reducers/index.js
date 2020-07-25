import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import ActionInfoReducer from "./action-info";

import { reducer as form } from "redux-form";
import ErrorsReducer from "./errors";
const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  errors: ErrorsReducer
});

export default rootReducer;
