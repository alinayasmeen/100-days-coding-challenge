// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

let favoritePizzas : string[] = ["Pepperoni","Margherita","Hawaiian"];

for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
};

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

for (let index = 0; index < favoritePizzas.length; index++) {
    const element = favoritePizzas[index];
    console.log(`I like ${element} pizza`);
};

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

console.log("I really love pizza!");
console.log("I like pepperoni, Margherita, and Hawaiian pizzas");
console.log("I also like to eat pizza as a dessert");
console.log("I like", favoritePizzas.length, "kinds of pizza");

