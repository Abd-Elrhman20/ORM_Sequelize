import { commentModel } from './../../db/models/commentModel.js';

async function getAllComments(req, res) {
    await commentModel.findAll().then(comments => {
        res.status(200).json(comments)
    }).catch(err => {
        res.status(500).json(err)
    })
}

async function createComment(req, res) {
    await commentModel.create(req.body).then(comment => {
        res.status(201).json(comment)
    }).catch(err => {
        res.status(500).json(err)
    })
}

async function editComment(req, res) {
    await commentModel.update(req.body, { where: { id: req.params.commentID } }).then(comment => {
        res.status(200).json({ message: 'Comment updated successfully' })
    }).catch(err => {
        res.status(500).json({ message: 'Comment update failed' })
    })
}

async function deleteComment(req, res) {
    await commentModel.destroy({ where: { id: req.params.commentID } }).then(comment => {
        res.status(200).json({ message: 'Comment deleted successfully' })
    }).catch(err => {
        res.status(500).json({ message: 'Comment delete failed' })
    })
}

export { getAllComments, createComment, editComment, deleteComment }