import * as Yup from 'yup';
import { cpf as CPF } from 'cpf-cnpj-validator';
import Beneficiario from '../models/Beneficiario';

class BeneficiarioController {
  async index(req, res) {

    const {cpf} = req.params;

    if(!CPF.isValid(cpf)){
      return res.status(401).json({ messagem: 'CPF informado não é válido'});
    }

    const beneficiaio = await Beneficiario.findOne({cpf}, {_id: 1, nome: 1, cpf: 1, rg: 1, data_nascimento: 1, plano: 1, dependentes: 1});

    if(!beneficiaio) {
      return res.status(401).json({ messagem: 'Beneficiario não cadastrado'});
    }

    return res.json(beneficiaio);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required(),
      rg: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      plano: Yup.string().required(),
      dependentes: Yup.number().integer()
    });
    
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({mensagem: 'Validação Falhou'});
    }

    if(!CPF.isValid(req.body.cpf)){
      return res.status(401).json({ messagem: 'CPF informado não é válido'});
    }
    
    const userExists = await Beneficiario.findOne({cpf: req.body.cpf});

    if(userExists) {
      return res.status(400).json({ messagem: 'Beneficiario já existente com esse CPF.'});
    }

    const {id, nome, cpf, rg, data_nascimento, plano, dependentes} = await Beneficiario.create(req.body);

    return res.json({id, nome, cpf, rg, data_nascimento, plano, dependentes});
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cpf: Yup.string().required()
    });
    
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({mensagem: 'Validação Falhou'});
    }

    const {cpfParams} = req.params;

    if(!CPF.isValid(cpfParams)){
      return res.status(401).json({ mensagem: 'CPF informado não é válido'});
    }
    
    const userExists = await Beneficiario.findOne({cpf: req.body.cpf});

    if(!userExists) {
      return res.status(401).json({ mensagem: 'Beneficiario não cadastrado com esse CPF'});
    }

    await Beneficiario.updateOne(req.body);

    const {id , nome, cpf, rg, data_nascimento, plano, dependentes} = await Beneficiario.findOne({cpf: req.body.cpf});

    return res.json({id, nome, cpf, rg, data_nascimento, plano, dependentes});
  }

  async delete(req, res) {
    const {cpf} = req.params;

    if(!CPF.isValid(cpf)){
      return res.status(401).json({ mensagem: 'CPF informado não é válido'});
    }

    const userExists = await Beneficiario.findOne({cpf});

    if(!userExists) {
      return res.status(401).json({ mensagem: 'Beneficiario não cadastrado com esse CPF'});
    }

    await Beneficiario.findOneAndDelete({cpf});

    return res.json({mensagem: `Beneficiario ${cpf} deletado do sistema`});
  }
}

export default new BeneficiarioController();