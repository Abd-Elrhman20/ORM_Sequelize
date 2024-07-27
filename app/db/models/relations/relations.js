import { commentModel } from "../commentModel.js";
import { postModel } from "../postModel.js";
import { userModel } from "../userModel.js";

// user has posts 1 to many
userModel.hasMany(postModel)
postModel.belongsTo(userModel)

// user has comments 1 to many
userModel.hasMany(commentModel)
commentModel.belongsTo(userModel)

// post include comments 1 to many
postModel.hasMany(commentModel)
commentModel.belongsTo(postModel)