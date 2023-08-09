 import sequelize from 'sequelize'
import connection from '../database/data'

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

export = Category