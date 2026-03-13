function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

// Test
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));