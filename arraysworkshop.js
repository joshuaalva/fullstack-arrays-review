// 01 Even and Odd 
// function evenAndOdd(arr){
//     let evenArr = [];
//     let oddArr = [];
    
//     for(let i = 0; i < arr.length; i++){
//       let num = arr[i];
      
//       if(num % 2){
//         oddArr.push(num);
//       } else {
//         evenArr.push(num);
//       }
//     }
    
//     return [evenArr, oddArr];
//   };

// second try 
// function evenAndOdd(arr){
//     let evens = [];
//     let odds = [];
    
//     for(let i = 0; i < arr.length; i++){
//       let num = arr[i];
//       if(num % 2 === 1){
//         odds.push(num);
//       } else {
//         evens.push(num);
//       }
//     }
    
//     return [evens, odds];
//   }

// describe('evenAndOdd', () => {

//     it('is a function', () => {
//       expect(typeof evenAndOdd).toEqual('function');
//     });
  
//     it('returns an array', () => {
//       let returnedValue = evenAndOdd([1, 2, 3]);
//       expect(Array.isArray(returnedValue)).toEqual(true);
//     });
  
//     it('returns an array where the first element has all the even numbers from the original array', () => {
//       let returnedValue = evenAndOdd([10, 15, 20, 25, 30]);
//       expect(returnedValue[0]).toEqual([10, 20, 30]);
//     });
  
//     it('returns an array where the second element has all the odd numbers from the original array', () => {
//       let returnedValue = evenAndOdd([7, 14, 21, 28, 35]);
//       expect(returnedValue[1]).toEqual([7, 21, 35]);
//     });
  
//   });

  // 02 Array Flattner 

// function arrayFlattener(twoDimensionalArray) {

//     // create the array to return at the end of the function
//     let flatArray = [];
  
//     // loop through the original twoDimensionalArray
//     for (let i = 0; i < twoDimensionalArray.length; i++) {
  
//       // store each element in a variable (optional)
//       let element = twoDimensionalArray[i];
  
//       // if the element is an array...
//       if (Array.isArray(element)) {
  
//         // loop through the inner array
//         for (let j = 0; j < element.length; j++) {
  
//           // store each element from the inner array in a variable (also optional)
//           let innerElement = element[j];
  
//           // push each element from the inner array into the flatArray
//           flatArray.push(innerElement);
//         }
//       }
  
//       // else, the element is just a number and can be pushed into flatArray
//       else {
//         flatArray.push(element);
//       }
//     }
  
//     // return the flatArray after the for loop
//     return flatArray;
//   }
  
//   describe('arrayFlattener', () => {
  
//     it('is a function', () => {
//       expect(typeof arrayFlattener).toEqual('function');
//     });
  
//     it('returns an array', () => {
//       let returnedValue = arrayFlattener([1, 2, [3]]);
//       expect(Array.isArray(returnedValue)).toEqual(true);
//     });
  
//     it('returns a one-dimensional array', () => {
//       // get the return value from the function
//       let returnedValue = arrayFlattener('this is crazy');
  
//       // make sure none of the elements in the array are an array
//       let foundInnerArray = false;
  
//       for (let i = 0; i < returnedValue.length; i++) {
//         let element = returnedValue[i];
  
//         if (Array.isArray(element)) {
//           foundInnerArray = true;
//           break;
//         }
//       }
  
//       expect(foundInnerArray).toEqual(false);
//     });
  
//     it('returns a one-dimensional array with the correct elements', () => {
//       let returnedValue = arrayFlattener(['I', 'am', 'working', ['on', 'another', 'level']]);
//       expect(returnedValue).toEqual(['I', 'am', 'working', 'on', 'another', 'level']);
//     });
  
//   });

// 03 Zoo Inventory 

// function zooInventory(zoo){
//   let sentences = [];
  
//   for(let i = 0; i < zoo.length; i++){
//     sentences.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`)
//   }
// return sentences                
// };

// describe('zooInventory', () => {

//   it('is a function', () => {
//     expect(typeof zooInventory).toEqual('function');
//   });

//   it('returns an array', () => {
//     let returnedValue = zooInventory([["Nemo", ["fish", 5]]]);
//     expect(Array.isArray(returnedValue)).toEqual(true);
//   });

//   it('returns an array with the correct sentence, given one animal', () => {
//     let zoo = [
//       ['Bai Yun', ['panda', 26]]
//     ];

//     let returnedValue = zooInventory(zoo);
//     expect(returnedValue[0]).toEqual('Bai Yun the panda is 26.');
//   });

//   it('returns the correct array of sentences, given multiple animals', () => {
//     let zoo = [
//       ['Hobbes', ['tiger', 32]],
//       ['Simba', ['lion king', 23]]
//     ];

//     let returnedValue = zooInventory(zoo);

//     let expectedValue = [
//       'Hobbes the tiger is 32.',
//       'Simba the lion king is 23.'
//     ];

//     expect(returnedValue).toEqual(expectedValue);
//   });

// });

// 04 Make Grid 

// function makeGrid(numColumns, numRows){
//   let grid = [];
//   for(let i = 0; i < numRows; i++){
//     let row = [];
//     for(let j = 0; j < numColumns; j++){
//       row.push(j + 1);
//     }
//     grid.push(row);
//   }
//   return grid;
// }

// describe('makeGrid', () => {

//   it('is a function', () => {
//     expect(typeof makeGrid).toEqual('function');
//   });

//   it('returns an array', () => {
//     let returnedValue = makeGrid(1, 1);
//     expect(Array.isArray(returnedValue)).toEqual(true);
//   });

//   it('returns a grid with the correct number of rows', () => {
//     let returnedValue = makeGrid(3, 6);
//     expect(returnedValue.length).toEqual(6);
//   });

//   it('returns a grid with the correct number of columns', () => {
//     let returnedValue = makeGrid(5, 1);
//     let row = returnedValue[0];
//     expect(row.length).toEqual(5);
//   });

//   it('returns a grid with the correct cell values', () => {
//     let returnedValue = makeGrid(2, 2);
//     let expectedValue = [
//       [1, 2],
//       [1, 2]
//     ];
//     expect(returnedValue).toEqual(expectedValue);
//   });

// });
