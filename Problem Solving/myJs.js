//! Problem solving
// * understand the problem
// * explore concrete examples
// * break it down
// * solve/simplify
// * Look Back and Refactor

//! Understand the problem
//* 1.Can i restate the problem in my own words
//* 2.what are the inputs that go into the problem
//* 3.what are the outputs that should come from the solution to the problem
//* 4.can the outputs be determined from the inputs(do i have enough info to solve the problem)?
//* 5.how to should i label the important pieces of data that are a part the problem

// ! simplify
//* Find the core difficulty in what you're trying to do
//* Temporarily ignore that difficulty
//* Write a simplified solution
//* Then incorporate that difficulty back in

const countChar = str => {
  const count = {};
  for (let char of str) {
    const lowerCase = char.toLowerCase();
    if (/[a-z0-9]/.test(lowerCase))
      count[lowerCase] ? count[lowerCase]++ : (count[lowerCase] = 1);
  }
  return count;
};

console.log(countChar('my phone number!!!! is 2222!@#$%'));

const countChar2 = str => {
  return str.split('').reduce((acc, char) => {
    const lowerCase = char.toLowerCase();
    if (lowerCase !== ' ') acc[lowerCase] = (acc[lowerCase] || 0) + 1;
    return acc;
  }, {});
};

console.log(countChar2('a    baAAAAb'));

// ! frequency counter
// O(n**2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3], [4, 1, 9]));
console.log(same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// anagram challenge
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram(' ', ' '));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
