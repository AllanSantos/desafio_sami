import mongoose from 'mongoose';

const BeneficiarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    unique: true,
    required: true,
  },
  rg: {
    type: String,
    required: true, 
  },
  data_nascimento: {
    type: Date,
    required: true, 
  },
  plano: {
    type: String,
  },
  dependentes: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
}
);

const Beneficiario = mongoose.model('Beneficiario', BeneficiarioSchema);

module.exports = Beneficiario;