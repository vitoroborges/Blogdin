import sequelize from 'sequelize';
import connection from '../database/data'
import Category from "../categories/categorie";

const Article = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false
    },
    body: {
        type: sequelize.TEXT,
        allowNull: false
    }
})


// relation Article - Category
Category.hasMany(Article)
Article.belongsTo(Category)

export = Article