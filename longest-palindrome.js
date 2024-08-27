// Longest palindrome in a string
// ["c", "a", "b", "a", "c", "a", "b", "a"]
// ["c", "a", "b", "a", "c"]

// odd & even
// [1, 2, 3], [1, 2, 3, 4]
// 1
function ifPalindrome(arr = []) {
  const middle = Math.floor(arr.length / 2) - 1;
  for (let i = 0; i <= middle; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// test cases
// console.log(ifPalindrome([]));
// console.log(ifPalindrome([1]));
// console.log(ifPalindrome([1, 1]));
// console.log(ifPalindrome([1, 2, 1]));
// console.log(ifPalindrome([1, 2, 2, 1]));

// console.log(ifPalindrome([1, 2]));
// console.log(ifPalindrome([1, 2, 3]));
// console.log(ifPalindrome([1, 2, 1, 1]));

function solution(arr = []) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      if (ifPalindrome(subArray)) {
        result = Math.max(result, subArray.length);
      }
    }
  }
  return result;
}

console.log(solution("abacabac".split("")));
console.log(solution("malayalam".split("")));
