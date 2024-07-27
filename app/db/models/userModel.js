import { DataTypes } from "sequelize"
import { dbConnection } from "../dbConnection.js"

// const Sequelize = await dbConnection()
const Sequelize = dbConnection()

export const userModel = Sequelize.define('User', {
    userName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING(300),
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
})