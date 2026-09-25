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

/* function countdown(n) {
  list = []
  while (n > 0){
    list.push(n);
    n -= 1;
  }
  return list;
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdown(1)); // [1]
console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1] */

/* function countVowels(str) {
  count = str.length
  vowels = 0
  for (i = 0; i < count; i++){
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
      vowels += 1
    }
  }
  return vowels;
}

console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5 */

function multiplicationTable(n) {
  list = []
  for (i = 1; i < n+1; i++){
    for (h = 1; h < n+1; h++){
      list.push(i*h);
    }
    list.push("/n")
  }
  return list;
}

console.log(multiplicationTable(3));
// "1 2 3\n2 4 6\n3 6 9"
console.log(multiplicationTable(5));