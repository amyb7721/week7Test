// 1. SumZero
// function numbers([N], sum) {
//     x = 0;
//     y = N.length - 1;
//     while (x < y) {
//       if (N[x] + N[y] == sum)
//         return true;
//       else if (N[x] + N[y] < sum)
//         x++;
//       return false
//     }}
  
//   console.log(numbers([1]))

  // 2. unque characters

//   function uniqueString(str) {
//     let queue =str.split('');
//     let arr = [];
//     while (queue.length > 0) {
//         let current = queue.shift();
//         if (!arr.includes(current)) {
//             arr.push(current);
//         }
//     }
//     return arr.join('');
// }

// console.log(uniqueString("Monday"))

// 3. pangram sentence


// function isPangram(string){
//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
//     for (let i = 0; i < alphabet.length; i++) {
//       if(strArr.indexOf(alphabet[i]) < 0){
//         return false;
//       }
//     }
//     return true;
//   }

//   console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//   4. 

function findLongestWord(str) {
    return str.length;
  }
  console.log(findLongestWord("hi hello"));
  
 