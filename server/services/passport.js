import passport from 'passport';
import JwtStrategy from 'passport-jwt';
import ExtractToken from 'passport-jwt';
import LocalStrategy from 'passport-local';

import UserModel from '../models/user';
import {config} from "../../config";

const jwtOptions = {
    jwtFromRequest: ExtractToken.ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtStrategy = new JwtStrategy.Strategy(jwtOptions, (payload, done) => {
    UserModel.findById(payload.sub, (error, user) => {
        if (error) return done(error, false);
        if (user) {
            console.log("Ok ouai je t'ai trouvé grace au token, tu es : ", user.email)
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
})

const localOptions = { usernameField: "email" }
const localLoginStrategy = new LocalStrategy(localOptions, (email, password, done) => {
    UserModel.findOne({ email }, function (error, user) {
        if (error) return done(error)
        if (!user) return done(null, false)
        user.isPasswordEqualTo(password, (error, isMatch) => {
            if (error) { return done(error) }
            if (!isMatch) { return done(null, false); }
            return done(null, user);
        })

    })
})

passport.use('jwt', jwtStrategy);
passport.use('local', localLoginStrategy);