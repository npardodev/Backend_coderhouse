const { Observable, fromEvent} = rxjs;
const {  map, pipe} = rxjs.operators;

const INTERVAL_TIME = 3000;

const input = document.querySelector('#inputText');
const output = document.querySelector('#outputText');

const clearOutput = (output) => {
    output.innerHTML = "";
}

const disableInput = (input) => {
    input.disabled = true;
}

const showOutput = (text) => {
    output.innerHTML = text;
}

const mirrorWords = (str) => {
    return str.split("").reverse().join("");
}


const observer = {
    next: (e) => showOutput(e),
    complete: () =>{ 
        console.log("Finalizado subscripcion en forma normal");
        clearOutput(output);
        disableInput(input);
        subscription.unsubscribe();
    },
    
    error: () => {
        console.log("Finalizado subscripcion debido a un error");
        clearOutput(output);
        disableInput(input);
        subscription.unsubscribe();
    },
}


const inputText = fromEvent(input, 'input');

const filterInput = inputText.pipe(
    map((e) => {

        let str = e.target.value;

        if (str.includes("error"))
        {
            observer.error();
        }

        if (str.includes("complete"))
        {
            observer.complete();
        }

        str = mirrorWords(str);
        return str;
    } 
    ));



let subscription = filterInput.subscribe(observer);

var timeoutId = setTimeout(() => {
    clearOutput(output);
    disableInput(input);
    console.log("Subscripcion Finalizada debido al tiempo");
    subscription.unsubscribe();
}, INTERVAL_TIME)

