// creating a guest list in array 
var guestlist = ["Taha", "Jannat", "Esha", "Ayesha"];
// making variable for those guest who cantcome
var dontcome = guestlist[0];
//print the name of guest who cant come
console.log(dontcome, "nahi a sakta");
//Add or remove values from  guest array 
guestlist.splice(0, 1, "Hamna");
//message print for bigger table
console.log("Good News ! we have found a bigger table for dinner");
//adding a new guest in starting inex of array 
guestlist.unshift("Hooriya");
//adding a new guest at ending index of array 
guestlist.push("Areej");
//get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//adding a new guest in the middle index of array
guestlist.splice(middleindex, 0, "Ali");
//print message of updated list 
console.log("updated list of our guest");
//sending invitation message foe our guest one by one with their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
