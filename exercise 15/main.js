var guestlist = ["Taha", "Jannat", "Esha", "Ayesha"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi a sakti");
guestlist.splice(0, 1, "Hamna");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
