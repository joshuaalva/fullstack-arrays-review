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

// function myIncludes(arr, searchValue){
//     for(let i = 0; i < arr.length; i++){
//       let element = arr[i];
//       if(element === searchValue){
//         return true;
//       }
//     }
//         return false;
//   }
  
//   describe('myIncludes', () => {
  
//     it('is a function', () => {
//       expect(typeof myIncludes).toEqual('function');
//     });
  
//     it('returns a boolean', () => {
//       let returnedValue = myIncludes([1, 2, 3], 3);
//       expect(typeof returnedValue).toEqual('boolean');
//     });
  
//     it('returns true if the searchValue is in the array', () => {
//       let returnedValue = myIncludes(['ruby', 'go', 'javascript'], 'javascript');
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns false if the searchValue is not in the array', () => {
//       let returnedValue = myIncludes(['fun', 'happy things', 'kittens'], 'sad things');
//       expect(returnedValue).toEqual(false);
//     });
  
//     it('returns false if the searchValue is loosely equal to an element in the array', () => {
//       let returnedValue = myIncludes([5, 10, 15], '10');
//       expect(returnedValue).toEqual(false);
//     });
  
//   });

// 03 My Last Index Of

describe('myLastIndexOf', () => {

    it('is a function', () => {
      expect(typeof myLastIndexOf).toEqual('function');
    });
  
    it('returns a number', () => {
      let returnedValue = myLastIndexOf([1, 2, 3], 2);
      expect(typeof returnedValue).toEqual('number');
    });
  
    it('returns the last index at which the searchValue appears in the array', () => {
      let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10);
      expect(returnedValue).toEqual(3);
    });
  
    it('returns -1 if the searchValue does not exist in the array', () => {
      let returnedValue = myLastIndexOf(['peanut', 'cashew', 'walnut'], 'lemon');
      expect(returnedValue).toEqual(-1);
    });
  
    it('returns the last index of the searchValue that is less than the startIdx', () => {
      let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10, 2);
      expect(returnedValue).toEqual(1);
    });
  
  });

  