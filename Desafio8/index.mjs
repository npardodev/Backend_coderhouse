import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const PORT = 8080;

const PATH_LIST_ALL_PRODUCTS = '/api/productos/listar';
const PATH_LIST_DETAIL_PRODUCT = '/api/productos/listar/:id';
const PATH_LIST_SAVE_PRODUCT = '/api/productos/guardar';

const ERROR_PRODUCT_NOT_EXIST = { error: 'Producto no encontrado ' };
const SUCCESS_PRODUCT_NOT_FOUND = { error: 'No hay productos cargados ' };
const ERROR_INVALID_DATA = { error: 'Datos ingresados inválidos ' };

const productos = [];
let idToFind = 0;

const postPaths = [{
    rute: PATH_LIST_SAVE_PRODUCT,
    response: `Producto incorporado`,
}]

const getPaths = [{
        rute: PATH_LIST_ALL_PRODUCTS,
        response: productos.length == 0 ? SUCCESS_PRODUCT_NOT_FOUND : `Lista de productos:{${ JSON.stringify(productos)}}`,
    },
    {
        rute: PATH_LIST_DETAIL_PRODUCT,
        response: `Producto:{${ JSON.stringify(productos.find(element => element.id == idToFind))}}`,
    },
]


app.use(express.json());
app.use(express.urlencoded({ extened: true }));
app.use(express.static(__dirname + '/public'));

for (let i = 0, len = getPaths.length; i < len; i++) {

    app.get(getPaths[i].rute, (req, res) => {
        console.log('request GET recibido');
        res.json(getPaths[i].response);
    })
}

app.post(postPaths[0].rute, (req, res) => {

    console.log('request POST recibido');
    const message = req.body;

    if (message !== '') {

        const newProduct = {
            title: `${message.title}`,
            price: `${message.price}`,
            thumbnail: `${message.img}`,
        };

        productos.push(newProduct);
        res.json(postPaths[0].response);

    } else {
        console.log("Campos ingresados vacios");
        res.send(ERROR_INVALID_DATA);
    }
});

const server = app.listen(PORT, () => {
    console.log(`sevidor corriendo en puerto: ${PORT}`);
}).on("error", error => console.log(`error en servidor: ${error}`))