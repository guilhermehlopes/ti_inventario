const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');
const ativoController = require('../controllers/ativoController');

// Rotas de Funcionários
router.post('/funcionario', funcionarioController.inserirFuncionario);
router.delete('/funcionario/:cpf', funcionarioController.excluirFuncionario);
router.get('/funcionarios', funcionarioController.listarFuncionarios);
router.get('/funcionario/:cpf/inventario', funcionarioController.consultarInventario);
router.put('/funcionario/:cpf', funcionarioController.atualizarNome);

// Rotas de Ativos
router.put('/funcionario/:cpf/ativo/notebook', (req, res) => ativoController.atualizarAtivo(req, res, 'notebook'));
router.delete('/funcionario/:cpf/ativo/notebook', (req, res) => ativoController.limparAtivo(req, res, 'notebook'));

router.put('/funcionario/:cpf/ativo/monitor1', (req, res) => ativoController.atualizarAtivo(req, res, 'monitor1'));
router.delete('/funcionario/:cpf/ativo/monitor1', (req, res) => ativoController.limparAtivo(req, res, 'monitor1'));

router.put('/funcionario/:cpf/ativo/monitor2', (req, res) => ativoController.atualizarAtivo(req, res, 'monitor2'));
router.delete('/funcionario/:cpf/ativo/monitor2', (req, res) => ativoController.limparAtivo(req, res, 'monitor2'));

router.put('/funcionario/:cpf/ativo/teclado', (req, res) => ativoController.atualizarAtivo(req, res, 'teclado'));
router.delete('/funcionario/:cpf/ativo/teclado', (req, res) => ativoController.limparAtivo(req, res, 'teclado'));

router.put('/funcionario/:cpf/ativo/mouse', (req, res) => ativoController.atualizarAtivo(req, res, 'mouse'));
router.delete('/funcionario/:cpf/ativo/mouse', (req, res) => ativoController.limparAtivo(req, res, 'mouse'));

router.put('/funcionario/:cpf/ativo/nobreak', (req, res) => ativoController.atualizarAtivo(req, res, 'nobreak'));
router.delete('/funcionario/:cpf/ativo/nobreak', (req, res) => ativoController.limparAtivo(req, res, 'nobreak'));

router.put('/funcionario/:cpf/ativo/desktop', (req, res) => ativoController.atualizarAtivo(req, res, 'desktop'));
router.delete('/funcionario/:cpf/ativo/desktop', (req, res) => ativoController.limparAtivo(req, res, 'desktop'));

router.put('/funcionario/:cpf/ativo/headset', (req, res) => ativoController.atualizarAtivo(req, res, 'headset'));
router.delete('/funcionario/:cpf/ativo/headset', (req, res) => ativoController.limparAtivo(req, res, 'headset'));

router.put('/funcionario/:cpf/ativo/celular', (req, res) => ativoController.atualizarAtivo(req, res, 'celular'));
router.delete('/funcionario/:cpf/ativo/celular', (req, res) => ativoController.limparAtivo(req, res, 'celular'));

router.put('/funcionario/:cpf/ativo/acessorios', (req, res) => ativoController.atualizarAtivo(req, res, 'acessorios'));
router.delete('/funcionario/:cpf/ativo/acessorios', (req, res) => ativoController.limparAtivo(req, res, 'acessorios'));

module.exports = router;
