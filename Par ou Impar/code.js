function isEven(n) {
    // validação
    if (n === 0) {
        console.log("Valor recebido: " + n);
        console.log("Sua função checa: é 0 ou 1?");
        console.log("Como a sua resposta é sim, sua função sabe o que deve ser feito");
    } else if (n === 1) {
        console.log("Valor recebido: " + n);
        console.log("Sua função checa: é 0 ou 1?");
        console.log("Como sua resposta é não, subtraimos dois e executamos novamente");

    }
    
    // manipulação
    else if ( n < 0) {
        return isEven( n + 2 )
    } else {
        return isEven(n - 2)
    }
}

isEven(50)
module.exports = isEven