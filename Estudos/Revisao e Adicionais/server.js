const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const database = require('./database')

app.get('/tabela', async (req, res) => {
    try {
        const resultado = await database.query('SELECT * FROM "Cervejas"'); 
        res.json(resultado.rows);
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
        res.status(500).json({ erro: 'Erro ao buscar dados' });
    }
});

app.get('/nome', (req, res) => {
    
})

app.listen(3000, () => {
    console.log('Executando servidor')
})