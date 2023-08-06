import express, { Express, Request, Response} from 'express';
import connection  from './database/data'

import categoriesController from './categories/categoriesController'
import articlesController from './articles/articlesController'

import Article from './articles/Article';
import Category from './categories/categorie';

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + 'public'))

connection.authenticate()
.then(() => {
    console.log("Conectado ao mysql")
})
.catch((error) => {
    console.log(error)
})

app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/',(req, res) => {
    res.render('index')
})

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080')
})