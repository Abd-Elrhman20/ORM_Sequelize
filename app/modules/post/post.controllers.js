import { userModel } from '../../db/models/userModel.js';
import { postModel } from './../../db/models/postModel.js';

async function getAllPosts(req, res) {
    await postModel.findAll().then(posts => {
        res.status(200).json(posts)
    }).catch(err => {
        res.status(500).json(err)
    })
}

async function createPost(req, res) {
    await postModel.create(req.body).then(post => {
        res.status(201).json(post)
    }).catch(err => {
        res.status(500).json(err)
    })
}

async function editPost(req, res) {
    await postModel.update(req.body, { where: { id: req.params.postID } }).then(post => {
        res.status(200).json({ message: 'Post updated successfully' })
    }).catch(err => {
        res.status(500).json({ message: 'Post update failed' })
    })
}

async function deletePost(req, res) {
    await postModel.destroy({ where: { id: req.params.postID } }).then(post => {
        res.status(200).json({ message: 'Post deleted successfully' })
    }).catch(err => {
        res.status(500).json({ message: 'Post delete failed' })
    })
}

////////////////////////////////

// Get a specific post with the author.
async function specialForPost(req, res) {
    await postModel.findOne({ where: { id: req.params.postID }, include: userModel })
        .then(post => {
            res.status(200).json(post)
        }).catch(err => {
            res.status(500).json(err)
        })
}

export { getAllPosts, createPost, editPost, deletePost, specialForPost }