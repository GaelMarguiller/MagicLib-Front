import passport from 'passport'
require('./services/passport');

import {signUp} from "./controllers/AuthController";
import {signIn} from "./controllers/AuthController";

/*const requireAuth = passport.authenticate("jwt", { session: false})*/

export function routeLogin(expressServer) {
    expressServer.post('/signin', signIn);
}

export function routeSignUp(expressServer) {
    expressServer.post('/signup', signUp)
}