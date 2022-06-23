/* ======= Link documentação

https://www.npmjs.com/package/correios-brasil

https://elo7.zendesk.com/hc/pt-br/articles/202218404-Limite-de-dimens%C3%B5es-e-peso-para-envio-via-Correios

*/

const { calcularPrecoPrazo } = require('correios-brasil');

let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '29046610',
    sCepDestino: '01459587',
    nVlPeso: '25',
    nCdFormato: '1', //Inteiro
    nVlComprimento: '20', //Decimal
    nVlAltura: '15', //Decimal
    nVlLargura: '25', //Decimal
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '0', //Decimal
    nVlValorDeclarado: '500.50', //Decimal
    sCdMaoPropria: 'N',
    sCdAvisoRecebimento: 'N'
  };

calcularPrecoPrazo(args).then(response => {
  console.log(response);
});