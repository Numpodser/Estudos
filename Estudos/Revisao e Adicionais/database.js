const pg = require('pg')
const database = new pg.Client('postgresql://postgres.udjwvxnnxpsjhyrsqcju:SenhadoBanco@aws-0-sa-east-1.pooler.supabase.com:5432/postgres')

database.connect((erro) => {
    if (erro) {
        return console.log('Erro ao conectar no banco')
    }
    return console.log('Conectado ao banco')
})

module.exports = database