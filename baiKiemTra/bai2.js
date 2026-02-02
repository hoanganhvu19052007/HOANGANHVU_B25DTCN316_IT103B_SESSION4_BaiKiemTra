let n = 50;
let count = 0;
for (let i = 1; i <= n; i++) {
  if (i % 3 == 0) {
    console.log(` Fizz`);
    count += i;
  } else if (i % 5 == 0) {
    console.log(` Buzz`);
  }
}

for (let i = 1; i < n; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(` Fizz Buzz`);
  }
}

console.log(`Tông tất cả các chữ số đã in ra Fizz là: ${count} `);


