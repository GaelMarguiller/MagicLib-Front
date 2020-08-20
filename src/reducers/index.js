import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import AuthentificationReducer from './authentification';
import ErrorsReducer from './errors';
import SetsReducer from './setsReducer';
import CardsListReducer from './cardListReducer';


const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  errors: ErrorsReducer,
  sets: SetsReducer,
  cardsList: CardsListReducer
});

export default rootReducer;
