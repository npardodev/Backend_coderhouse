
let moment = import("moment"); 



const Mifecha = '19950509'
const format = 'MM/DD/YY'

const resultadoAños = moment(Mifecha, ).fromNow(); 

const fechaActual = moment(); 
const resultadoSegundos  = fechaActual.diff(Mifecha, 'ss') 



console.log(resultadoAños);
console.log(resultadoSegundos);
