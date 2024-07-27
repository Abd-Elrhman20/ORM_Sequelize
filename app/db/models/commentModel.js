import { DataTypes } from "sequelize"
import { dbConnection } from "../dbConnection.js"

// const Sequelize =  await dbConnection()
const Sequelize = dbConnection()

export const commentModel = Sequelize.define('Comment', {
    content: {
        type: DataTypes.STRING(300)
    },
})