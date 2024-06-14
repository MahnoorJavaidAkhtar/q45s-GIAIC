var current_users = ["taha", "ali", "shees", "zain", "moiz"];
var new_users = ["hamzah", "zeeshan", "umar", "mahad", "ayesha"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This userName ".concat(new_one_user, " is available"));
    }
});
