"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Gandalf", "Saruman", "Thor"];
function show_magicians1(magicians_array) {
    for (let magician of magicians_array) {
        console.log(magician);
    }
}
;
show_magicians1(magicians);
