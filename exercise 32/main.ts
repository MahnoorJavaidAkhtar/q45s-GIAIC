let current_users = ["taha","ali","shees","zain","moiz"]

let new_users =["hamzah","zeeshan","umar","mahad","ayesha"]

new_users.forEach(new_one_user => {

    let our_condition = current_users.some(current_one_users => current_one_users.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())

    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This userName ${new_one_user} is available`)
    }
})