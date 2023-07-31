import { Router } from "express";

const router = Router()

router.get('/categories', (req, res) => {
    res.send("ROTA DE CATEGORIAS")
})

router.get('/admin/categories/new',(req, res)=>{
    res.send("ROTA PARA CRIAR UMA NOVA CATEGORIA")
})
export default router