import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

//GET: Buscar ou listar uma informacao
//POST: Criar alguma nova informacao
//PUT: Atualizar uma informacao existente
//DELETE: Deletar uma informacao existente

//Corpo (Request Body): Dados para criacao ou atualizacao de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginacao, filtros, ordenacao

app.get('/', (req, res) => {
    return res.json({message: 'Hello World'})
})

app.listen(3333)