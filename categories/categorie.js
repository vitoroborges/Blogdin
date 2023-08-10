const sequelize = require('sequelize')
const connection = require('../database/data')

const Category = connection.define('categories',{
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = Category