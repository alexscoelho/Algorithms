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

// let arr = ["car", "plane", "ship"];
// let index = 1;

// const newArr = arr.filter((item,i) => {
//     console.log("arr[i]:",arr[i])
//     console.log("arr[index]:", arr[index])
//     return item[i] !== item[index];
// })

// console.log(newArr)

// const clients = [
//     { id: 1, taxNumber: '86620855', name: 'Bob Dylan'},
//     { id: 2, taxNumber: '7317855K', name: 'John Meyer'},
//     { id: 3, taxNumber: '73826497', name: 'Andrea Skileto'},
//     { id: 4, taxNumber: '88587715', name: 'Maria Perez'},
//     { id: 5, taxNumber: '94020190', name: 'Shania Twonk'},
//     { id: 6, taxNumber: '99804238', name: 'Djork Wrek' }
//   ];
//   const accounts = [
//     { clientId: 6, bankId: 1, balance: 15000 },
//     { clientId: 1, bankId: 3, balance: 18000 },
//     { clientId: 5, bankId: 3, balance: 135000 },
//     { clientId: 2, bankId: 2, balance: 5600 },
//     { clientId: 3, bankId: 1, balance: 23000 },
//     { clientId: 5, bankId: 2, balance: 15000 },
//     { clientId: 3, bankId: 3, balance: 45900 },
//     { clientId: 2, bankId: 3, balance: 19000 },
//     { clientId: 4, bankId: 3, balance: 51000 },
//     { clientId: 5, bankId: 1, balance: 89000 },
//     { clientId: 1, bankId: 2, balance: 1600 },
//     { clientId: 5, bankId: 3, balance: 37500 },
//     { clientId: 6, bankId: 1, balance: 19200 },
//     { clientId: 2, bankId: 3, balance: 10000 },
//     { clientId: 3, bankId: 2, balance: 5400 },
//     { clientId: 3, bankId: 1, balance: 9000 },
//     { clientId: 4, bankId: 3, balance: 13500 },
//     { clientId: 2, bankId: 1, balance: 38200 },
//     { clientId: 5, bankId: 2, balance: 17000 },
//     { clientId: 1, bankId: 3, balance: 1000 },
//     { clientId: 5, bankId: 2, balance: 600 },
//     { clientId: 6, bankId: 1, balance: 16200 },
//     { clientId: 2, bankId: 2, balance: 10000 }
//   ]
//   const banks = [
//     { id: 1, name: 'Bank of America' },
//     { id: 2, name: 'Citibank' },
//     { id: 3, name: 'China Central Bank' }
//   ];

// for ( x=0; x< clients.length; x++) {
//   for (y=0; y< accounts.length; y++) {
//     if (clients[x]['id'] === accounts[y]['clientId']) {
//       clients[x].bankId = accounts[y]['bankId'];
//     }
//   }
// }
// // console.log(clients)

// function compare(a, b) {
//   // Use toUpperCase() to ignore character casing
//   const clientA = a.name.toUpperCase();
//   const clientB = b.name.toUpperCase();

//   let comparison = 0;
//   if (clientA  > clientB) {
//     comparison = 1;
//   } else if (clientA < clientB) {
//     comparison = -1;
//   }
//   return comparison;
// }

// // const bankNames = banks.map(bank => bank['name'])

// const sortedClientes = clients.sort(compare)

// console.log(sortedClientes)
// console.log(bankNames)


// let resultObject = {};
// for ( z=0; z< sortedClientes.length; z++) {
//   for (p=0; p< banks.length; p++) {
//     if (sortedClientes[z]['bankId'] === banks[p]['id']) {
//       resultObject[banks[p]['name']] = sortedClientes[z]['taxNumber'];
//     }
//   }
// }

// console.log(resultObject)




// let bankNames = banks.map(bank => bank['name'])
// let bankObject = bankNames.reduce((acc, elem) => {
//   acc[elem] = elem // or what ever object you want inside
//   return acc
// }, {})
// console.log(bankObject) 














