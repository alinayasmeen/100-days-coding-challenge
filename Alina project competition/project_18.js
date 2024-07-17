"use strict";
//  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let favouritePlaces = ["Makkah", "Madina", "Do Darya",
    "Maldives", "China", "Paris"];
// • Print your array in its original order.
console.log("original order", favouritePlaces);
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order", [...favouritePlaces].sort());
// • Show that your array is still in its original order by printing it.
console.log("still in original order:", favouritePlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", [...favouritePlaces].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("still in original order:", favouritePlaces);
// • Reverse the order of your list. Print the array to show that its
// order has changed.
console.log("reverse order:", favouritePlaces.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order:", favouritePlaces.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("sorted in alphabetical order:", favouritePlaces.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("sorted in reversed alphabetical order:", favouritePlaces.reverse());
