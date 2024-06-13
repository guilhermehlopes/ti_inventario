// Importar quaisquer dependências necessárias
const express = require('express');

// Simular um banco de dados para fins de exemplo
const funcionarios = [];

// Função para inserir um novo funcionário
exports.inserirFuncionario = (req, res) => {
    const { cpf, nome, cargo } = req.body;

    // Verificar se o CPF já está cadastrado
    const existeFuncionario = funcionarios.find(func => func.cpf === cpf);
    if (existeFuncionario) {
        return res.status(400).send('CPF já cadastrado');
    }

    // Criar novo funcionário
    const novoFuncionario = {
        cpf,
        nome,
        cargo
    };

    // Adicionar ao array de funcionários
    funcionarios.push(novoFuncionario);
    
    // Retornar resposta com status 201 (Created) e mensagem de sucesso
    return res.status(201).send('Funcionário inserido com sucesso');
};

// Função para excluir um funcionário pelo CPF
exports.excluirFuncionario = (req, res) => {
    const cpf = req.params.cpf;
    const index = funcionarios.findIndex(func => func.cpf === cpf);
    if (index !== -1) {
        funcionarios.splice(index, 1);
        res.send('Funcionário excluído com sucesso');
    } else {
        res.status(404).send('Funcionário não encontrado');
    }
};

// Função para listar todos os funcionários
exports.listarFuncionarios = (req, res) => {
    res.json(funcionarios);
};

// Função para consultar o inventário de um funcionário pelo CPF
exports.consultarInventario = (req, res) => {
    const cpf = req.params.cpf;
    const funcionario = funcionarios.find(func => func.cpf === cpf);
    if (funcionario) {
        res.json(funcionario.inventario || {});
    } else {
        res.status(404).send('Funcionário não encontrado');
    }
};

// Função para atualizar o nome de um funcionário pelo CPF
exports.atualizarNome = (req, res) => {
    const cpf = req.params.cpf;
    const novoNome = req.body.nome;
    const funcionario = funcionarios.find(func => func.cpf === cpf);
    if (funcionario) {
        funcionario.nome = novoNome;
        res.send('Nome do funcionário atualizado com sucesso');
    } else {
        res.status(404).send('Funcionário não encontrado');
    }
};
