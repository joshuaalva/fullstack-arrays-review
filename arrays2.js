// arrays 2 fullstack academy review

// more methods 

// splice method ----------

// splice is a method that mutates the original array; it's used to add or remove elements from the middle of an array (instead of adding or removing from either end)
// removes or adds element to the actual physical array 
// its first arguement is an index; the second is a count of elements to delete from the element, starting at the provided index 
    // it returns a new array with all of the removed elements 

let names = ['George', 'John', 'Thomas'];
let singleTermPresidents = names.splice(1, 1);

console.log(names); // returns ['George', 'Thomas']
console.log(singleTermPresidents); // returns ['John']
    // started at first element and kept one element returns john

let beatles = ['Paul', 'George', 'John', 'Ringo'];
// let newGroup = beatles.splice(1, 2);
let newGroup = beatles.splice(1, 2, 'Pete'); // adding Pete to the original array
console.log(beatles); // expected output Paul & Ringo
console.log(newGroup); // expected output George & John

// let newGroup = beatles.splice(1, 0, 'Pete', 'Josh');
    // at the first index --> don't remove anything --> add Pete and Josh


// join method ----------

// let sentence = 'The Beatles were' + beatles;
    // output: The Beatles werePaul,Pete,Ringo
    // all squished together no spacing... ugly string
let sentence = 'The Beatles were ' + beatles.join(", ");
console.log(sentence); 
    // output: The Beatles were Paul, Pete, Ringo
    // pretty string

// Concat method
let older = ['Ringo', 'John'];
let younger = ['Paul', 'George'];
// lets see we wanted to combine both of these into one array 
console.log(older.concat(younger)); // output: [ 'Ringo', 'John', 'Paul', 'George' ]

// ----------

let relatedThings = [['Windows', 'Mac'], ['New York', 'Chicago']];
console.log(relatedThings.length); // output: 2
console.log(relatedThings[1][0]); // output: New York

let rsvpGroups = [['Jane', 'Mel'], 'Jack', ['Rohan', 'David', 'Meg']];

for (let i = 0; i < rsvpGroups.length; i++){
    // for loop
    // initalizing counter variable --> test to see how long loop should continue --> itarator
    let element = rsvpGroups[i]; // i is just the index 

    if(Array.isArray(element)) {
        for(let j = 0; j < element.length; j++) {
            console.log(element[j]);
        }
    } else {
        console.log(element);
    }
}

// another use case of nested arrays 

let grid = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
];

console.log(grid[1]); // prints [4, 5, 6]

let secondCol = [];
for(let i = 0; i < grid.length; i++){
    // extracting a second column in a scalable way 
    secondCol.push(grid[i][1]);
}

console.log(secondCol);




