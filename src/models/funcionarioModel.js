const mongoose = require('mongoose');

const AtivoSchema = new mongoose.Schema({
    notebook: { type: String, default: "" },
    monitor1: { type: String, default: "" },
    monitor2: { type: String, default: "" },
    teclado: { type: String, default: "" },
    mouse: { type: String, default: "" },
    nobreak: { type: String, default: "" },
    desktop: { type: String, default: "" },
    headset: { type: String, default: "" },
    celular: { type: String, default: "" },
    acessorios: { type: String, default: "" }
});

const FuncionarioSchema = new mongoose.Schema({
    nome: String,
    cpf: { type: String, unique: true },
    ativos: AtivoSchema
});

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema);

module.exports = Funcionario;
