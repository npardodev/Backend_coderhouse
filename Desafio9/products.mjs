export class Products {
    constructor(productos) {
        this.productos = productos;
    }

    add(product) {
        const id = this.productos.length + 1;
        const newProduct = {...product, id: id };
        this.productos.push(newProduct);
    }

    list() {
        return JSON.stringify(this.productos);
    }

    actualice(newProduct, id) {

        this.productos = this.productos.map(product =>
            product.id == id ? {...product,
                title: `${newProduct.title}`,
                price: newProduct.price,
                thumbnail: newProduct.thumbnail,
            } : product
        );

    }

    delete(id) {
        this.productos = this.productos.filter(product => product.id != id);
    }
}