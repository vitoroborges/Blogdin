import { Router } from "express";
import Category from "../categories/categorie";
import Article from "./Article";
import slugify from "slugify";

const router = Router()

router.get('/articles', (req, res) => {
    res.send("ROTA DE ARTIGO")
})

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
    res.render('admin/articles/new', {categories: categories})
    })
})

router.post('/article/save', (req, res) =>{
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(()=>{
        res.redirect('/admin/articles')
    })
})
export default router