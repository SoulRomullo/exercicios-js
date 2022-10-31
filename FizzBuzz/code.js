function fizzbuzz() {
    // code
    let hash = "#";
    for (cont = 14; cont >= hash.length; cont--) {
        console.log(hash);
        hash += "#";
    }

    let num = 0;
    let hashNew = "";
    while (num <= 7) {
        console.log(hashNew);
        hashNew += "#";
        num++;
    }

    console.log("")

    hashNewDo = "#";
    numNew = 0;
    do {
        console.log(hashNewDo)
        hashNewDo += "#";
        numNew++;
    } while (numNew <= 6) {

    }

    console.log("----------------------------");

    let hashFizz = "";
    let hashBuzz = "";
    let fizz = 1;
    let buzz = 1;
    let contador = 0;
    let size = 1;
    while (size <= 4) {
        while (contador < 7) {
            if (fizz % 3 === 0 && fizz < 100) {
                fizz++;
            }
            hashFizz += "#";
            if (buzz % 5 === 0 && buzz < 100) {
                buzz++;
            }

            hashBuzz += "#";
            contador++;
        }
        console.log(hashFizz + " ");
        console.log(" " + hashBuzz);
        size++;
    }
}

module.exports = fizzbuzz

fizzbuzz()