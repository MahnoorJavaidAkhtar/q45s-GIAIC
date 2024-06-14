function make_shirt (size: string = "Large" ,printMessage: string =  "i love typescript ") {
    console.log(`Creating a ${size} size shirt with ${printMessage} prints on shirt`)
}
make_shirt();

make_shirt("Medium");

make_shirt("small")