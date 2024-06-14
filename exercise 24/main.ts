// define variables
let apple = "apple";
let uppercaseapple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits =["apple","banana","orange"];

// test for equality and unequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");

console.log("is apple is not equal to apple?");
console.log(apple != "apple");

//TEST USING LOWERCASE FUNCTION
console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");

//numeric test
//equal to
console.log("is ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("is ten is not equal to twenty?");
console.log(ten != twenty);

// greater than
console.log("is ten is greater than zero?");
console.log(ten > 0);

// less than
console.log("is twenty is less than 10?");
console.log(twenty < 10);

//greater than and equal too
console.log("is ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("is twenty is less than or equal to 10?");
console.log(twenty <= 10);

//test using "and" & "or" operators

//using &&(and)
console.log("is twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("is twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

//using || (or)
console.log("20 is greater than 20 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("20 is greater than 20 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//test whether an item is include in array 
console.log("is orange include in my fruits array");
console.log(fruits.includes("orange"));

//not include
console.log("is orange not include in my fruits array");
console.log(!fruits.includes("orange"));






