// two dimensional arrays 

const aisles = [
    ['bread', 'hamburger buns', 'hotdog buns'],
    ['milk', 'cheese'],
    ['tomatoes', 'onions', 'lettuce']
];

console.log(aisles[1]); // prints milk & cheese
console.log(aisles[1][0]) // prints milk 
console.log(aisles[2][2]); // prints lettuce

aisles[1].push('cottage cheese'); // adds cottage cheese to the dairy aisle
// aisles[1].unsift('cottage cheese') // adds cottage cheese to the front
console.log(aisles[1]); // prints out milk cheese cottage cheese

// looping through arrays 
// c style loops 

// loop through aisles and print each aisles
for (let i = 0; i < aisles.length; i++){
    console.log(aisles[i]) // i = index
}

// loop through all the aisles and then loop through each aisles and print out each item
for (let i = 0; i < aisles.length; i++){
    // making an aisles variable here makes the code in the second loop better
    const aisle = aisles[i]
    // can't reuse i so we have to use a new variable 'j'

    for (let j = 0; j < aisle.length; j++){ // inner loop
        console.log(aisle[j]);
    }
}

// ## for.. of loops 
// for.. of loops makes this much cleaner and easier to read 
for(const aisle of aisles) { // outer loop
    for (const item of aisle) { // inner loop
        console.log(item);
    }
}