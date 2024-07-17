"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let currentUsers = ["admin", "user1", "User2", "user3", "user4"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUsers = ["ADMIN", "user5", "user2", "user6", "user7"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
for (let newUser of newUsers) {
    if (currentUsers.includes(newUser)) {
        console.log(`${newUser} is already taken. Please choose a different username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
}
;
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
newUsers.forEach(newUsers1 => {
    let condition = currentUsers.some(currentUsers1 => currentUsers1.toLowerCase() === newUsers1.toLowerCase());
    if (condition) {
        console.log(`${newUsers1} is already taken. Please choose a different username.`);
    }
    else {
        console.log(`${newUsers1} is available.`);
    }
});
