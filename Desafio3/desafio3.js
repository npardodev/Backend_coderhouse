const Text1 = `Love of my life, you've hurt me
You've broken my heart, and now you leave me
Love of my life, can't you see?
Bring it back, bring it back
Don't take it away from me
Because you don't know
What it means to me`;

const Text2 = `Love of my life, don't leave me
You've taken my love, and now desert me
Love of my life, can't you see?
Bring it back, bring it back
Don't take it away from me
Because you don't know
What it means to me`;

const Text3 = `You will remember
When this is blown over
And everything's all by the way
When I grow older
I will be there at your side to remind you
How I still love you (I still love you)
`;


const callbackFunction = () => {
    console.log("Hola.Soy una funcion de callback. Terminé el texto");
}

async function printText(text, timeout, separator) {
    let i = 0;

    return new Promise(resolve => {
        const interval = setInterval(() => {
            const arrayWords = text.split(separator);
            const arrayLength = arrayWords.length;
            console.log(arrayWords[i]);
            i += 1;

            if (i >= arrayWords.length) {
                clearInterval(interval);
                resolve(`CANTIDAD DE PALABRAS ${arrayLength}`);
            }
        }, timeout);

    })
}

const myFunction = (text, timeout = 1000, separator = ' ', callback) => {

    const ERROR_OPERATION = `Error en la operacion`;
    const FINISH_OPERATION = `Proceso Completo`;

    printText(text, timeout, separator)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(`${ERROR_OPERATION}-err`);
        })
        .finally(() => {
            console.log(`${FINISH_OPERATION}`);
        })
}


const app = () => {

    myFunction(Text1, 100, ' ', callbackFunction);
    myFunction(Text2, callbackFunction);
    myFunction(Text3, 500, ' ', callbackFunction);

}

app();