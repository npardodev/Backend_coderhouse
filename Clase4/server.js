const http = require('http');
const PORT = 3003;

const getMessage = () => {

    const dateHour = new Date().getHours();

    if (dateHour < 12 && dateHour > 6)
        return mensaje = "Buen diaa";
    else if (dateHour > 19 && dateHour > 13) {
        return mensaje = "Buenas tardes";
    } else {
        return mensaje = "Buenas noches";
    }
}

const server = http.createServer((request, respuesta) => {
    respuesta.end(getMessage());
})

server.listen(PORT, () => {
    console.log(`tu server esta escuchando en el puerto:${PORT} `);
})