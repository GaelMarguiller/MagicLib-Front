import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import AuthentificationReducer from "./authentification";
import ErrorsReducer from "./errors";
import SetsReducer from "./sets";

const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  errors: ErrorsReducer,
  sets: SetsReducer
});

export default rootReducer;
