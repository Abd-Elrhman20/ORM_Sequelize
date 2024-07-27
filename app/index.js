import express from 'express'
import { commentRouter } from './modules/comment/comment.routes.js';
import { postRouter } from './modules/post/post.routes.js';
import { userRouter } from './modules/user/user.routes.js';
import './db/models/relations/relations.js'

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)


app.listen(3000, () => console.log("server is working on port 3000"))