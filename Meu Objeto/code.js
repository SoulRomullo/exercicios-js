function meuObjeto(caracteristicas) {
    var propriedades = Object.keys(caracteristicas);

    for(var prop of propriedades) {
        console.log(`Meu ${prop} é ${caracteristicas[prop]}`)
    }

}

meuObjeto({
    nome: "Lucas",
    cabelo: "Preto",
    monitor: "Grande",
    copo: "Transparente"
});