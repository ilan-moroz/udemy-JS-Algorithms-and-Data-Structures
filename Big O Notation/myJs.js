//! ** TIME COMPLEXITY **
// slower ---- O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// faster ---- O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

// nested loops ----  O(n**2)
const printAllPairs = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// max 4 loops ---- O(1)
const logAtMost5 = n => {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i);
  }
};

//* OBJECTS
let instructor = {
  firstName: 'John',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3],
};
// insertion ---- O(1)
// removal ---- O(1)
// access ---- O(1)
// searching ---- O(n)
// Object.keys ---- O(n)
// Object.values ---- O(n)
// Object.entries ---- O(n)
// hasOwnProperty ---- O(1)

//* ARRAYS
// access ---- O(1)
// searching ---- O(n)
// push,pop ---- O(1)
// unshift,shift ---- O(n)
// concat,slice,splice ---- O(n)
// sort ---- O(n*log n)
// forEach,map,filter,reducer,etc.. ---- O(n)

//! ** SPACE COMPLEXITY **
// O(1)
const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

// (O)n
const double = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr();
};
