const Funcionario = require('../models/funcionarioModel');

exports.atualizarAtivo = async (req, res, tipoAtivo) => {
    const { cpf } = req.params;
    const { infoAtivo } = req.body;

    const update = {};
    update[`ativos.${tipoAtivo}`] = infoAtivo;

    try {
        const funcionario = await Funcionario.findOneAndUpdate({ cpf }, { $set: update }, { new: true });
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar o ativo' });
    }
};

exports.limparAtivo = async (req, res, tipoAtivo) => {
    const { cpf } = req.params;

    const update = {};
    update[`ativos.${tipoAtivo}`] = "";

    try {
        const funcionario = await Funcionario.findOneAndUpdate({ cpf }, { $set: update }, { new: true });
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao limpar o ativo' });
    }
};
