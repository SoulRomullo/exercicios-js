function fizzbuzz() {
    // code

    // let hashFizz = "";
    // let hashBuzz = "";
    // let fizz = 1;
    // let buzz = 1;
    // let contador = 0;
    // let size = 1;

    // while (size <= 4) {
    //     while (contador < 7) {
    //         if (fizz % 3 === 0 && fizz < 100) {
    //             fizz++;
    //         }
    //         hashFizz += "#";
    //         if (buzz % 5 === 0 && buzz < 100) {
    //             buzz++;
    //         }

    //         hashBuzz += "#";
    //         contador++;
    //     }
    //     console.log(hashFizz + " ");
    //     console.log(" " + hashBuzz);
    //     size++;
    // }

    // 1. Contar de 1 a 100
    // 2. Pra todo numero divisivel por 3, deve-se imprimir Fizz
    // 3. Pra todo numero divisivel por 5, deve-se imprimir Buzz
    // 4. Para os outros numeros deve-se imprimir o proprio numero
    // 5. Para os numero que sao divisiveis por 3 e por 5, deve-se imprimir FizzBuzz

    /**
     * 1
     * 2
     * Fizz
     * 4
     * Buzz
     * Fizz
     * ...
     * 13
     * 14
     * FizzBuzz
     */

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzbuzz

fizzbuzz()