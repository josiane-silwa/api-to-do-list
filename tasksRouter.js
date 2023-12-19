/// chamada de todos os modulos utilizados
const express = require('express');
const router = express.Router();
const db = require("./models/tasksModels");
const app = require("./app");
//const tasksMiddleware = require("./tasksMiddleware");

/// rota raiz
router.get('/', (req, res) => res.json({ message: 'Funcionando!'}));

// rota para listagem de tarefas por id
// http://localhost:8080/tasks/3
router.get('/tasks/:id', async (req, res) => {
    const task = await db.selectTask(req.params.id);
    res.json(task);
});

// lista todas as tarefas cadastradas no bd
// http://localhost:8080/tasks
router.get('/tasks', async (req, res) => {
    const task = await db.selectTasks();
    res.json(task);
});

/// adiciona uma tarefa 
//post http://localhost:8080/tasks/3 
//o objeto json vem junto ao POST, é passado como parametro da funcao insertTask  
// o retorno e o codigo HTTP 201(cadastrado com sucesso) 
router.post('/tasks', async (req, res) => {
    console.log(req.body);
    await db.insertTask(req.body);
    res.sendStatus(201);
});

// update - atualiza uma tarefa identificando o id
//patch http://localhost:8080/tasks/3 
/*
{
    "title": "caminhar",
    "status": "concluido",
    "description": "Caminhar 30 min todos os dias"
}
*/
router.patch('/tasks/:id', async (req, res) => {
    console.log(req.body);
    await db.updateTask(req.params.id, req.body);
    res.sendStatus(200);
});

/// excluir uma tarefa pelo id
//delete http://localhost:8080/tasks/3 
// o parametro id filtra a exclusao, o retorno e o codigo HTTP 204(sucesso sem retorno) 
router.delete('/tasks/:id', async (req, res) => {
    await db.deleteTask(req.params.id);
    res.sendStatus(204);
});

// exporta o modulo
module.exports = router;