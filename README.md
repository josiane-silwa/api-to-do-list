
Projeto de API CRUD para gerenciar lista de tarefas.
Construido com NodeJs e PostgreSql

Dependencias:
pg
express
express-validator
dotenv
nodemon

Para instalar e rodar o projeto:
Clonar o projeto 
Executar no teminal: 
npm install
Para instalar as depencias:  
npm pg express expr;ess-validator dotenv nodemon
Para rodar executar 
npm start 

End-points implementados:
consultas, consultas por id, adicionar, atualizar e deletar tarefas(tasks)

Foram realizados testes simples utilizando Postman como mostram as figuras.

Consulta todas as tarefas adicionadas
GET => http://localhost:8080/tasks

![testeApiToDoList-GET](https://github.com/josiane-silwa/api-to-do-list/assets/108165656/75eee6b5-a7b2-428a-bc38-eb3656c2657a)

Consulta tarefa adicionada por id
GET por id => http://localhost:8080/tasks/1
![testeApiToDoList-GET-id](https://github.com/josiane-silwa/api-to-do-list/assets/108165656/595114e8-a326-4e2b-9b14-805aded10d4b)


Adiciona uma tarefa passando os seguintes paramentros (formato body json):
POST => http://localhost:8080/tasks
{
  id: 6,
  title: 'Estante',
  status: 'pendente',
  description: 'realizar a montagem da nova estante'
}
![testeApiToDoList-POST](https://github.com/josiane-silwa/api-to-do-list/assets/108165656/7755fe79-4ff9-4384-97a7-8cab1ef7b752)
![testeApiToDoList-GET-pos-DELETE](https://github.com/josiane-silwa/api-to-do-list/assets/108165656/ee25a8b8-6b2c-4294-aaeb-915c49c52df4)


Altualiza uma tarefa adicionada passando os seguintes paramentros (formato body json):
PATCH => http://localhost:8080/tasks/6
{
  id: 6,
  title: 'Estante',
  status: 'concluido',
  description: 'realizar a montagem da nova estante'
}
![testeApiToDoList-UPDATE](https://github.com/josiane-silwa/api-to-do-list/assets/108165656/59646a0e-6761-42cb-a04c-85e7aae1b200)



Deleta uma tarefa passando como paramentro o id:
![testeApiToDoList-DELETE](https://github.com/josiane-silwa/api-to-do-list/assets/108165656/e38b4b7c-0d51-4274-b726-562550213696)

DELETE => http://localhost:8080/tasks/6
