/* const { MongoClient } = require('mongodb');

// URL de conexão com o seu banco de dados MongoDB
const url = 'mongodb://localhost:27017/ti-inventario';

// Nome do banco de dados que você vai usar
const dbName = 'ti-inventario'; 

let db;

async function connectToDatabase() {
    try {
        // Conectar ao MongoDB
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        console.log('Conectado ao MongoDB!');

        // Selecionar o banco de dados
        db = client.db(dbName);
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        throw err;
    }
}

function getDb() {
    if (!db) {
        throw new Error('Chame connectToDatabase primeiro!');
    }
    return db;
}

module.exports = {
    connectToDatabase,
    getDb
};

*/

const mongoose = require('mongoose');

const conn_uri = "mongodb://localhost:27017/ti-inventario";

mongoose.connect(conn_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});

module.exports = db;

