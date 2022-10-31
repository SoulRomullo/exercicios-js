function fizzbuzz() {
    // code
    
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