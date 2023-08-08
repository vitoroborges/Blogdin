import { DataType } from "sequelize-typescript";
import connection from '../database/data'
import Category from "../categories/categorie";

const Article = connection.define('article', {
    title: {
        type: DataType.STRING,
        allowNull: false
    },
    slug: {
        type: DataType.STRING,
        allowNull: false
    },
    body: {
        type: DataType.TEXT,
        allowNull: false
    }
})


// relation Article - Category
Category.hasMany(Article)
Article.belongsTo(Category)

export = Article