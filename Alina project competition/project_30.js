"use strict";
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user
let userNames = ["Admin", "Chen", "Alina", "Hafi", "Shaista"];
for (let i = 0; i < userNames.length; i++) {
    console.log(`Hello, ${userNames[i]}! Welcome to our website.`);
}
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
console.log(" • Add an additional condition to check if the user is logged in or not. If the user is not logged in, print a message saying 'Please log in to access this feature.'");
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log(`\n Hello Admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello, ${userNames[i]}! Thank you for logging in again.`);
    }
}
;
