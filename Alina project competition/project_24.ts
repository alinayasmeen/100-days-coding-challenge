// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each
let fruit_1 :string="apple"
// • Tests for equality and inequality with strings
console.log(fruit_1==="apple");
console.log(fruit_1!="apple");
// • Tests using the lower case function
console.log(fruit_1.toLowerCase()==="Apple");
console.log(fruit_1.toLowerCase()==="apple");
console.log(fruit_1.toLowerCase()!="apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num_01 : number = 12;

console.log(num_01===12);

console.log(num_01!==12);

console.log(num_01>11);

console.log(num_01<13);

console.log(num_01>=12);

console.log(num_01<=12);
// • Tests involving logical operators (AND, OR, NOT)
console.log(num_01===12 && num_01<13);

console.log(num_01===12 || num_01<11);

console.log(!(num_01===12));
// Test whether an item is in a array

let fruits : string[] = ["apple", "banana", "orange", "grape"];
console.log(fruits.includes("apple"));

// • Test whether an item is not in a array
console.log(!fruits.includes("apple"));

console.log(fruits.includes("pear"));


