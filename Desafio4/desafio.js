const { Observable, fromEvent, map, pipe /*pipe*/ } = rxjs;

const INTERVAL_TIME = 3000;

const input = document.querySelector('#inputText');
const output = document.querySelector('#outputText');

const clearOutput = (output) => {
    output.value = "";
}

const showOutput = (text) => {
    output.innerHTML = text;
}

const mirrorWords = (str) => {
    return str.split("").reverse().join("");
}

/*
input.addEventListener('input', (event) => {
    event.preventDefault();
    clearOutput(output);
    let result = mirrorWords(event.target.value);
    showOutput(result);
});
*/


function miFuncion(str) {
    let result = mirrorWords(str);
    showOutput(result);
}

const observer = {
    next: (str) => console.log(str),
    complete: () => console.log("Finalizado subscripcion en forma normal"),
    error: () => console.log("Finalizado subscripcion debido a un error"),
}

const inputText = fromEvent(input, 'input')
let subscription = inputText.pipe(map(event => (event.data))).subscribe(observer);

var timeoutId = setTimeout(() => {
    clearOutput(output);
    console.log("Subscripcion Finalizada debido al tiempo");
    subscription.unsubscribe();
}, INTERVAL_TIME)

/*
const observable = miFuncion(10);
let subscription = observable.subscribe(observer);


const observer = {
    next: (str) => console.log(str),
    complete: () => console.log("Finalizado subscripcion en forma normal"),
    error: () => console.log("Finalizado subscripcion debido a un error"),
}

const observable = miFuncion(10);
let subscription = observable.subscribe(observer);


var timeoutId = setTimeout(() => {
    subscription.unsubscribe();
}, INTERVAL_TIME)
*/
//const observable = interval(INTERVAL_TIME);
//   clearTimeout(timeoutId); // "de-registramos" el callback






/*

setTimeout(() => {
    subscription.unsubscribe();
}, INTERVAL_TIME);

obersver.complete()
    new Observable(subscriber =>  {

        console.log("comenzó la suscripción");

    })


    if (text === 'complete') {
        console.log("Finalizado subscripcion en forma normal");
    }

    if (text === 'error') {
        console.log("Finalizado subscripcion debido a un error");
    }

    const INPUT_ELEMENT_ID = 'name';

    const setEnableInputElement(id, state) => {
        document.getElementById(id).disabled = state;
    }

    setEnableInputElement(INPUT_ELEMENT_ID, true);


    */