import { postModel } from "../../db/models/postModel.js";

export async function postMiddleware(req, res, next) {  // to check if the user is authorized to perform the action
    //  UserId  => req.body.UserId
    //  PostId  => req.params.postID
    await postModel.findOne({ where: { id: req.params.postID } })
        .then((response) => {
            if (response.UserId === req.body.UserId) {
                next()
            } else {
                res.status(403).json({ message: "You are not authorized to perform this action" })
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error.message })
        })
}