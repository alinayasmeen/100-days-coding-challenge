// Changing Guest List:
let guestlist = ["Sidra","Ms Mehreen","Ms Maryam"]
let cantCome = guestlist[0]
console.log(cantCome,"Can't come.");

guestlist.splice(0,0,"Farwa")

guestlist.forEach(guest =>console.log(`Assalam u alaikum ${guest}, \n Would like to join me at Eid Milan Party? `)
);