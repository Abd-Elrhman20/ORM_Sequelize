import express from 'express';
import { deleteSpecificUser, editSpecificUser, getAllUsers, login, logout, register, specialForUser } from './user.controllers.js';
import { checkedEmail } from './user.middlewares.js';

export const userRouter = express.Router()

userRouter.get('/', getAllUsers)
    .put('/:userID', editSpecificUser).delete('/:userID', deleteSpecificUser)
// .post('/', addNewUser)

userRouter.use('/register', checkedEmail) // middleware checked email exist or not
userRouter.post('/login', login).post('/register', register).post('/logout', logout)

userRouter.get('/special/:userID', specialForUser)