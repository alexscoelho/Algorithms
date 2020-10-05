//  Keep track of seen characters with a Set data structure, fail when
//  a repeated character is found.

// 1st version

// const uniqueChar = str => {
  
//     let chars = new Set();
    
//     for (let i= 0; i < str.length; i++) {
//       if (chars.has(str[i])) {
//         return false;
//     } 
//       chars.add(str[i]);
//     }
//     return true;
//   }
  
//   console.log(uniqueChar("agua"));

// 2nd version

// const uniqueChar = str => {

//     let arr = str.split("").sort();

//     for (let i= 0; i< arr.length; i++) {
//         if (arr[i] === arr[i-1]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(uniqueChar("agua"));

const checkPermutation = (stringOne,stringTwo) => {
    // different lenght or lenght 0 return false
    if ( stringOne.length == 0 || stringOne.length !== stringTwo.length) {
        return false
    // sort both str
    } else {

        var sortedStringOne = stringOne.split('').sort().join('');
        var sortedStringTwo = stringTwo.split('').sort().join('');

        console.log(sortedStringOne, sortedStringTwo)
        return sortedStringOne === sortedStringTwo
        
    }
};

console.log(checkPermutation("casa", "saca"));
