const display = document.querySelector('#display');
const num = document.querySelectorAll('.col').values;
const operadores = document.querySelectorAll('.operator').values;

let operando1 = '';
let operando2 = '';
let operacionActual = '';

function press(num){
    if(operacionActual === ''){
        operando1 += num;
        display.innerHTML = operando1;
    } else {
        operando2 += num;
        display.innerHTML = operando2;
    }
}

function setOP(operacion){
    operacionActual += operacion;
}

function calculate(){
    const num1 = parseFloat(operando1);
    const num2 = parseFloat(operando2);
    let resultado = 0;

    switch(operacionActual){
        case '/':
        if(num2 === 0){
            display.textContent = resultado += 'Error Division por Cero';
        } else{
            display.textContent = resultado = num1 / num2;
        }
        break;
        case '*':
            display.textContent = resultado = num1 * num2;
        break;
        case '-':
            display.textContent = resultado = num1 - num2;
        break;
        case '+':
            display.textContent = resultado = num1 * num2;
        break;
    }
}