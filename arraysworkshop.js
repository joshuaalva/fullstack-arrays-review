// 01 Even and Odd 
function evenAndOdd(arr){
    // create arrays to store even and odd numbers
    let evenArr = [];
    let oddArr = [];
    
    for(let i = 0; i < arr.length; i++){
      let num = arr[i];
      
      if(num % 2){
        oddArr.push(num);
      } else {
        evenArr.push(num);
      }
    }
    
    return [evenArr, oddArr];
  };

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
  
  