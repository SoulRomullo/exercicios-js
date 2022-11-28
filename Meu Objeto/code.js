function code(meuObjeto) {
    // code

    var propriedades = Object.keys(meuObjeto);

    for (var prop of propriedades) {
        console.log(`Meu ${prop} é ${meuObjeto[prop]}`)
    }

}

code({
    nome: "Lucas",
    cabelo: "Preto",
    monitor: "Grande",
    copo: "Transparente"
});


module.exports = code