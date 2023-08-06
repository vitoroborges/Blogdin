import { Router } from "express";
import Category from "./categorie";
import slugify from "slugify";

const router = Router()

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new')
})

router.post('/categories/save', (req, res) => {
    var title = req.body.title
    if (title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        })
            .then(() => {
                res.redirect('/admin/categories')
            })
    } else {
        res.redirect('/admin/categories/new')
    }
})

router.get("/admin/categories", (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/categories/index', { categories: categories })
    })

})

router.post('/categories/delete', (req, res) => {
    let id = req.body.id
    if (id != undefined) {
        if (!isNaN(id)) {
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect('/admin/categories')
            })

        } else {
            res.redirect('/admin/categories')
        }

    } else {
        res.redirect('/admin/categories')
    }
})

router.get('/admin/categories/edit/:id', (req, res) => {
    let id = req.params.id
    if (isNaN(id as any)) {
        res.redirect('/admin/categories')
    }
    Category.findByPk(id).then(category => {
        if (category != undefined) {
            res.render('admin/categories/edit', { category: category })
        } else {
            res.redirect('/admin/categories')
        }
    }).catch(err => {
        res.redirect('/admin/categories')
    })
})

export default router