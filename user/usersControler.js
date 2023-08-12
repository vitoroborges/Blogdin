const express = require('express')
const User = require('./User')
const bcrypt = require('bcryptjs')
const router = express.Router()

router.get('/admin/users', (req, res) => {

})

router.get('/admin/users/create', (req, res) => {
    res.render('admin/users/create')
})

router.post('/users/create', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)

    User.create({
        email: email,
        password: hash
    }).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.redirect('/')
    })
})

module.exports = router