import fs from "fs";


class Archivo {
    constructor(name) {
        this.name = name;
        this.products = [];
    }
    async leer() {
        try {
            // (this.name, "utf-8"), el primer param es un string con el archivo que queremos leer. El segundo param indica el formato de codificacion de caracteres con que fue escrito el datos que estamos leyendo.
            const data = JSON.parse(await fs.promises.readFile(this.name, "utf-8"));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    async guardar(title, price, thumbnail) {
        const product = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            id: this.products.length + 1,
        };
        this.products.push(product);
        try {
            // fs.promises.writeFile(ruta, datos)
            await fs.promises.writeFile(
                this.name,
                JSON.stringify(this.products, null) + "\n"
            );
        } catch (error) {
            console.log(`no se pudo escribir, ${error}`);
        }
    }


    async borrar() {
        try {
            fs.promises.unlink(this.name);
        } catch (error) {
            console.log(`no se pudo borrar, ${error}`);
        }
    }
}


const file = new Archivo(`./productos.txt`);
await file.borrar();
await file.guardar(
    `Escuadra`,
    123.45,
    `https://http2.mlstatic.com/D_NQ_NP_638442-MCO43510287419_092020-O.jpg`
);
await file.guardar(
    `Calculadora`,
    234.56,
    `https://pardohogar.vtexassets.com/arquivos/ids/159598/CLACU-01.jpg?v=636863572585170000`
);
await file.guardar(
    `Globo Teraqueo`,
    345.67,
    `https://http2.mlstatic.com/D_NQ_NP_926873-MLA43786618401_102020-O.jpg`
);
await file.leer()


El desafío queda aprobado!



    Ante cualquier duda, quedo a disposición.