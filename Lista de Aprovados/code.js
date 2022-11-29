function code(entries) {
    //code

    // const alunos = Object.keys(entries);

    // for (let i = 0; i < alunos.length; i++) {
    //     if (entries[i].nota >= 5) {
    //         console.log(entries[i].nome)
    //     }
    // }

    const alunos = entries.reduce((aprovados, currentElement) => {
        if (currentElement.nota >= 5) aprovados.push(currentElement.nome);

        return aprovados
    }, [])
    console.log(alunos)
    return alunos // devemos retornar a variável para a função, assim será executado
}

const lista = [
    { "nota": 10, "nome": "Lucas" },
    { "nota": 8, "nome": "Larissa" },
    { "nota": 4, "nome": "Antonio" }
]

code(lista)

module.exports = code