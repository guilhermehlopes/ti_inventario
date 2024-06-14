/*const express = require('express');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const routes = require('./routes/routes');
const db = require('./db');
const cors = require('cors');
require('dotenv').config();

const swaggerPath = path.resolve(__dirname, './static/swagger.json');
console.log('Swagger Path:', swaggerPath);
const swaggerDocument = require(swaggerPath);

const app = express();
const porta = process.env.PORTA || 3001;
const uri_conexao = process.env.MONGODB_URI || 'mongodb://localhost:27017/ti-inventario';
const nome_db = 'ti-inventario';

app.use(cors());
app.use(express.json());

const { MongoClient } = require('mongodb');

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

MongoClient.connect(uri_conexao, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        console.log('Conectado ao MongoDB');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar no MongoDB', error);
    });


*/