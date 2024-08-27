// Given a string, find the length of the longest substring without repeating characters
// "aab" -> "ab"
// N^2

function ifNonRepeating(str, first, last) {
  const strMap = {};
  for (let i = first; i <= last; i++) {
    if (strMap[str[i]]) {
      return false;
    } else {
      strMap[str[i]] = true;
    }
  }
  return true;
}

console.log(ifNonRepeating("aabc", 0, 3)); // false
console.log(ifNonRepeating("aabc", 1, 3)); // true

function solution(str) {
  if (!str.length) {
    return 0;
  }
  let largest = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (ifNonRepeating(str, i, j)) {
        largest = Math.max(largest, j - i + 1);
      }
    }
  }
  return largest;
}

console.log(solution("aabbccddeeffgghhii")); // 2
console.log(solution("ababababab")); // 2
console.log(solution("abc!@#abc!@#")); // 6
console.log(solution("abcdeabcde")); // 5
console.log(solution("a1b2c3d4")); // 8 //
console.log(solution("aa")); // 1
console.log(solution("pwwkew")); // 3
console.log(solution("abcabcbb")); // 3


// abcd e abcdf
//  ^
//           ^
// 
