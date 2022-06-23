const { consultarCep } = require('correios-brasil');

// Cep pode ser String ou Number
const cep = '29167101';

consultarCep(cep).then(response => {
  console.log(response);
});