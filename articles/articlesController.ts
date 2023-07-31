import { Router } from "express";

const router = Router()

router.get('/articles', (req, res) => {
    res.send("ROTA DE ARTIGO")
})

router.get('/admin/articles/new', (req, res) => {
    res.send("ROTA PARA CRIAR UM NOVO ARTIGO")
})
export default router