function getNumbersInRange(start, end) {
  let highest = Math.max (start,end)
  list = []
  for (let i = start; i <= highest; i++){
    list.push(i)
  }
  return list
}

console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]