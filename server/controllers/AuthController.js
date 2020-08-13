import UserModel from '../models/user';
import passport from 'passport'
import lodash from 'lodash'
import jwt from 'jwt-simple';

import {config} from "../../config";

function getTokenForUser(user) {
    const timeStamp = new Date().getTime();
    return jwt.encode(
        {
            sub: user.id,
            iat: timeStamp
        },
        config.secret
    );
}

export function signUp(req, res, next) {
    const email = req.body.email
    const password = req.body.password
    const emptyEmail = lodash.isEmpty(email)
    const emptyPassword = lodash.isEmpty(password)

    UserModel.findOne({email: email}, (error, existingUser) => {
        if (error) return next(error)

        if (existingUser) {
            return res.status(422).send({error: 'Email déjà utilisè'})
        }

        if (emptyEmail || emptyPassword) {
            return emptyEmail === true
                ? res.status(422).send({error: 'Email vide'})
                : res.status(422).send({error: 'Mot de passe vide'})
        } else {
            const user = new UserModel({
                email: email,
                password: password
            })
            user.save(error => {
                if (error) {
                    return next(error)
                } else {
                    res.json({token: getTokenForUser(user)})
                }
            });
        }
    });
}

export function signIn(req, res, next) {
    passport.authenticate('local', null, function (error, user) {
        if (error) return next(error);
        if (!user) {
            return res
                .status(500)
                .send({message: 'Les identifiants sont invalides'})
        }
        res.json({token: getTokenForUser(user)})
    })(req, res, next);
}