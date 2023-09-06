const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "IZA",
        imagem: "https://tinyurl.com/mtaae57j",
        minibio: "Cantora e atriz"
    },
    {
        nome: "Linda Caicedo",
        imagem: "https://tinyurl.com/txs32ze5",
        minibio: "Jogadora colombiana"
    },
    {
        nome: "Monique Evelle",
        imagem: "https://tinyurl.com/5fk49j9s",
        minibio: "Empresária"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)