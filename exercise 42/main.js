function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Hamzah", "Taha", "Moiz"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
