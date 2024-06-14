function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "i love typescript "; }
    console.log("Creating a ".concat(size, " size shirt with ").concat(printMessage, " prints on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small");
