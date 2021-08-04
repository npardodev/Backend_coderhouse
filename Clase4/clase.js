 /* 
                          const MIN = 1;
                          const MAX = 20;
                          const LEN_ARRAY = 1000;

                          const generate() => {
                                  Math.floor((MIN + Math.random() * (MAX - min))
                                  }
                                  const getOccurrence(array, value) {
                                      var count = 0;
                                      array.forEach((v) => (v === value && count++));
                                      return count;
                                  }

                                  let arrayOfNumbers = [];

                                  for (let i = 0; i < LEN_ARRAY; i++) {
                                      arrayOfNumbers.push(generate());
                                  }

                                  if (objetct[number] === undefined) {
                                      object[number] = 1;
                                      continue;
                                  }

                    --------------------------- */

 let productos = [
     { id: 1, nombre: 'Nicolas', precio: 10.12 },
     { id: 2, nombre: 'Julieta', precio: 40 },
     { id: 3, nombre: 'Pedro', precio: 66 },
     { id: 4, nombre: 'Robert', precio: 4.51 },
     { id: 5, nombre: 'Maria', precio: 9 },
 ];

 let str1 = "";

 productos.forEach((element) => {
     str1 = (str1.concat(',', `${(element.nombre)}`));
 })

 console.log(str1);
 let menorPrecio = productos[0].precio;
 let mayorPrecio = productos[0].precio;

 menorPrecio = productos.filter(element => element.precio < menorPrecio);
 mayorPrecio = productos.filter(element => element.precio > mayorPrecio);