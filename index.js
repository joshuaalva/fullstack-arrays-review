// 01 Odd Couple 

// function oddCouple(numbers){
//     const newNumbers = [];
    
//     for(const number of numbers){
//       // % 2 modulo or remainder. remainder =1 mean it is an odd number
//       // check if the number is even
//       if(newNumbers.length < 2 && number % 2 === 1){
//         newNumbers.push(number);
//       }
//     }
    
//     return newNumbers;
//     }
  
  
  
//   describe('oddCouple', () => {
  
//     it('is a function', () => {
//       expect(typeof oddCouple).toEqual('function');
//     });
  
//     it('returns an array', () => {
//       let returnedValue = oddCouple([1, 2, 3]);
//       expect(Array.isArray(returnedValue)).toEqual(true);
//     });
  
//     it('returns an array with the first two odd numbers from the input', () => {
//       let returnedValue = oddCouple([3, 6, 9, 12, 15]);
//       expect(returnedValue).toEqual([3, 9]);
//     });
  
//     it('returns an array with the only odd number if the input has only one odd number', () => {
//       let returnedValue = oddCouple([14, 21, 28]);
//       expect(returnedValue).toEqual([21]);
//     });
  
//     it('returns an empty array if the input has no odd numbers', () => {
//       let returnedValue = oddCouple([4, 8, 12, 16]);
//       expect(returnedValue).toEqual([]);
//     });
  
//   });

// Helper Function -----

// function shouldPushNumber(number, newNumbers){
//     return number % 2 === 1 % newNumbers.length < 2;
// }

// 02 My Includes