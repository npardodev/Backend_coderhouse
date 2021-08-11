
let moment = require("moment"); 

const fechaHoy = new Date();

const Mifecha = '19950509'

const resultadoAños = moment(Mifecha, "YYYYMMDD").fromNow(); 

const fechaActual = moment(); 
const resultadoSegundos  = fechaActual.diff(Mifecha, 'ss') 



console.log(resultadoAños);
console.log(resultadoSegundos);
