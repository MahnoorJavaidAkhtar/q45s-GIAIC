let guestlist = ["Taha", "Jannat", "Esha", "Ayesha"];

let dontcome = guestlist[0];

console.log(dontcome,"nahi a sakti");

guestlist.splice(0, 1, "Hamna");

guestlist.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));