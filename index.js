const express = require('express');

//console.log(express);

const server = express();
server.use(express.json());

//Query params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = { nome: 'NODEJS' ,  tipo : 'Backend'}

//CRUD : create / read / update / delete

const cursos = ['Node JS', 'JavaScript' ,  'React Native' ];

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Route Params = /curso/2
server.get('/cursos/:index', (req, res) => {

    const {index} = req.params;
    
    return res.json(cursos[index])
});

//Criando um novo curso
server.post('/cursos' , (req,res) => {
    const { name }  = req.body;

    cursos.push(name);

    return res.json(cursos);
});

//Atualizando um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name }  = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//Delete um curso
server.delete('/cursos/:index' , (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
});


server.listen(3000);