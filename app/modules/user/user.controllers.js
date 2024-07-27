import { commentModel } from "../../db/models/commentModel.js"
import { postModel } from "../../db/models/postModel.js"
import { userModel } from "../../db/models/userModel.js"
import bcrypt from "bcrypt"

async function getAllUsers(req, res) {
    await userModel.findAll().then(users => {
        res.status(200).json({ data: users })
    }).catch(err => {
        res.status(500).json({ message: err.message })
    })
}

// async function addNewUser(req, res) {
//     await userModel.create(req.body).then(user => {
//         res.status(201).json({ message: "user created" })
//     }).catch(err => {
//         res.status(500).json({ message: err.message })
//     })
// }

async function editSpecificUser(req, res) {
    await userModel.update(req.body, { where: { id: req.params.userID } }).then(response => {
        res.status(201).json({ message: "user updated" })
    }).catch(err => {
        res.status(500).json({ message: err.message })
    })
}

async function deleteSpecificUser(req, res) {
    await userModel.destroy({ where: { id: req.params.userID } }).then(response => {
        res.json({ message: "user deleted" })
    }).catch(err => {
        res.status(500).json({ message: err.message })
    })
}

/////////////////////////////////////////

async function login(req, res) {
    await userModel.findAll({ where: { email: req.body.email } }).then(response => {
        if (bcrypt.compareSync(req.body.password, response[0].password)) {
            res.json(response)
        } else {
            res.json({ message: 'wrong password' })
        }
        // if (response[0].password === req.body.password) {
        //     res.json(response)
        // } else {
        //     res.json({ message: 'wrong password' })
        // }
    }).catch(err => {
        res.status(404).json({ message: "User not found" })
    })
}

async function register(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 4)
    req.body.password = hashedPassword
    await userModel.create(req.body).then(response => {
        res.json({ message: "user created" })
    }).catch(err => {
        res.status(404).json({ message: 'Error creating user' })
    })
}

async function logout(req, res) {
    await userModel.destroy({ where: { email: req.body.email } }).then(response => {
        res.json({ message: "user deleted" })
    }).catch(err => {
        res.json({ message: "error occurred" })
    })
}
// //////////////////////////////////////

// Special endpoint to get a specific user with a specific post and post’s comments 
async function specialForUser (req, res) {
    await userModel.findOne({ where: { id: req.params.userID }, include: [postModel, commentModel] })
        .then(response => {
            res.json({ message: "special", data: response })
        }).catch(err => {
            res.status(404).json({ message: "User not found" })
        })
}

export { getAllUsers, editSpecificUser, deleteSpecificUser, login, register, logout, specialForUser }