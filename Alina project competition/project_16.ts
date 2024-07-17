// More Guests
let guestList = ["Sidra","Ms Mehreen","Ms Maryam"]
let dontCome = guestList[0]
console.log(dontCome,"Can't come.");

guestList.splice(0,1,"Farwa")
console.log("GOOD NEWS! I have found a bigger table for party.");
// Adding new guest at the begin 
guestList.unshift("Moniba")
// Adding a new guest at the end
guestList.push("Areeba")
// finding middle inex
let middleIndex : number = Math.floor(guestList.length/2)
// Adding a new guest at the middle
guestList.splice(middleIndex,0,"Sabeera")
console.log("Now list has updated");

guestList.forEach(modified =>console.log(`Assalam u alaikum ${modified}, \n Would like to join me at Eid Milan Party?`)
)




