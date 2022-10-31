function loop() {
    // code
    let hash = "#";
    for (cont = 14; cont >= hash.length; cont--) {
        console.log(hash);
        hash += "#";
    }

    // let num = 0;
    // let hashNew = "";
    // while (num <= 7) {
    //     console.log(hashNew);
    //     hashNew += "#";
    //     num++;
    // }

    // console.log("")

    // hashNewDo = "#";
    // numNew = 0;
    // do {
    //     console.log(hashNewDo)
    //     hashNewDo += "#";
    //     numNew++;
    // } while (numNew <= 6) {

    // }
}

module.exports = loop
loop();