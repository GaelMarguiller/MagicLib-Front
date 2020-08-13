import mongoose from 'mongoose';
import bCrypt from 'bcrypt-nodejs';


const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

UserSchema.pre('save', function (next) {
    const user = this;

    bCrypt.genSalt(10, (error, salt) => {
        if (error) {
            return next(error);
        }
        bCrypt.hash(user.password, salt, null, (error, hash) => {
            if (error) {
                return next(error);
            }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.isPasswordEqualTo = function (externalPassword, done)  {
    bCrypt.compare(externalPassword, this.password, (error, isMatch) => {
        if (error) {
            return done(error)
        }
        done(null, isMatch)
    })
}
const UserModel = mongoose.model('user', UserSchema)

export default UserModel;