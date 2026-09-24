/* function getNumbersInRange(start, end) {
  let highest = Math.max (start,end)
  list = []
  for (let i = start; i <= highest; i++){
    list.push(i)
  }
  return list
}

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8] */

/* function sumRange(start, end) {
  let total = 0
  for ( let i = start; i <= end; i++){
    total += i
  }
  return total;
}


console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4 */

function countdown(n) {
  list = []
  while (n > 0){
    list.push(n);
    n -= 1;
  }
  return list;
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]