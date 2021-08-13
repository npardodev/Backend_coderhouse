import fs from 'fs';

const PATH_FILE_NAME = './productos.txt';

const genIntNumber = (MIN, MAX) => { return Math.floor((MIN + Math.random() * (MAX - MIN))) }

class Archivo {

    constructor(name) {
        this.filename = name;
        this.content = "";
    }

    async leer() {

        try {
            const result = await fs.promises.readFile(`${this.filename}`, `utf-8`);
            if (result !== '')
                this.content = JSON.parse(result);
            return result;

        } catch (error) {
            console.log(`Error en lectura de archivo: ${error}`);
            return [];
        }
    }

    async guardar(newContent) {

        try {
            const result = await fs.promises.writeFile(`${this.filename}`, newContent);
            console.log(result);

        } catch (error) {
            console.log(`Error en guardado de archivo:${this.filename}, ${error}`);
        }

    }

    async borrar() {

        try {
            const result = await fs.promises.unlink(`${this.filename}`);
            console.log(`Archivo ${this.filename} borrado con exito`);

        } catch (error) {
            console.log(`Error en borrado de archivo:${this.filename}, ${error}`);
        }

    }
}



const myFile = new Archivo(PATH_FILE_NAME);

const procesarArchivo = () => {
        myFile.leer().then(function() {
            const arr = myFile.content;
            const newId = arr.length + 1;
            const newItem = {
                title: `Archivo-${genIntNumber(1,100)}`,
                precio: `${genIntNumber(52,98)}`,
                thumbnail: `./urldeprueba-${genIntNumber(1,4)}`,
                id: `${newId}`
            };
            arr.push(newItem);
            myFile.guardar(JSON.stringify(arr));
            //console.log(JSON.stringify(arr));
        }).catch((error) => {
            console.log(`error leyendo archivo`);
            console.log(`Se creará el archivo vacio...`);
            myFile.guardar('');
        })


    }
    //const contenido = myFile.borrar()

procesarArchivo();