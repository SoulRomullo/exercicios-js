function code(entries) {
    // code
    const values = entries.reduce((val, currentElement) => {
        if (currentElement.type === "CREDIT") val += currentElement.value
        if (currentElement.type === "DEBIT") val -= currentElement.value

        return val
    }, 0)

    console.log(values)
    return values // devemos retornar a variável para a função, assim será executado 
}

const balanco = [
    {value: 10, type: "CREDIT"},
    {value: 10, type: "DEBIT"},
    {value: 10, type: "CREDIT"},
    {value: 10, type: "DEBIT"},
]

code(balanco)

module.exports = code