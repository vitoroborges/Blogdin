const express = require('express')
const connection = require('./database/data')

const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController')

const Article = require('./articles/Article.js');
const Category = require('./categories/categorie');

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

connection.authenticate()
    .then(() => {
        console.log("Conectado ao mysql")
    })
    .catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ], 
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render('index', { articles: articles, categories: categories })
        })
    })
})

app.get('/:slug', (req, res) => {
    let slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render('article', { article: article, categories: categories })
            })
        } else {
            res.redirect('/')
        }
    }).catch((err) => {
        res.redirect('/')
    })
})

app.get('/category/:slug', (req, res) => {
    let slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', { articles: category.articles, categories: categories })
            })
        } else {
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})