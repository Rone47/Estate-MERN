import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import {errorHandler} from '../utils/error.js';

export const test = (req, res) =>  {
        res.json({
            message: 'Hello Kenya',
        });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next (errorHandler(401, 'You can only update your own account!'));
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set :{
                username:req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, {new: true}
        );

        const {password, ...rest} = updateUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};

export const deleteUSer = async (req, res, next) => {
    if (req.user.id !== req.params.id) 
     return next (errorHandler(401, 'You only delete your own account'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        request.status(200).json('User successfully deleted');
    } catch (error) {
        next(error)
    }
}