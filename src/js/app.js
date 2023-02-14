// Selectores

const numeroVisible = document.querySelector('#numeroVisible');
const numeroMemoria = document.querySelector('#numeroMemoria');

const potencia = document.querySelector('#potencia');
const raiz = document.querySelector('#raiz');
const porcentaje = document.querySelector('#porcentaje');
const reset = document.querySelector('#reset');

const numeroSiete = document.querySelector('#numeroSiete');
const numeroOcho = document.querySelector('#numeroOcho');
const numeroNueve = document.querySelector('#numeroNueve');
const dividir = document.querySelector('#dividir');

const numeroCuatro = document.querySelector('#numeroCuatro');
const numeroCinco = document.querySelector('#numeroCinco');
const numeroSeis = document.querySelector('#numeroSeis');
const multiplicar = document.querySelector('#multiplicar');

const numeroUno = document.querySelector('#numeroUno');
const numeroDos = document.querySelector('#numeroDos');
const numeroTres = document.querySelector('#numeroTres');
const restar = document.querySelector('#restar');

const coma = document.querySelector('#coma');
const numeroCero = document.querySelector('#numeroCero');
const enter = document.querySelector('#enter');
const sumar = document.querySelector('#sumar');

const borrarPantalla = document.querySelector('#borrarPantalla');
const memoriaUno = document.querySelector('#memUno');
const memoriaDos = document.querySelector('#memDos');
const cambioSigno = document.querySelector('#cambioSigno');

// ACUS

let flagIgual = 0;
let flagNumero = 0;
let almacenarNumeroFlag = 0;
let comaFlag = 0;

// Variables
let numeroIngresado = [];
let numeroString = '';

let primerNumero = 0;
let segundoNumero = 0;

let operacion = [];
let flagDobleOperador = 0;

let potencia2 = 0;
let guardarMemoriaUno = 0;
let guardarMemoriaDos = 0;

//inicializar operacion
iniciarOperador();




// Listeners

// Numeros
numeroCero.addEventListener('click', function () {
    armarNumero('0');
    numeroMemoria.textContent = numeroMemoria.textContent + '0';
});
numeroUno.addEventListener('click', function () {
    armarNumero('1');
    numeroMemoria.textContent = numeroMemoria.textContent + '1';
});
numeroDos.addEventListener('click', function () {
    armarNumero('2');
    numeroMemoria.textContent = numeroMemoria.textContent + '2';
});
numeroTres.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + '3';
    armarNumero('3');
});
numeroCuatro.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + '4';
    armarNumero('4');
});
numeroCinco.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + '5';
    armarNumero('5');
});
numeroSeis.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + '6';
    armarNumero('6');
});
numeroSiete.addEventListener('click', function () {
    ; numeroMemoria.textContent = numeroMemoria.textContent + '7';
    armarNumero('7');
});
numeroOcho.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + '8';
    armarNumero('8');
});
numeroNueve.addEventListener('click', function () {
    armarNumero('9');
    numeroMemoria.textContent = numeroMemoria.textContent + '9';
});

coma.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + ',';
    if (comaFlag === 0) {
        armarNumero('.');
        comaFlag++;
    }
});


// Operadores
cambioSigno.addEventListener('click', function () {
        almacenarNumero();
        operador(7);
        numeroMemoria.textContent = primerNumero;
});


sumar.addEventListener('click', function () {

    if (!flagDobleOperador) {
        almacenarNumero();
        numeroMemoria.textContent = numeroMemoria.textContent + '+';
        if (operacion[0] == true) {
            cicloOperador();
            flagDobleOperador = 0;
        } else {
            operacion[0] = true;
        }
        limpiarPantalla();
        flagDobleOperador++;
    }

});
restar.addEventListener('click', function () {

    if (!flagDobleOperador) {
        almacenarNumero();
        numeroMemoria.textContent = numeroMemoria.textContent + '-';
        console.log('-');
        if (operacion[1] == true) {
            cicloOperador();

            flagDobleOperador = 0;
        } else {
            operacion[1] = true;
        }

        limpiarPantalla();
        flagDobleOperador++;
    }

});

dividir.addEventListener('click', function () {

    if (!flagDobleOperador) {

        almacenarNumero();
        numeroMemoria.textContent = numeroMemoria.textContent + '/';
        console.log('/');
        if (operacion[2] == true) {
            cicloOperador();

            flagDobleOperador = 0;
        } else {
            operacion[2] = true;
        }

        limpiarPantalla();
        flagDobleOperador++;
    }

});

multiplicar.addEventListener('click', function () {

    if (!flagDobleOperador) {

        almacenarNumero();
        numeroMemoria.textContent = numeroMemoria.textContent + '*';
        console.log('*');
        if (operacion[3] == true) {
            cicloOperador();

            flagDobleOperador = 0;
        } else {
            operacion[3] = true;
        }

        limpiarPantalla();
        flagDobleOperador++;
    }


});

potencia.addEventListener('click', function () {

    if (!flagDobleOperador) {

        almacenarNumero();

        numeroMemoria.textContent = numeroMemoria.textContent + 'pot';
        console.log('pot');
        if (operacion[4] == true) {
            cicloOperador();

            flagDobleOperador = 0;
        }
        else {
            operacion[4] = true;
        }

        limpiarPantalla();
        flagDobleOperador++;
    }



});
raiz.addEventListener('click', function () {

    if (!flagDobleOperador) {

        almacenarNumero();

        numeroMemoria.textContent = numeroMemoria.textContent + 'raiz';
        console.log('raiz');
        if (operacion[5] == true) {
            cicloOperador();

            flagDobleOperador = 0;
        }
        else {
            operacion[5] = true;
        }

        limpiarPantalla();
        flagDobleOperador++;
    }

});
porcentaje.addEventListener('click', function () {

    if (!flagDobleOperador) {

        almacenarNumero();
        numeroMemoria.textContent = numeroMemoria.textContent + '%';
        console.log('%');
        if (operacion[6] == true) {
            cicloOperador();

            flagDobleOperador = 0;
        } else {
            operacion[6] = true;
        }

        limpiarPantalla();
        flagDobleOperador++;
    }

});

let flagDobleEnter = 0;


enter.addEventListener('click', function () {
    if (!flagDobleEnter) {

        almacenarNumero();
        cicloOperador();
        iniciarOperador();
        flagDobleOperador = 0;
        numeroMemoria.textContent = primerNumero;
        flagDobleEnter++;
    }
});

borrarPantalla.addEventListener('click', function () {
    numeroMemoria.textContent = numeroMemoria.textContent + 'ups!';
    limpiarPantalla();
});

reset.addEventListener('click', function () {

    location.reload();
});

// Funciones

function iniciarOperador() {
    for (x = 0; x < 16; x++) {
        operacion[x] = false;
    }
}

function armarNumero(numero) {
    if (flagNumero < 16) {
        numeroIngresado[flagNumero] = numero;
        flagNumero++;
        numeroString = numeroIngresado.join('');
        numeroVisible.textContent = numeroString;

    }
}

function limpiarPantalla() {
    numeroString = 0;
    numeroVisible.textContent = '';
    flagNumero = 0;
    comaFlag = 0;
    for (x = 0; x < 16; x++) {
        numeroIngresado[x] = ''; /// no funciona, capaz q si
    }
}

function almacenarNumero(numero) {
    flagDobleEnter = 0;

    if (almacenarNumeroFlag == 0) {
        primerNumero = Number(numeroString);
        almacenarNumeroFlag++;
        limpiarPantalla();
        console.log(`primer numero ${primerNumero}`);
    } else {
        segundoNumero = Number(numeroString);
        limpiarPantalla();
        console.log(`segundo numero ${segundoNumero}`);

    }
}

function cicloOperador() {
    flagDobleOperador = 0;

    for (x = 0; x < 16; x++) {
        if (operacion[x] == true) {
            operador(x);

            console.log(`ciclo operador: ${operacion[x]} y x: ${x}`);
            console.log("AQUI!!");

            return;
        }
    }
}

// let resultado = 0;

function operador(operador) {
    switch (operador) {
        case 0:
            primerNumero = primerNumero + segundoNumero;
            numeroVisible.textContent = primerNumero; // mostrar resultado en pantalla

            console.log(primerNumero);
            console.log('+');

            break;
        case 1:
            console.log('-');
            primerNumero = primerNumero - segundoNumero;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;

        case 2:
            console.log('/');
            primerNumero = primerNumero / segundoNumero;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
        case 3:
            console.log('*');
            primerNumero = primerNumero * segundoNumero;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
        case 4:
            console.log('pot');

            pot(primerNumero, segundoNumero);

            numeroVisible.textContent = potencia2;
            primerNumero = potencia2;
            console.log(potencia2);
            break;
        case 5:
            console.log('raiz');
            let resultadoRaiz = Math.pow(primerNumero, 1 / segundoNumero);
            numeroVisible.textContent = resultadoRaiz;
            primerNumero = resultadoRaiz;
            console.log(resultadoRaiz);
            break;
        case 6:
            console.log('%');
            primerNumero = primerNumero * (segundoNumero / 100);
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
            case 7:
            console.log('-/+');
            primerNumero = primerNumero * -1;
            numeroVisible.textContent = primerNumero;
            console.log(primerNumero);
            break;
        default:
            console.log('Error de switch');
            break;
    }
}




function pot(priNum, segNum) {
    let resultado = priNum;
    for (x = 1; x < segNum; x++) {
        resultado = resultado * priNum;
        console.log('vamos bien ' + x);
    }

    potencia2 = resultado;
}



