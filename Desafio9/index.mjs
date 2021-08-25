import express from 'express';
import path from 'path';

const PATH_LIST_ALL_PRODUCTS = '/listar';
const PATH_LIST_DETAIL_PRODUCT = '/listar/:id';
const PATH_LIST_SAVE_PRODUCT = '/guardar';

const PATH_PUT_PRODUCT = '/actualizar/:id';
const PATH_DELETE_PRODUCT = '/borrar/:id';

const ERROR_PRODUCT_NOT_EXIST = { error: 'Producto no encontrado ' };
const SUCCESS_PRODUCT_NOT_FOUND = { error: 'No hay productos cargados ' };
const ERROR_INVALID_DATA = { error: 'Datos ingresados inválidos ' };

const PORT = 8088;
const ROUTER_PRODUCTS_PATH = "/api/productos";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extened: true }));

const __dirname = path.resolve();
app.use(express.static(__dirname + '/public'));

const productsRouter = express.Router();
app.use(ROUTER_PRODUCTS_PATH, productsRouter);


class Products {
    constructor() {
        this.array = [];
    }

    add(product) {
        this.array.push(product);
    }

    list() {
        return JSON.stringify(this.array);
    }

    actualice() {

    }

    delete(id) {
        this.array = this.array.filter(product => product.id !== id)
    }
}

const myProducts = new Products();

const server = app.listen(PORT, () => {
    console.log(`sevidor corriendo en puerto: ${PORT}`);
}).on("error", error => console.log(`error en servidor: ${error}`))


productsRouter.get(PATH_LIST_ALL_PRODUCTS, (req, res) => {
    console.log('request GET recibido');
    const response = myProducts.array == 0 ? SUCCESS_PRODUCT_NOT_FOUND : `Lista de productos:{${ myProducts.list()}}`;
    res.json(response);
})

productsRouter.get(PATH_LIST_DETAIL_PRODUCT, (req, res) => {
    console.log('request GET recibido');
    const response = `Producto:{${ JSON.stringify(myProducts.array.find(element => element.id == idToFind))}}`;
    res.json(response);
})

productsRouter.post(PATH_LIST_SAVE_PRODUCT, (req, res) => {
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
        res.send(`Producto agregado`);

    } else {
        console.log("Campos ingresados vacios");
        res.send(ERROR_INVALID_DATA);
    }
});

app.put(PATH_PUT_PRODUCT, (req, res) => {

    console.log('request PUT recibido');
    // Que debe actualizar? 
    //recibo el id por params pero nose con que datos actualizo? Desde otro index?
    const message = req.params.id;

    if (message !== '') {
        console.log(message);
    } else {
        console.log("Campos ingresados vacios");
        res.send(ERROR_INVALID_DATA);
    }
})


app.delete(PATH_DELETE_PRODUCT, (req, res) => {

    const idToDelete = [req.params.id - 1];
    if (idToDelete != null && idToDelete != undefined && idToDelete != '') {

        myProducts.delete(idToDelete);
        res.send(`Producto borrado`);

    } else {
        console.log("Campos ingresado invalido");
        res.send(ERROR_INVALID_DATA);
    }

});