import express from 'express';
import { createPost, deletePost, editPost, getAllPosts, specialForPost } from './post.controllers.js';
import { postMiddleware } from './post.middlewares.js';

export const postRouter = express.Router()

postRouter.use('/:postID', postMiddleware) // middleware

postRouter.get('/', getAllPosts).post('/', createPost)
    .put('/:postID', editPost).delete('/:postID', deletePost)


postRouter.get('/special/:postID', specialForPost)