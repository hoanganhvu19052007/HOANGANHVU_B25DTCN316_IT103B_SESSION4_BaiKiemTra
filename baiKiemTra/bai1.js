let n = prompt(` Mời bạn nhập vào để kiểm tra số chẵn lẻ`);

if (n % 2 == 0) {
  console.log(` Số ${n} là số chẵn`);
} else {
  console.log(` Số ${n} là số lẻ`);
}

if (n > 0) {
  console.log(` Số ${n} là số dương`);
} else if (n == 0) {
  console.log(` Số ${n} là số 0`);
} else {
  console.log(` Số ${n} là số âm`);
}
if (n > 0) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i} `);
  }
} else {
  console.log(`Giá trị ${n} không hợp lệ để tạo dãy số `);
}
