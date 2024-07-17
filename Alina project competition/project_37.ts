// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(size: "small" | "medium" | "large", message: string): string {
    if (size === "small") {
        return "Small shirt with message: " + message;
    } else if (size === "medium") {
        return "Medium shirt with message: " + message;
    } else {
        return "Large shirt with message: " + message;
    }
};

console.log(make_shirt("small", "I love TypeScript"));

console.log(make_shirt("medium", "I love TypeScript"));

console.log(make_shirt("large", "I love TypeScript"));