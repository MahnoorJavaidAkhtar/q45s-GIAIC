function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}

let magician_names = ["Hamzah" , "Taha", "Moiz"];

let copy_magician_name = magician_names.slice();

let copy_great_magician = make_great(copy_magician_name);

console.log("orginal Array\n");

show_magicians(magician_names);

console.log("\ncopied array\n");

show_magicians(copy_great_magician);

