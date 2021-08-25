import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = 8092;

const server = app.listen(PORT, () => {
    console.log(`sevidor corriendo en puerto: ${PORT}`);
}).on("error", error => console.log(`error en servidor: ${error}`))


server.on("error", (error) => {
    console.error(error);
})


const routerMascotas = express.Router();
const routerPersonas = express.Router();

app.use("/mascotas", routerMascotas);
app.use("/personas", routerPersonas);

app.use(express.static(__dirname + "/carpeta1"));
app.use(express.static(__dirname + "/carpeta2"));


//post request
routerMascotas.get('/listar', (request, response) => {
    response.send("get recibido");
})

routerMascotas.post('/guardar', (request, response) => {
    response.send("Post recibido");
})

routerPersonas.get('/listar', (request, response) => {
    response.send("get recibido");
})

routerPersonas.post('/guardar', (request, response) => {
    const { nombre, raza, edad } = request.body;
    response.send("Post recibido");
    mascotas.push(JSON.parse(nombre, raza, edad));
})