// Selectores

const numeroVisible = document.querySelector('#numeroVisible');

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


// ACUS

let flagIgual = 0;
let flagNumero = 0;
let almacenarNumeroFlag = 0;
let comaFlag = 0;

let numeroIngresado = [];
let numeroString = '';

let primerNumero = 0;
let segundoNumero = 0;

let operacion = [];
let flagDobleOperador = 0;

//inicializar operacion
for (x = 0; x < 16; x++) {
    operacion[x] = false;
}

// Listeners

// Numeros
numeroCero.addEventListener('click', function () {
    botonPresionado(numeroCero);
    armarNumero('0');
});
numeroUno.addEventListener('click', function () {
    botonPresionado(numeroUno);
    armarNumero('1');
});
numeroDos.addEventListener('click', function () {
    botonPresionado(numeroDos);
    armarNumero('2');
});
numeroTres.addEventListener('click', function () {
    botonPresionado(numeroTres);
    armarNumero('3');
});
numeroCuatro.addEventListener('click', function () {
    botonPresionado(numeroCuatro);
    armarNumero('4');
});
numeroCinco.addEventListener('click', function () {
    botonPresionado(numeroCinco);
    armarNumero('5');
});
numeroSeis.addEventListener('click', function () {
    botonPresionado(numeroSeis);
    armarNumero('6');
});
numeroSiete.addEventListener('click', function () {
    botonPresionado(numeroSiete);
    armarNumero('7');
});
numeroOcho.addEventListener('click', function () {
    botonPresionado(numeroOcho);
    armarNumero('8');
});
numeroNueve.addEventListener('click', function () {
    botonPresionado(numeroNueve);
    armarNumero('9');
});

coma.addEventListener('click', function () {
    botonPresionado(coma);
    if (comaFlag === 0) {
        armarNumero('.');
        comaFlag++;
    }
});


// Operadores
if (!flagDobleOperador) {
    
    flagDobleOperador++;
    sumar.addEventListener('click', function () {
        botonPresionado(sumar);
        almacenarNumero();
        if (operacion[0] == true) {
            cicloOperador();
        }
        operacion[0] = true;
        limpiarPantalla();
        flagDobleOperador = 0;

    });
    restar.addEventListener('click', function () {
        botonPresionado(restar);
        almacenarNumero();
        console.log('-');
        if (operacion[1] == true) {
            cicloOperador();
        }
        operacion[1] = true;
        limpiarPantalla();
        flagDobleOperador = 0;

    });
    dividir.addEventListener('click', function () {
        botonPresionado(dividir);
        almacenarNumero();
        console.log('/');
        if (operacion[2] == true) {
            cicloOperador();
        }
        operacion[2] = true;
        limpiarPantalla();
        flagDobleOperador = 0;

    });
    multiplicar.addEventListener('click', function () {
        botonPresionado(multiplicar);
        almacenarNumero();
        console.log('*');
        if (operacion[3] == true) {
            cicloOperador();
        }
        operacion[3] = true;
        limpiarPantalla();
        flagDobleOperador = 0;

    });



    potencia.addEventListener('click', function () {
        flagDobleOperador = 0;
    });
    raiz.addEventListener('click', function () {
        flagDobleOperador = 0;
    });
    porcentaje.addEventListener('click', function () {
        flagDobleOperador = 0;
    });


    enter.addEventListener('click', function () {
        botonPresionado(enter);
        almacenarNumero();
        cicloOperador();
        flagDobleOperador = 0;
    });
}




reset.addEventListener('click', function () {
    botonPresionado(reset);
    location.reload()
});

// Funciones

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
        numeroIngresado[x] = ''; /// no funciona
    }
}

function almacenarNumero(numero) {
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
    for (x = 0; x < 16; x++) {
        if (operacion[x] == true) {
            operador(x);
            operacion[x] = false;
            console.log(`ciclo operador: ${operacion[x]} y x: ${x}`)
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
        default:
            console.log('Error de switch');
            break;
    }
}

function botonPresionado(id) {
    id.classList.remove('boton-nopresionado');
    id.classList.add('boton-presionado');
    setTimeout(() => {
        id.classList.add('boton-nopresionado');
        id.classList.remove('boton-presionado');
    }, 500);

}
