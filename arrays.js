
// -------Exercise 1 Is Unique -----------

// const isUnique = string => {
//     let chars = [];
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] in chars) {
//             return false
//         }
//         chars.push(string[i])
//     }
//     return true
// }


// console.log(isUnique('OOOO'))

// -------Exercise 2 Check Permutation-----------

// const isPermutation = (string1,string2) => {

//     if (string1.length === 0 || string1.length !== string2) {
        
//         return false
    
//     } else {

//         let sortString1 = string1.split('').sort().join('');
//         let sortString2 = string2.split('').sort().join('');

//         return sortString1 === sortString2
//     } 
// }

// console.log(isPermutation('casa','loca'));

// -------Exercise 3 URLify-----------

// const replaceSpace = (string) => {

//     let result = []

//     for (let i=0; i<string.length -1; i++) {
//         if (string[i] === ' ') {
//             result.push('%20')
//         } else {
//             result.push(string[i])
//         }
//     }
//     return result.join('')
// }

// console.log(replaceSpace('Mr John Smith'))

// -------Exercise 4 Palindrome Permutation-----------

// const palindromePermutation = (string) => {
//     if (string.length % 2 !== 0) {
//         return false
//     }  else {
//         return string.split("").reverse().join("");
//     }
// }

// console.log(palindromePermutation('Tact Coa'))

// ------------ Degree of an array --------------

// function writeOutput(inputData) {
//     let obj = {};
//     for (let i = 0; i < inputData.length; i++) {
//         if (obj.hasOwnProperty(inputData[i])) obj[inputData[i]] ++
//         else obj[inputData[i]] = 1
//     }
//     const arrayDegree = Math.max(...Object.values(obj));
//     const itemDegree = Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b);

    
//     return arrayDegree;
// }

// console.log(writeOutput([1,2,2,3,1]))

// ----- Exercise 5 One Away -------

// const checkEdit = (string1,string2) => {
//     let sortedString1 = string1.split('').sort().join('');
//     let sortedString2 = string2.split('').sort().join('');
//     let editCount = 0;

//     if (sortedString1.length === sortedString2.length) {
//         for (let i=0; i < sortedString1.length; i++) {
//             if (sortedString1[i] !== sortedString2[i]) ediCount++
//         }

//     } else if ((sortedString1.length !== sortedString2.length) && (sortedString1 !== sortedString2)) {
//         return false
//     }

//     if (editCount > 1) return false

//     return true

// }
// console.log(checkEdit('hello',"olleho"));

// // ----- Exercise 6 String Compression -------
// const stringCompression = string => {
//     let object = {};
//     for (let i = 0; i < string.length; i++) {
        
//         if (object.hasOwnProperty(string[i])) object['string[i]'] = 'hey'
//         // console.log(object.hasOwnProperty(string[i]), string[i]);
        
//         object[string[i]] = 1 
//     }
//     return object
//   }
  
//   console.log(stringCompression('Hello'));

// var d = new Date();
// console.log(d, d.getDay())

// const startsUpperCase = string => {
//     if ((string.charCodeAt(0) >= 65) && (string.charCodeAt(0) <= 122)) {
//         return `${string[0].toUpperCase()}${string.substring(1)}` === string
//     } else {
//         return false
//     }
    
// }
// console.log(startsUpperCase('zomodo') )

// const reorganize = a => {
//     let result = [];
//     let firstHalf = [];
    
//     for (let i=0; i<a.length/2;i++) {
//         firstHalf.push(a[i])
//     }

//     let secondHalf = a.splice(a.length/2, a.length-1).sort()

//     for (let j=0; j<secondHalf.length; j++) {
//         firstHalf.splice(b+1,0,secondHalf[j])
        
//     }

//     return firstHalf
// }
// console.log(reorganize([1,3,5,6,4,2]))

// let myMap = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
//   ])

//   console.log(myMap)

let myArray = ['value1', 'value2', 'value3', 'value3']

let mySet = new Set(myArray)

console.log(mySet)