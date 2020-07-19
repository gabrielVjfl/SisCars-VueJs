require('../models/connection')

const mongoose = require('mongoose')

const Carros = mongoose.model("carros_estoque")

const express = require("express")

module.exports = {
    async store(req,res) {

        const {marca, modelo, ano, preco_compra, preco_venda, data} = req.body
            
        const CadastrarCarros = await Carros.create(req.body)

        res.send({CadastrarCarros})


        },
        async index(req,res) {
         await Carros.find().then((suc)=> {
                 res.send(suc)

             }).catch((err) => {
                 console.log(err)
             })

  

          
        },
        async index2(req,res) {
             const ListarCarros2 = await Carros.find().sort({data: 'desc'})

             res.send({ListarCarros2})

             if(!ListarCarros2) {
                 res.send('SEM CARROS')
             }
        },
        
        async Count(req,res) {
            await Carros.countDocuments((err, result) => {
                if(err) {
                    res.send({err})
                }

                else {
                    res.send({registros: result})
                }
            })
        },
        async delete(req,res) {
        let deletar =   await Carros.remove({_id: req.params.id})
                res.send({deletar})
        }
    }

    