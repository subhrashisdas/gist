// console.log(Date.now());

// abc
// bac
// aabb
// ba

// aab -> {a: 2, b: 1 }
// aabb -> {a: 2, b: 2}

// O(N)
// 0(N)

function convertToMap(str /* string */) {
  return str.split("").reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}

// console.log(convertToMap("aab"));
// console.log(convertToMap("aabb"));

function anagrams(str1, str2) {
  let len1 = str1.length;
  let len2 = str1.length;

  const map1 = convertToMap(str1);
  const map2 = convertToMap(str2);

  for (const [key, value] of Object.entries(map1)) {
    len1 = -value;
    if (map2[key] !== value) {
      return false;
    } else if (map2[key] === value) {
      delete map2[key];
    }
  }

  if (Object.entries(map2).length) {
    return false;
  } else {
    return true;
  }
}

console.log(anagrams("aab", "aba")); // true
console.log(anagrams("aabb", "abab")); // true
console.log(anagrams("aabb", "aba")); // false
console.log(anagrams("aabb", "ababc")); // false
console.log(anagrams("abc", "def")); // false

// abc - abc
