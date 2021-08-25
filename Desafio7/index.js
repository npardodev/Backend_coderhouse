
import express from 'express';
const app = express();
const PORT = 8080;

const PATH_ITEMS ='/items';
const PATH_ITEMS_RANDOM ='/item-random';
const PATH_VIEWS ='/visitas';

let viewsCount_pathItems = 0;
let viewsCount_pathItemRandom = 0;
let viewsCount_pathViews = 0;

const productos = [
  {
    "title":"escuadra",
    "price":12345,
    "thumbnail":"http/....../",
    "id": 1
  },
  {
    "title":"Calculadora",
    "price":456,
    "thumbnail":"http/....../",
    "id": 2
  },
  {
    "title":"Globo terraqueo",
    "price":245.21,
    "thumbnail":"http/....../",
    "id": 3,
  },
  {
    "title":"Papa",
    "price":212,
    "thumbnail":"http/....../",
    "id": 4,
  }
];


const getRandomItemFromArray = (array) => {
  const min = 1;
  const max = array.length;

  const randomIndex = Math.floor((min + Math.random() * (max - min)));
  
  return array[randomIndex];
}

const paths = [
  {
    rute: PATH_ITEMS,
    action:
    counter: 
    response:`{items:[${productos}],cantidad(${productos.length})}`,
  },
  {
    rute: PATH_ITEMS_RANDOM,
    action:
    counter: 
    response:`{items:[${getRandomItemFromArray(productos)}]}`,
  },
  {
    rute: PATH_VIEWS,
    action:
    counter: 
    response:`<p>La cantidad de visitas es ${viewsCount}</p>`,
  },
]


const server = app.listen(PORT, ()=>{
    console.log(`sevidor corriendo en puerto: ${PORT}`);
}).on("error", error=> console.log(`error en servidor: ${error}`))



for (let i=0,len=paths.length; i < len; i++){

  app.get(paths[i].rute, (req, res) =>{

    console.log('request recibido');

    viewsCount++;

    res.send(paths[i].response);

  })

}