/**
 * funcao isEven(n):
 *  se n é igual a 0:
 *      retorna true
 *  senao se n é igual a 1:
 *      retorna false
 *  senao:
 *      reduz 2 de n e executa a funcao novamente
 */

function isEven(n) {
    // code
    let nao = "não";
    let sim = "sim";

    if (n % 2 === 0) {
        console.log("Valor recebido: " + n);
        console.log("Sua função checa: é 0 ou 1?");
        console.log("Como a resposta é sim, sua função sabe o que deve ser feito");
    } else {
        console.log("Valor recebido: " + n);
        console.log("Sua função checa: é 0 ou 1?");
        console.log("Como a resposta é não, subtraímos dois e executamos novamente");
    }
}

module.exports = isEven

isEven(75)