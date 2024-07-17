// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


let magicians3 : string[] = ["Gandalf","Saruman","Thor"];

function make_great2(magicians3:string[]):string[] {
   let greatMagicians:string[] = [];
   magicians3.forEach((magician) => {
       greatMagicians.push(`${magician} the Great`);
   });
   return greatMagicians
};

function show_magicians3(magicians_array : string[]) {
    magicians3.forEach((magician)=>{
        console.log(magician);
    })
};


let greatMagicians = make_great2(magicians3.slice());

console.log("Original magicians:");
show_magicians3(magicians3); // Shows original names
console.log("Great magicians:");
show_magicians3(greatMagicians); // Shows modified names

show_magicians3(magicians3);