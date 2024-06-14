const express = require('express');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const swaggerDocument = require('./static/swagger.json');
const routes = require('./routes/routes'); 
const db = require('./db'); 

const app = express();
const PORT = process.env.PORT || 5000;
const uri_conexao = process.env.MONGODB_URI || 'mongodb://localhost:27017/ti-inventario';
const nome_db = 'ti-inventario';

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
app.use('/api', routes);

// Swagger setup
const SWAGGER_URL = '/swagger';
const API_URL = '/static/swagger.json';

app.use(
    SWAGGER_URL, 
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument, {
        swaggerOptions: {
            appName: "IT Inventory"
        }
    })
);

// Conexão com o MongoDB e inicialização do servidor
const { MongoClient } = require('mongodb');

MongoClient.connect(uri_conexao, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log('Conectado ao MongoDB');
        const db = client.db(nome_db);
        app.locals.db = db;

        // Inicia o servidor após a conexão com o banco de dados
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
        });
    })
    .catch(error => console.error(error));
