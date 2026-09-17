const express = require("express")
const cors = require("cors")

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

const routes = require("./src/routes")

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const porta = 3000

app.get('/', rotaInicial)
app.use(routes)

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})