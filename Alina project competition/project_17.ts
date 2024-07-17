// Shrinking Guest List:
// More Guests
let guestListAgain = ["Sidra", "Ms Mehreen", "Ms Maryam"];
let dontComeAgain = guestListAgain[0];
console.log(dontComeAgain, "Can't come.");

guestListAgain.splice(0, 1, "Farwa");
console.log("GOOD NEWS! I have found a bigger table for party.");
// Adding new guest at the begin
guestListAgain.unshift("Moniba");
// Adding a new guest at the end
guestListAgain.push("Areeba");
// finding middle inex
let Middleindex = Math.floor(guestListAgain.length / 2);
// Adding a new guest at the middle
guestListAgain.splice(Middleindex, 0, "Sabeera");
console.log("Now list has updated");

guestListAgain.forEach((modified) =>
  console.log(
    `Assalam u alaikum ${modified}, \n Would like to join me at Eid Milan Party?`
  )
);
//  Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(
  "Sorry,\n As usual I can't reach on the time that's why the bigger table have resserved.Then, I can invite only two guest."
);

//  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//  a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestListAgain.length > 2) {
  let removedGuest = guestListAgain.pop();
  console.log(`Sorry ${removedGuest} ,\n I can't invite you`);
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log("Invitation to the last 2 guests");

guestListAgain.forEach((modified) =>
  console.log(`Luckily ${modified}, \n You are still invited to the party.`)
);

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.
guestListAgain.pop();
guestListAgain.pop();

console.log(guestListAgain);
