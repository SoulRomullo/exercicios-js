// define your class here
class Calculadora{
    constructor() {
    }
    somar(num1, num2) {
        return num1 + num2
    }
    subtrair(num1, num2) {
        return num1 - num2
    }
    dividir(num1, num2) {
        return num1 / num2
    }
    multiplicar(num1, num2) {
        return num1 * num2
    }
}

const calculadora = new Calculadora();

console.log(calculadora.somar(1,2))


module.exports = Calculadora