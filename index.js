const express = require('express');

//console.log(express);

const server = express();

//Query params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = { nome: 'NODEJS' ,  tipo : 'Backend'}

const cursos = ['Node JS', 'JavaScript' ,  'React Native' ];


//Route Params = /curso/2
server.get('/curso/:index', (req, res) => {

    const {index} = req.params;
    
    return res.json(cursos[index])
});
server.listen(3000);