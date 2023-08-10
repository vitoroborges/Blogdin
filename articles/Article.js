const sequelize = require('sequelize');
const connection = require('../database/data')
const Category = require("../categories/categorie");

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

module.exports = Article