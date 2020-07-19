const PORT = 3898

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const cors = require('cors')

const router = require("./routes/router")

require("./models/connection")

const Carros = mongoose.model("carros_estoque")


mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://gabrielVjfl:60818181@cluster0-lqnvw.gcp.mongodb.net/PROJETOMONGO2", {useNewUrlParser: true, useUnifiedTopology: true}).then((suc) => {
    //console.log('sucesso', suc)
}).catch((err) => {
   // console.log('deu erro', err)
})

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', router)


app.listen(PORT, () => {
    console.log('Rodando na porta', PORT)
})
