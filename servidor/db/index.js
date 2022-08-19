async function conectar(){

    const mysql = await require("mysql2/promise")
    const host = 'localhost'
    const user = 'root'
    const senha = ''
    const conexao = mysql.createConnection({
        host: host,
        user: user,
        password: senha,
        database: 'urna',
    })
    console.log("Banco de dados conectado")
    global.conexao = conexao
    return conexao
}


async function consultar(){
    const con = await conectar()

    let sql = "SELECT tb01_nome, tb01_cargo, tb01_cod, tb01_foto FROM tb01_candidato"
    const [dados] =  await con.query(sql)
    return await dados
}

module.exports = {consultar}