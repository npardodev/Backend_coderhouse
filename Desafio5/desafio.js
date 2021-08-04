/*
Consigna: Desarrollar un servidor en node.js que con cada requerimiento devuelva como resultado un objeto con las siguientes características:

>>Aspectos a incluir en el entregable:
1) Serializar el objeto (con JSON.stringify()) antes de enviarlo al frontend
2) El servidor debe estar creado en una cuenta no anónima para que su código sea persistente luego de los 5 días de creado.

{
    id: (número aleatorio entre 1 y 10),
    title: "Producto " + (número aleatorio entre 1 y 10),
    price: (número aleatorio entre 0.00 y 9999.99),
    thumbnail: "Foto " + (número aleatorio entre 1 y 10)
}
*/

const http = require('http');
const PORT = 3006;

const genIntNumber = (MIN, MAX) => { return Math.floor((MIN + Math.random() * (MAX - MIN))) }
const genFloatNumber = (MIN, MAX) => { return ((MIN + Math.random() * (MAX - MIN))).toFixed(2) }

const createObject = () => {

    return {
        id: genIntNumber(1, 10),
        title: `Producto${genIntNumber(1,10)}`,
        price: genFloatNumber(0.00, 9999.99),
        thumbnail: `Foto${genIntNumber(1,10)}`,
    }
}

const server = http.createServer((request, response) => {
    response.end(JSON.stringify(createObject()));
})

server.listen(PORT, () => {
    console.log(`Server escuchando en el puerto:${PORT} `);
})