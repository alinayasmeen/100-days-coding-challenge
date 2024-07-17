// 3.LOWER CASE & UPPER CASE & TITLE CASE
let pName : string = "alina"
console.log(pName.toLowerCase());
console.log(pName.toUpperCase());
console.log(pName.replace(/\b\w/g, (chart)=> chart.toUpperCase()));