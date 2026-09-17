const bens = require("../bens.json")

function autoIncrement(){
    const ultimoId = Number(bens[bens.length - 1].id)
    return ultimoId + 1
}

const create = (req, res) => {
    const dados = req.body
    dados.id = autoIncrement()
    bens.push(dados)
    // res.status(201).json(dados)
    res.redirect("http://127.0.0.1:5500/client/index.html")
}

const list = (req, res) => {
    res.json(bens)
}

module.exports = {
    create,
    list
}


