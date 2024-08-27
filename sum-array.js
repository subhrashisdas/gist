// arr = [1,2,3,4,5,6,7]
// sum = 10
// figure out sub array, results to sum

function sum(arr = []) {
  return arr.reduce((a, i) => a + i, 0);
}

function solution(arr = [], sumValue) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      if (sum(subArray) === sumValue) {
        results.push(subArray);
      }
    }
  }
  return results;
}

console.log(JSON.stringify(solution([1, 2, 3, 3, 6], 6)));
