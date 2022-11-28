function isEven(n) {
    // // validação
    // if (n % 2 === 0) {
    //     console.log("Valor recebido: " + n);
    //     console.log("Sua função checa: é 0 ou 1?");
    //     console.log("Como a sua resposta é sim, sua função sabe o que deve ser feito");
    // } else if (n % 2 === 1) {
    //     console.log("Valor recebido: " + n);
    //     console.log("Sua função checa: é 0 ou 1?");
    //     console.log("Como sua resposta é não, subtraimos dois e executamos novamente");

    // }

    //Forma correta de fazer

    if (n % 2 === 0) {
        console.log("par")
        return true
    }
    else if (n % 2 !== 0) {
        console.log("impar")
        return false
    }

    // manipulação
    else if (n < 0) {
        return isEven(n + 2)
    } else {
        return isEven(n - 2)
    }

    //Outro maneira de fazer 
   
    // if (n % 2 === 0) {
    //     return true
    // }
    // else if (n % 2 === 1) {
    //     return false
    // }
    // else if (n < 0) {
    //     return isEven(n + 2)
    // }
    // else {
    //     return isEven(n - 2)
    // }
}

isEven(-73)
module.exports = isEven