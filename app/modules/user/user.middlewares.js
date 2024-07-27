import { userModel } from "../../db/models/userModel.js"

export const checkedEmail = async (req, res, next) => {
    await userModel.findOne({ where: { email: req.body.email } }).then(user => {
        if (user) {
            res.status(400).json({ message: "Email already exists" })
        } else {
            next()
        }
    }).catch(err => {
        res.status(500).json({ message: err.message })
    })
}