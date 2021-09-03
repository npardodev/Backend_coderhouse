import express from 'express';
import { Products } from './products.mjs'
import path from 'path';
const __dirname = path.resolve();

const app = express();
const PORT = 8085;

const PATH_LIST_ALL_PRODUCTS = '/api/productos/listar';
const PATH_LIST_DETAIL_PRODUCT = '/api/productos/listar/:id';
const PATH_LIST_SAVE_PRODUCT = '/api/productos/guardar';

const ERROR_PRODUCT_NOT_EXIST = { error: 'Producto no encontrado ' };
const SUCCESS_PRODUCT_NOT_FOUND = { error: 'No hay productos cargados ' };
const ERROR_INVALID_DATA = { error: 'Datos ingresados inválidos ' };

let idToFind = 0;

let productos = [];
const myProducts = new Products(productos);


app.use(express.json());
app.use(express.urlencoded({ extened: true }));
app.use(express.static(__dirname + '/public'));


app.get(PATH_LIST_ALL_PRODUCTS, (req, res) => {
    console.log('request GET recibido');
    res.send(myProducts.list() == 0 ? SUCCESS_PRODUCT_NOT_FOUND : myProducts.list());
})


app.get(PATH_LIST_DETAIL_PRODUCT, (req, res) => {
    console.log('request GET recibido');
    res.send(`Producto:{${ JSON.stringify(productos.find(element => element.id == idToFind))}}`);
})


app.post(PATH_LIST_SAVE_PRODUCT, (req, res) => {

    console.log('request POST recibido');
    const mssge = req.body;
    if (mssge !== '') {

        const { msgTitle, msgPrice, msgThum } = req.body;

        const newProduct = {
            title: `${msgTitle}`,
            price: `${msgPrice}`,
            thumbnail: `${msgThum}`,
        };

        myProducts.add(newProduct);
        console.log(myProducts.productos);
        res.json(`Producto incorporado`);

    } else {
        console.log("Campos ingresados vacios");
        res.send(ERROR_INVALID_DATA);
    }
});

const server = app.listen(PORT, () => {
    console.log(`sevidor corriendo en puerto: ${PORT}`);
}).on("error", error => console.log(`error en servidor: ${error}`))