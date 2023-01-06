// arrays 2 fullstack academy review

// more methods 

// splice is a method that mutates the original array; it's used to add or remove elements from the middle of an array (instead of adding or removing from either end)
// removes or adds element to the actual physical array 
// its first arguement is an index; the second is a count of elements to delete from the element, starting at the provided index 
    // it returns a new array with all of the removed elements 

    let names = ['George', 'John', 'Thomas'];
    let singleTermPresidents = names.splice(1, 1);

    console.log(names); // returns ['George', 'Thomas']
    console.log(singleTermPresidents); // returns ['John']