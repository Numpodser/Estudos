const http = require('http');
const host = 'localhost';
const port = 3000;

const partidas = [
    {id:1, partidas: 'Grêmio X Inter'},
    {id:2, partidas: 'Flamengo X Vasco'},
    {id:3, partidas: 'Inter X Avaí'},
    {id:4, partidas: 'Flamengo X Grêmio'},
    {id:5, partidas: 'Real Madrid X Grêmio'},
    {id:6, partidas: 'Barcelona X Inter'},
]

const requestListener = function (req, res) {

    res.setHeader('Content-Type', 'application/json')

    switch(req.url){

        case '/partida':
            res.writeHead(200);
            res.end(JSON.stringify({partidas: []}));
            break;

        case 'Grêmio':
            res.writeHead(200);
            res.end(
                partidas.search('Grêmio')
            );
            break;

        case 'Inter':
            res.writeHead(200);
            res.end(JSON.stringify({ autores: []}));
            break;

        case 'Flamengo':

        case 'Vasco':

        case 'Avaí':

        case 'Real Madrid':

        case 'Barselona':

        default:
            res.writeHead(404);
            res.end('Nada encntrado');
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log('Server disponível!');
});