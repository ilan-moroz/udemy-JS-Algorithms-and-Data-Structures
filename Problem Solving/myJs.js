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

// ! frequency counter pattern
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

// anagram challenge ---- O(n)
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter = {};

  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!frequencyCounter[char]) return false;
    else frequencyCounter[char] -= 1;
  }
  return true;
};

console.log(validAnagram(' ', ' '));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));

// challenge 1
const sameFrequency = (num1, num2) => {
  const stringNum1 = num1.toString();
  const stringNum2 = num2.toString();
  if (stringNum1.length !== stringNum2.length) return false;

  let frequencyCounter = {};

  for (let num of stringNum1) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  for (let num of stringNum2) {
    if (!frequencyCounter[num]) return false;
    else frequencyCounter[num] -= 1;
  }
  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));

// ! multiple pointers pattern

// O(n**2)
const sumZero = arr => {
  for (let num of arr) {
    for (let i = arr.indexOf(num) + 1; i < arr.length; i++) {
      if (num + arr[i] === 0) return [num, arr[i]];
    }
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-1, -2, 2, 3]));

// O(n)
const sumZero2 = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero2([-2, 0, 1, 3]));
console.log(sumZero2([-2, -1, 2, 3]));

// O(n)
const countUniqueValues = arr => {
  if (arr.length === 0) return 0;
  let first = 0;
  let second = 1;
  while (second < arr.length) {
    if (arr[first] === arr[second]) second++;
    else {
      first++;
      arr[first] = arr[second];
    }
  }
  return first + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));

// ! sliding window pattern
// O (n**2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));

// O(n)
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4));
