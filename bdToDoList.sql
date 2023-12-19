CREATE TABLE tasks(
	id SERIAL CONSTRAINT pk_id_tasks PRIMARY KEY,
title varchar(150) NOT NULL,
status varchar(45) NOT NULL,
description varchar(150) NOT NULL
);

INSERT INTO tasks(id,title,status,description)
VALUES 
(1,'Leitura','pendete','Ler minimo 10 paginas por dia'),
(2,'Caminhada','pendete','Caminhar 30 min todos os dias'),
(3,'Reuniao','concluido','Reuniao de trabalho ás 10:00hr');