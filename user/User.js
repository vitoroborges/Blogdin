const sequelize = require('sequelize')
const connection = require('../database/data')

const User = connection.define('users',{
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = User