// creating a guest list in array 

let guestlist = ["Taha", "Jannat", "Esha", "Ayesha"];

// making variable for those guest who cantcome

let dontcome = guestlist[0];

//print the name of guest who cant come


console.log(dontcome,"nahi a sakta");

//Add or remove values from  guest array 

guestlist.splice(0, 1, "Hamna");

//message print for bigger table

console.log("Good News ! we have found a bigger table for dinner");

//adding a new guest in starting inex of array 

guestlist.unshift("Hooriya");

//adding a new guest at ending index of array 

guestlist.push("Areej");

//get a middle index of our guest list array

let middleindex: number = Math.floor(guestlist.length / 2);

//adding a new guest in the middle index of array

guestlist.splice(middleindex, 0, "Ali");

//print message of updated list 

console.log("updated list of our guest");

//sending invitation message foe our guest one by one with their names

guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));

//infrom that only two guest can be invited for dinner 

console.log("unfortunetely, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

//using white.loop to remove the guest from the array until only two names remain

while(guestlist.length > 2){
    let removedguest = guestlist.pop();
    console.log(`sorry, ${removedguest} i cant invite you to dinner`)
};

//sending a invitation to the last two guest on the list 

console.log("invitation to the last 2 guests");

guestlist.forEach(lasttwo => console.log(`luckily ${lasttwo},you are still invited to dinner`));

// Removing last two guest from the list

guestlist.pop();
guestlist.pop();

console.log("empty list:", guestlist);

