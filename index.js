//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  if (num.toString().includes("-")) {
    return num;
  } else if (num == 0) {
    return num;
  } else {
    let number = num.toString();
    return Number("-" + number);
  }
}

//Best rated Function find in codewars

function makeNegative2(num){
    return num > 0 ? -num : num
}

console.log(makeNegative(0.12));


//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return Number.isInteger(n/x) && Number.isInteger(n/y) ? true : false
  }

//Best rated Function find in codewars

function isDivisible2(n, x, y) {
    return n % x === 0 && n % y === 0
  }

console.log(isDivisible(3,1,3))


// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//Best rated Function find in codewars (mine was the same)

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
  }

console.log(capitalizeWord("como"))


// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum (numbers) {
   return numbers.length > 0 ? numbers.reduce((a, b) => a + b) : 0
}

//Best rated Function find in codewars

function sum2(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }

console.log(sum([1, 5.2, 4, 0, -1]))


//The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    let enoughCap = cap - on - wait
    return enoughCap > 0 ? 0 : Math.abs(enoughCap)
  }

//Best rated Function find in codewars

function enough2(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }
  
console.log(enough(100, 60, 50))

console.log(+true)

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let total = 0
   arrayOfSheep.forEach(element => {
       return element ? total++ : null
   });
   return total
  }

//Best rated Function find in codewars

function countSheeps2(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

const arraySheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]

console.log(countSheeps(arraySheeps))  