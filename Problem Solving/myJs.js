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
      if (count[lowerCase]) count[lowerCase]++;
      else count[lowerCase] = 1;
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
