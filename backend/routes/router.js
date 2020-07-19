const express = require("express")
const carsController = require("../controller/carsController")


require('../models/connection')

const mongoose = require('mongoose')

const Carros = mongoose.model("carros_estoque")

const router = express.Router()

router.get('/teste', (req,res) => {
    res.send("Testandoo")
})

router.post('/registrar', carsController.store)

router.get('/listar', carsController.index)

router.get('/listarAntigos', carsController.index2)

router.get('/count', carsController.Count)

router.delete('/delete/:id', carsController.delete)

module.exports = router



