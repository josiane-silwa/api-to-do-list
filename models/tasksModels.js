///////  connection
/// a conexao é feita e "guardada" em uma variavel global para ser chamada quando necessario  e depois é liberada
async function connect(){
    if (global.connection)
        return global.connection.connect();

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

// testando a conexao
const task = await pool.connect();
console.log("Criou pool de conexoes no PostgreSQL!");

const res = await task.query('SELECT NOW()');
console.log(res.rows[0]);
task.release();  // libera a conexao

//salvando para usar sempre o mesmo pool de conexao
global.connection = pool;
return pool.connect(); 
};

connect();
///////  connection

///////  tasksModels
/// listando a tabela tasks - todas as tarefas cadastradas
async function selectTasks(){
    const task = await connect();
    const res = await task.query('SELECT * FROM tasks');
    return res.rows;
};

/// listando tarefas pelo id
// o parametro id sera validado pelo driver e inserido no lugar do $1
async function selectTask(id){
    const task = await connect();
    const res = await task.query('SELECT * FROM tasks WHERE ID=$1', [id]);
    return res.rows;
};

/// adicionar tarefas   /// tasks vindo da tabela tasks
async function insertTask(tasks){
    const task = await connect();
    const sql = "INSERT INTO tasks(title,status,description) VALUES ($1,$2,$3)";
    const values = [ tasks.title, tasks.status, tasks.description]; 
    await task.query(sql, values);
} 

/// atualizar uma tarefa    //// tasks vindo da tabela tasks
async function updateTask(id, tasks){
    const task = await connect();
    const sql = "UPDATE tasks SET title=$1, status=$2, description=$3 WHERE id=$4";
    const values = [tasks.title, tasks.status, tasks.description, id]; 
    await task.query(sql, values);
} 

/// excluir uma tarefa passando o id
async function deleteTask(id){
    const task = await connect();
    //return await client.query('DELETE FROM clientes WHERE id=$1;', [id]);
    const sql = "DELETE FROM tasks WHERE id=$1";
    const values = [id]; 
    await task.query(sql, values);
};


/// exporta o modulo
module.exports = { 
    selectTasks, 
    selectTask, 
    insertTask, 
    updateTask, 
    deleteTask 
};
