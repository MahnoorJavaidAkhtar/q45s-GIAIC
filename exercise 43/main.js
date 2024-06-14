function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Hamzah", "Taha", "Moiz"];
var copy_magician_name = magician_names.slice();
var copy_great_magician = make_great(copy_magician_name);
console.log("orginal Array\n");
show_magicians(magician_names);
console.log("\ncopied array\n");
show_magicians(copy_great_magician);
