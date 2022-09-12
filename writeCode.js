// 1. SumZero

// Time complexity: O(n^2)
//   Space Complexity: O(1)
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0;  k < arr.length; k++) {
          if (i !== k && arr [i] + arr [k] === 0) {
            return true
          }
        }
    }
    return false
}

console.log(addToZero ([7,8,3,6]))

  // 2. unque characters


//   Time complexity:
//   Space Complexity:
  function uniqueChar(str) {
    for (let i = 0; i < str.length; k++) {
      for (let k = 0; k <str.length; k++) {
        if (i !== k && str[i] + str[k] === 0) {
          return false 
        }
      }
      return true
    }
  }

console.log(uniqueChar("Monday"))

// 3. pangram sentence

// Time complexity: O(n)
//   Space Complexity:  O(1)


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//   4. 

function findLongestWord(str) {
    return str.length;
  }
  console.log(findLongestWord("hi hello"));
  
 