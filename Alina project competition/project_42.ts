// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


let magicians2 : string[] = ["Gandalf","Saruman","Thor"];

function show_magicians2(magicians_array : string[]) {
    for (let magicians of magicians2) {
        console.log(magicians);
    }
};

show_magicians2(magicians2);

function make_great() {
    magicians2.forEach((magician) => console.log(`the Great ${magician}`));
};

make_great()