// Soal No. 1
for (let i = 50; i <= 100; i++) {
  if (i <= 60) {
    console.log(`${i} adalah KURANG`);
  } else if (i > 60 && i <= 70) {
    console.log(`${i} adalah CUKUP`);
  } else if (i > 70 && i <= 80) {
    console.log(`${i} adalah BAIK`);
  } else {
    console.log(`${i} adalah LUAR BIASA`);
  }
}

// Soal No. 2
const fibonnaci = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      result.push(i);
    } else {
      const sum = result[i - 2] + result[i - 1];
      result.push(sum);
    }
  }
  return result;
};

console.log(...fibonnaci(20));

// Soal No. 3
const triangle = (x) => {
  const result = [];
  for (let i = 1; i <= x; i++) {
    const temp = [];
    for (let j = 1; j <= i; j++) {
      temp.push('*');
    }
    result.push(temp);
  }
  return result;
};

const triangleSum = (res) => {
  const endResult = [];
  for (let i = 0; i < res.length; i++) {
    endResult.push(...res[i]);
    endResult.push('\n');
  }
  return endResult;
};

console.log(...triangleSum(triangle(5)));

// Soal No. 4
const numberToWords = (x) => {
  const numberWords = [
    '',
    'Satu',
    'Dua',
    'Tiga',
    'Empat',
    'Lima',
    'Enam',
    'Tujuh',
    'Delapan',
    'Sembilan',
  ];

  if (x <= 2000) {
    return 'Angka harus lebih besar dari 2000';
  } else if (x >= 10000) {
    return 'Angka harus 4 digit';
  }

  const thousands = Math.floor(x / 1000);
  const hundreds = Math.floor((x % 1000) / 100);
  const tens = Math.floor((x % 100) / 10);
  const ones = x % 10;

  let thousansdWord = '';
  let hundredsWord = '';
  let tensWord = '';
  let onesWord = '';

  if (thousands > 0) {
    thousansdWord = numberWords[thousands] + ' Ribu ';
  }

  if (hundreds > 0) {
    hundredsWord = numberWords[hundreds] + ' Ratus ';
  }

  if (tens > 0) {
    if (tens === 1) {
      tensWord = 'Sepuluh ';
    } else {
      tensWord = numberWords[tens] + ' Puluh ';
    }
  }

  if (ones > 0) {
    onesWord = numberWords[ones];
  }

  return thousansdWord + hundredsWord + tensWord + onesWord;
};

const x1 = 1234;
const x2 = 8500;
const x3 = 70001;

console.log(`${x1} = ${numberToWords(x1)}`);
console.log(`${x2} = ${numberToWords(x2)}`);
console.log(`${x3} = ${numberToWords(x3)}`);
