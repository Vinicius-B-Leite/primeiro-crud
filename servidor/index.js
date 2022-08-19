const Express = require("express")
const servidor = Express()
const cors = require('cors')



async function Consultar(){
    const db = await require('./db/')
    let dados = await db.consultar()
    return dados
}

servidor.use(cors())

servidor.get('/', async (requisicao, resposta)=>{
    let dados = await Consultar()
    resposta.send(dados)
})

servidor.listen(3001, ()=>console.log("O servidor está rodando"))