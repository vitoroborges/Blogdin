import {DataType} from "sequelize-typescript";
import connection from '../database/data'

const Category = connection.define('categories',{
    title: {
        type: DataType.STRING,
        allowNull: false
    },
    slug: {
        type: DataType.STRING,
        allowNull: false
    }
})

export = Category