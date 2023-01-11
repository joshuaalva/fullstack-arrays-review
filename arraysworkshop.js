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
function evenAndOdd(arr){
    let evens = [];
    let odds = [];
    
    for(let i = 0; i < arr.length; i++){
      let num = arr[i];
      if(num % 2 === 1){
        odds.push(num);
      } else {
        evens.push(num);
      }
    }
    
    return [evens, odds];
  }

describe('evenAndOdd', () => {

    it('is a function', () => {
      expect(typeof evenAndOdd).toEqual('function');
    });
  
    it('returns an array', () => {
      let returnedValue = evenAndOdd([1, 2, 3]);
      expect(Array.isArray(returnedValue)).toEqual(true);
    });
  
    it('returns an array where the first element has all the even numbers from the original array', () => {
      let returnedValue = evenAndOdd([10, 15, 20, 25, 30]);
      expect(returnedValue[0]).toEqual([10, 20, 30]);
    });
  
    it('returns an array where the second element has all the odd numbers from the original array', () => {
      let returnedValue = evenAndOdd([7, 14, 21, 28, 35]);
      expect(returnedValue[1]).toEqual([7, 21, 35]);
    });
  
  });

  // 02 Array Flattner 

function arrayFlattener(twoDimensionalArray) {

    // create the array to return at the end of the function
    let flatArray = [];
  
    // loop through the original twoDimensionalArray
    for (let i = 0; i < twoDimensionalArray.length; i++) {
  
      // store each element in a variable (optional)
      let element = twoDimensionalArray[i];
  
      // if the element is an array...
      if (Array.isArray(element)) {
  
        // loop through the inner array
        for (let j = 0; j < element.length; j++) {
  
          // store each element from the inner array in a variable (also optional)
          let innerElement = element[j];
  
          // push each element from the inner array into the flatArray
          flatArray.push(innerElement);
        }
      }
  
      // else, the element is just a number and can be pushed into flatArray
      else {
        flatArray.push(element);
      }
    }
  
    // return the flatArray after the for loop
    return flatArray;
  }
  
  describe('arrayFlattener', () => {
  
    it('is a function', () => {
      expect(typeof arrayFlattener).toEqual('function');
    });
  
    it('returns an array', () => {
      let returnedValue = arrayFlattener([1, 2, [3]]);
      expect(Array.isArray(returnedValue)).toEqual(true);
    });
  
    it('returns a one-dimensional array', () => {
      // get the return value from the function
      let returnedValue = arrayFlattener('this is crazy');
  
      // make sure none of the elements in the array are an array
      let foundInnerArray = false;
  
      for (let i = 0; i < returnedValue.length; i++) {
        let element = returnedValue[i];
  
        if (Array.isArray(element)) {
          foundInnerArray = true;
          break;
        }
      }
  
      expect(foundInnerArray).toEqual(false);
    });
  
    it('returns a one-dimensional array with the correct elements', () => {
      let returnedValue = arrayFlattener(['I', 'am', 'working', ['on', 'another', 'level']]);
      expect(returnedValue).toEqual(['I', 'am', 'working', 'on', 'another', 'level']);
    });
  
  });
  