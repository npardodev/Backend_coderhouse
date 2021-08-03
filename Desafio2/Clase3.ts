
const operacion = async (value1: Number, value2: Number, operationType: String) =>{
    
    const MODULE_SUMA = 'Suma'
    const MODULE_RESTA = 'Resta'

    if (operationType !== MODULE_RESTA && operationType !== MODULE_SUMA){
        console.log(`Error en el tipo de Operacion`);
        return null;
    }
    const moduleName =`./${operationType}.js`;
    const module = await import( moduleName);
    let operation;

    if (operationType == MODULE_SUMA )
    {
        operation = new module.Suma(value1,value2);
    }
    else if (operationType == MODULE_RESTA )
    {
        operation = new module.Resta(value1,value2);
    }

    const myPromise = new Promise(
        function(resolve, reject) {
          setTimeout(function() {
            resolve(operation.resultado());
          }, 100);
        }
    );

    return myPromise;
}



const operaciones = async () => {

    const oper1 = await operacion(23, 14, 'Suma');
    const oper2 = await operacion(55, 8, 'Resta');
    const oper3 = await operacion(0, -100, 'Resta');
    const oper4 = await operacion(1, 24567, 'Suma');
    
    console.log(oper1);
    console.log(oper2);
    console.log(oper3);
    console.log(oper4);
}

operaciones();