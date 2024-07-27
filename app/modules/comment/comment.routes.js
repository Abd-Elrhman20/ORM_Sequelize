import express from 'express';
import { createComment, deleteComment, editComment, getAllComments } from './comment.controllers.js';

export const commentRouter = express.Router()

commentRouter.get('/',getAllComments).post('/',createComment).put('/:commentID',editComment).delete('/:commentID',deleteComment)