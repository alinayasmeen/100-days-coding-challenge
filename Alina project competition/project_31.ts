// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames : string[] = ["Chen","Alina","Hafi","Shaista"];

if(usernames.length>0){
    console.log("Users are available");
};
//• If the list is empty, print the message We need to find some users!

if(usernames.length>0){
    console.log("Users are available");
}else{
    console.log(" We need to find some users!");
};

// • Remove all of the usernames from your array, and make sure the correct message is printed.

usernames=[];

if(usernames.length>0){
    console.log("Users are available");
}else{
    console.log(" No users available,We need to find some users!");
};
