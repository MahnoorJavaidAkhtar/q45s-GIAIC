var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of countries and print in it in original order
var countriestovisit = ["china", "denmark", "brazil", "america"];
console.log("original order", countriestovisit);
//print thearray in alphabetical order without modifying the actual array lst
console.log("Alphabetic order", __spreadArray([], countriestovisit, true).sort());
//show that the array is still in its original order
console.log("still in original order:", countriestovisit);
//print the array in reversed order without modifying the actual array list
console.log("reverse order", __spreadArray([], countriestovisit, true).reverse());
//show that the array is still in its original order
console.log("still in original order:", countriestovisit);
// we have changed the original order now
console.log("original array reversed", countriestovisit.reverse());
//print the array to show that it's original order
console.log("back to orignal order", countriestovisit.reverse());
//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriestovisit.sort());
// we have changed the original order now in reserved order again
console.log("original array reversed", countriestovisit.reverse());
