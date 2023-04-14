const express = require('express');

//console.log(express);

const server = express();

//Query params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = { nome: 'NODEJS' ,  tipo : 'Backend'}

//Query params
//localhost:3000/curso
/*server.get('/curso', (req, res) => {
    const nome = req.query.nome;
    
    return res.json({ curso : `Aprendendo ${nome}` })
});*/

//Route Params = /curso/2
server.get('/curso/:id', (req, res) => {
    const id = req.params.id;
    
    return res.json({ curso : `Curso:  ${id}` })
});
server.listen(3000);