function countBs(word) {
    // code
    var nome = word;
    var count = 0;
    var e = 0;
    for (let i = 0; i < nome.length; i++) {
        var primeiraLetra = nome.charAt(e);
        var letras = nome.charAt(i);
        if (primeiraLetra === letras) {
            count += 1
        }
    }
    if (primeiraLetra !== primeiraLetra.toUpperCase()) {
        console.log(e + ", porque '" + nome + "' não tem nenhum " + primeiraLetra + " maiúsculo");
        return e;
    } else {
        console.log(count + ", porque '" + nome + "' tem " + count + " '" + primeiraLetra + "' maiúsculo");
        return count;
    }
}
function countChar(word, char) {
    // code
    var nome = word;
    count = 0;
    var e = char;
    for (let i = 0; i < nome.length; i++) {
        var primeiraLetra = nome.charAt(i);
        if (e === primeiraLetra) {
            count += 1;
        }
    }
    console.log(count + ", porque '" + nome + "' tem " + count + " '" + e + "'")
    return count;
}

countBs("BBC");
countChar("kakkerlak", "k");


module.exports = {
    countBs,
    countChar
}


//-----------------------------------------------------------------------------------------------------

// function countBs(word) {
//     // code
//     var nome = word;
//     var count = 0;
//     for (let i = 0; i < nome.length; i++) {
//         var letra = nome.charAt(i);

//         if (letra === "B") {
//             count += 1
//         }
//     }

//     return count

// }

// function countChar(word, char) {
//     // code
//     var nome = word;
//     count = 0;
//     var e = char;
//     for (let i = 0; i < nome.length; i++) {
//         var primeiraLetra = nome.charAt(i);
//         if (e === primeiraLetra) {
//             count += 1;
//         }
//     }
//     return count
// }

// countBs("bbbb");
// countChar("kakkerlak", "k");


// module.exports = {
//     countBs,
//     countChar
// }
