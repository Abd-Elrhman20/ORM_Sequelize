import { DataTypes } from "sequelize"
import { dbConnection } from "../dbConnection.js"

// const Sequelize = await dbConnection()
const Sequelize = dbConnection()

export const postModel = Sequelize.define('Post', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING(3000)
    },
})