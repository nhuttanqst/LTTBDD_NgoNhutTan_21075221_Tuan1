// 1. In các số từ 1 đến 10
document.write("<h3>1. In các số từ 1 đến 10:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// 2. In các số lẻ nhỏ hơn 100
document.write("<h3>2. In các số lẻ nhỏ hơn 100:</h3>");
for (let i = 1; i < 100; i += 2) {
  document.write(i + "<br>");
}

// 3. In bảng cửu chương của 7
document.write("<h3>3. In bảng cửu chương của 7:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(`7 x ${i} = ${7 * i}<br>`);
}

// 4. In tất cả các bảng cửu chương từ 1 đến 10
document.write("<h3>4. In tất cả các bảng cửu chương từ 1 đến 10:</h3>");
for (let i = 1; i <= 10; i++) {
  document.write(`<strong>Bảng cửu chương của ${i}:</strong><br>`);
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} x ${j} = ${i * j}<br>`);
  }
  document.write("<br>");
}

// 5. Tính tổng các số từ 1 đến 10
document.write("<h3>5. Tính tổng các số từ 1 đến 10:</h3>");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
document.write(`Tổng các số từ 1 đến 10 là ${sum}<br>`);

// 6. Tính 10!
document.write("<h3>6. Tính 10!:</h3>");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
document.write(`10! = ${factorial}<br>`);

// 7. Tính tổng các số chẵn lớn hơn 10 và nhỏ hơn 30
document.write("<h3>7. Tính tổng các số chẵn lớn hơn 10 và nhỏ hơn 30:</h3>");
let evenSum = 0;
for (let i = 12; i < 30; i += 2) {
  evenSum += i;
}
document.write(`Tổng các số chẵn lớn hơn 10 và nhỏ hơn 30 là ${evenSum}<br>`);

// 8. Tạo một hàm để chuyển đổi từ Celsius sang Fahrenheit
document.write("<h3>8. Chuyển đổi từ Celsius sang Fahrenheit:</h3>");
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
document.write(`25°C là ${celsiusToFahrenheit(25)}°F<br>`);

// 9. Tạo một hàm để chuyển đổi từ Fahrenheit sang Celsius
document.write("<h3>9. Chuyển đổi từ Fahrenheit sang Celsius:</h3>");
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
document.write(`77°F là ${fahrenheitToCelsius(77)}°C<br>`);

// 10. Tính tổng các số trong một mảng số
document.write("<h3>10. Tính tổng các số trong một mảng số:</h3>");
function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
document.write(
  `Tổng của mảng [10, 22, 31, 45, 15] là ${sumArray([10, 22, 31, 45, 15])}<br>`
);

// 11. Tính trung bình của các số trong một mảng số
document.write("<h3>11. Tính trung bình của các số trong một mảng số:</h3>");
function averageArray(numbers) {
  let sum = sumArray(numbers);
  return sum / numbers.length;
}
document.write(
  `Trung bình của mảng [11, 32, 30, 43, 77] là ${averageArray([
    11, 32, 30, 43, 77,
  ])}<br>`
);

// 12. Tạo một hàm nhận một mảng số làm đối số và trả về một mảng chỉ chứa các số dương
document.write("<h3>12. Trả về một mảng chỉ chứa các số dương:</h3>");
function getPositiveNumbers(numbers) {
  return numbers.filter((number) => number > 0);
}
document.write(`[${getPositiveNumbers([-10, 4, -6, 33, 82]).join(", ")}]<br>`);

// 13. Tìm số lớn nhất trong một mảng số
document.write("<h3>13. Tìm số lớn nhất trong một mảng số:</h3>");
function findMaxNumber(numbers) {
  return Math.max(...numbers);
}
document.write(`${findMaxNumber([29, 86, 17, 3, 58, 43])}<br>`);

// 14. In 10 số Fibonacci đầu tiên mà không dùng đệ quy
document.write("<h3>14. In 10 số Fibonacci đầu tiên không dùng đệ quy:</h3>");
function In10SoFibonacci() {
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  document.write(`[${fib.join(", ")}]<br>`);
}
In10SoFibonacci();

// 15. Tạo một hàm để tìm số Fibonacci thứ n sử dụng đệ quy
document.write("<h3>15. Tìm số Fibonacci thứ n sử dụng đệ quy:</h3>");
function findNthFibonacci(n) {
  if (n <= 1) return n;
  return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);
}
document.write(`${findNthFibonacci(10)}<br>`);

// 16. Tạo một hàm trả về một giá trị Boolean xác định xem một số có phải là số nguyên tố hay không
document.write("<h3>16. Kiểm tra số nguyên tố:</h3>");
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
document.write(`11: ${isPrime(11)}<br>`);
document.write(`8: ${isPrime(8)}<br>`);

// 17. Tính tổng các chữ số của một số nguyên dương
document.write("<h3>17. Tính tổng các chữ số của một số nguyên dương:</h3>");
function sumOfDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
document.write(`${sumOfDigits(52698)}<br>`);

// 18. In 100 số nguyên tố đầu tiên
document.write("<h3>18. In 100 số nguyên tố đầu tiên:</h3>");
function printFirst100Primes() {
  let primes = [];
  let num = 2;
  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  document.write(`[${primes.join(", ")}]<br>`);
}
printFirst100Primes();

// 19. Tạo một hàm trả về trong một mảng p số nguyên tố đầu tiên lớn hơn n
document.write(
  "<h3>19. Trả về trong một mảng p số nguyên tố đầu tiên lớn hơn n:</h3>"
);
function getPrimesGreaterThanN(n, p) {
  let primes = [];
  let num = n + 1;
  while (primes.length < p) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  document.write(`[${primes.join(", ")}]<br>`);
}
getPrimesGreaterThanN(30, 6);

// 20. Xoay một mảng sang trái 1 vị trí
document.write("<h3>20. Xoay một mảng sang trái 1 vị trí:</h3>");

function rotateLeft(arr) {
  let firstElement = arr.shift();
  arr.push(firstElement);
  return arr;
}

let rotatedArray = rotateLeft([29, 40, 67, 11, 59]);
document.write(`Mảng sau khi xoay: [${rotatedArray.join(", ")}]<br>`);

// 21. Xoay một mảng sang phải 1 vị trí
document.write("<h3>21. Xoay một mảng sang phải 1 vị trí:</h3>");

function rotateRight(arr) {
  let lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
}

let rotatedRightArray = rotateRight([29, 40, 67, 11, 59]);
document.write(`Mảng sau khi xoay phải: [${rotatedRightArray.join(", ")}]<br>`);

// 22. Đảo ngược một mảng
document.write("<h3>22. Đảo ngược một mảng:</h3>");

function reverseArray(arr) {
  return arr.reverse();
}

let reversedArray = reverseArray([22, 52, 43, 74, 95]);
document.write(`Mảng sau khi đảo ngược: [${reversedArray.join(", ")}]<br>`);

// 23. Đảo ngược một chuỗi
document.write("<h3>23. Đảo ngược một chuỗi:</h3>");

function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversedString = reverseString("react");
document.write(`Chuỗi sau khi đảo ngược: ${reversedString}<br>`);

// 24. Tạo một hàm kết hợp hai mảng và trả về kết quả là một mảng mới
document.write("<h3>24. Kết hợp hai mảng:</h3>");

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let mergedArray = mergeArrays([12, 42, 55], [88, 25, 56]);
document.write(`Mảng sau khi kết hợp: [${mergedArray.join(", ")}]<br>`);

// 25. Tạo một hàm nhận hai mảng số làm đối số và trả về một mảng chứa tất cả các số hoặc trong mảng thứ nhất hoặc thứ hai nhưng không phải cả hai
document.write(
  "<h3>25. Các phần tử có trong một trong hai mảng nhưng không phải cả hai:</h3>"
);

function arrayDifference(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}

let differenceArray = arrayDifference([11, 69, 30], [11, 30, 245]);
document.write(`Các phần tử khác nhau: [${differenceArray.join(", ")}]<br>`);

// 26. Tạo một hàm nhận hai mảng và trả về một mảng với các phần tử có trong mảng đầu tiên nhưng không có trong mảng thứ hai
document.write(
  "<h3>26. Các phần tử có trong mảng đầu tiên nhưng không có trong mảng thứ hai:</h3>"
);

function arrayDifferenceFirstOnly(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}

let differenceFirstOnlyArray = arrayDifferenceFirstOnly(
  [22, 62, 37],
  [22, 37, 90]
);
document.write(
  `Các phần tử chỉ có trong mảng đầu tiên: [${differenceFirstOnlyArray.join(
    ", "
  )}]<br>`
);

// 27. Tạo một hàm nhận một mảng số và trả về một mảng mới với các phần tử duy nhất
document.write(
  "<h3>27. Tạo một hàm nhận một mảng số và trả về một mảng mới với các phần tử duy nhất:</h3>"
);
function getDistinctElements(arr) {
  return [...new Set(arr)];
}
let distinctArray = getDistinctElements([1, 2, 2, 3, 4, 4, 5]);
document.write(`Các phần tử duy nhất: [${distinctArray.join(", ")}]<br>`);

// 28. Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng
document.write(
  "<h3>28. Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng:</h3>"
);
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
function sumOfFirst100Primes() {
  let primes = [];
  let num = 2;
  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  const sums = primes.reduce((acc, curr) => acc + curr, 0);
  return { sums, primes };
}
let { sums, primes } = sumOfFirst100Primes();
document.write(
  `Tổng của 100 số nguyên tố đầu tiên: ${sum}<br>Số nguyên tố: [${primes.join(
    ", "
  )}]<br>`
);

// 29. In khoảng cách giữa các số nguyên tố đầu tiên
document.write("<h3>29. In khoảng cách giữa các số nguyên tố đầu tiên:</h3>");
function primeDistances() {
  let primes = [];
  let num = 2;
  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  let distances = [];
  for (let i = 1; i < primes.length; i++) {
    distances.push(primes[i] - primes[i - 1]);
  }
  return distances;
}
let distances = primeDistances();
document.write(
  `Khoảng cách giữa các số nguyên tố: [${distances.join(", ")}]<br>`
);

// 30. Tạo một hàm cộng hai số dương có kích thước không giới hạn. Các số được nhận dưới dạng chuỗi và kết quả cũng được trả về dưới dạng chuỗi
document.write("<h3>30. Cộng hai số dương có kích thước không giới hạn:</h3>");
function addLargeNumbers(num1, num2) {
  let carry = 0;
  let result = "";
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  const maxLength = Math.max(num1.length, num2.length);

  for (let i = 0; i < maxLength; i++) {
    let digit1 = parseInt(num1[i] || "0");
    let digit2 = parseInt(num2[i] || "0");
    let sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry) result = carry + result;

  return result;
}
let largeSum = addLargeNumbers("123456789123456789", "987654321987654321");
document.write(`Tổng của hai số lớn: ${largeSum}<br>`);

// 31. Tạo một hàm trả về số lượng từ trong một đoạn văn
document.write("<h3>31. Đếm số lượng từ trong một đoạn văn:</h3>");
function countWords(text) {
  return text.trim().split(/\s+/).length;
}
let wordCount = countWords("Đây là một đoạn văn mẫu với bảy từ.");
document.write(`Số lượng từ: ${wordCount}<br>`);

// 32. Tạo một hàm viết hoa chữ cái đầu tiên của mỗi từ trong đoạn văn
document.write(
  "<h3>32. Viết hoa chữ cái đầu tiên của mỗi từ trong đoạn văn:</h3>"
);
function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
let capitalizedText = capitalizeWords("xin chào thế giới đây là javascript");
document.write(`Đoạn văn viết hoa: ${capitalizedText}<br>`);

// 33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy
document.write(
  "<h3>33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy:</h3>"
);
function sumCommaDelimitedString(str) {
  return str
    .split(",")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
let commaSum = sumCommaDelimitedString("1,2,3,4,5");
document.write(`Tổng của chuỗi phân cách bằng dấu phẩy: ${commaSum}<br>`);

// 34. Tạo một hàm trả về một mảng với các từ trong đoạn văn
document.write(
  "<h3>34. Tạo một hàm trả về một mảng với các từ trong đoạn văn:</h3>"
);
function extractWords(text) {
  return text.split(/\s+/);
}
let wordsArray = extractWords("Đây là một đoạn văn mẫu khác.");
document.write(`Các từ được tách: [${wordsArray.join(", ")}]<br>`);

// 35. Tạo một hàm chuyển đổi chuỗi CSV thành mảng hai chiều
document.write("<h3>35. Chuyển đổi chuỗi CSV thành mảng hai chiều:</h3>");
function csvToArray(csv) {
  return csv.split("\n").map((row) => row.split(","));
}
let csvArray = csvToArray("a,b,c\n1,2,3\n4,5,6");
document.write(
  `Chuỗi CSV thành mảng: [<br>${csvArray
    .map((row) => `[${row.join(", ")}]`)
    .join("<br>")}]<br>`
);

// 36. Tạo một hàm chuyển đổi chuỗi thành mảng các ký tự
document.write("<h3>36. Chuyển đổi chuỗi thành mảng các ký tự:</h3>");
function stringToArray(str) {
  return Array.from(str);
}
let charArray = stringToArray("hello");
document.write(`Chuỗi thành mảng ký tự: [${charArray.join(", ")}]<br>`);

// 37. Tạo một hàm chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự
document.write(
  "<h3>37. Chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự:</h3>"
);
function stringToAsciiArray(str) {
  return Array.from(str).map((char) => char.charCodeAt(0));
}
let asciiArray = stringToAsciiArray("hello");
document.write(`Chuỗi thành mảng mã ASCII: [${asciiArray.join(", ")}]<br>`);

// 38. Tạo một hàm chuyển đổi một mảng chứa mã ASCII thành chuỗi
document.write(
  "<h3>38. Tạo một hàm chuyển đổi một mảng chứa mã ASCII thành chuỗi:</h3>"
);
function asciiArrayToString(asciiArray) {
  return asciiArray.map((code) => String.fromCharCode(code)).join("");
}
let asciiArray2 = [72, 101, 108, 108, 111];
let stringFromAscii = asciiArrayToString(asciiArray2);
document.write(`Chuỗi từ mảng mã ASCII: ${stringFromAscii}<br>`);

// 39. Cài đặt mã hóa Caesar
document.write("<h3>39. Cài đặt mã hóa Caesar:</h3>");
function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const offset = char.toUpperCase() === char ? 65 : 97;
        return String.fromCharCode(
          ((((code - offset + shift) % 26) + 26) % 26) + offset
        );
      }
      return char;
    })
    .join("");
}
let encodedText = caesarCipher("Hello World", 3);
document.write(`Chuỗi sau khi mã hóa Caesar: ${encodedText}<br>`);

// 40. Cài đặt thuật toán sắp xếp bong bóng (Bubble Sort) cho một mảng số
document.write(
  "<h3>40. Cài đặt thuật toán sắp xếp bong bóng (Bubble Sort):</h3>"
);
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let sortedArray = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
document.write(
  `Mảng sau khi sắp xếp bong bóng: [${sortedArray.join(", ")}]<br>`
);

// 41. Tạo một hàm tính khoảng cách giữa hai điểm được định nghĩa bởi tọa độ x, y
document.write(
  "<h3>41. Tính khoảng cách giữa hai điểm được định nghĩa bởi tọa độ x, y:</h3>"
);
function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
let distance = distanceBetweenPoints(0, 0, 3, 4);
document.write(`Khoảng cách giữa hai điểm: ${distance}<br>`);

// 42. Tạo một hàm kiểm tra xem hai hình tròn được định nghĩa bởi tọa độ tâm và bán kính có giao nhau không
document.write("<h3>42. Kiểm tra xem hai hình tròn có giao nhau không:</h3>");
function circlesIntersect(x1, y1, r1, x2, y2, r2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance <= r1 + r2;
}
let intersect = circlesIntersect(0, 0, 5, 7, 7, 5);
document.write(`Hai hình tròn có giao nhau không: ${intersect}<br>`);

// 43. Tạo một hàm nhận một mảng hai chiều và một số, và trả về mảng một chiều chứa cột được chỉ định bởi số đó
document.write(
  "<h3>43. Tạo một hàm trả về mảng chứa cột được chỉ định từ mảng hai chiều:</h3>"
);
function extractColumn(matrix, colIndex) {
  return matrix.map((row) => row[colIndex]);
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let columnArray = extractColumn(matrix, 1);
document.write(`Cột được chỉ định: [${columnArray.join(", ")}]<br>`);

// 44. Tạo một hàm chuyển đổi chuỗi chứa số nhị phân thành số
document.write("<h3>44. Chuyển đổi chuỗi chứa số nhị phân thành số:</h3>");
function binaryStringToNumber(binaryStr) {
  return parseInt(binaryStr, 2);
}
let binaryNumber = binaryStringToNumber("1101");
document.write(`Số từ chuỗi nhị phân: ${binaryNumber}<br>`);

// 45. Tạo một hàm tính tổng tất cả các số trong một mảng không đều (có thể chứa số hoặc mảng số ở nhiều cấp độ khác nhau)
document.write("<h3>45. Tính tổng tất cả các số trong mảng không đều:</h3>");
function sumJaggedArray(arr) {
  return arr.reduce((sum, item) => {
    if (Array.isArray(item)) {
      return sum + sumJaggedArray(item);
    }
    return sum + item;
  }, 0);
}
let jaggedArray = [1, [2, [3, 4], 5], 6];
let totalSum = sumJaggedArray(jaggedArray);
document.write(`Tổng của mảng không đều: ${totalSum}<br>`);

// 46. Tìm số lớn nhất trong một mảng không đều của các số hoặc mảng số
document.write("<h3>46. Tìm số lớn nhất trong mảng không đều:</h3>");
function findMaxInJaggedArray(arr) {
  return arr.reduce((max, item) => {
    if (Array.isArray(item)) {
      return Math.max(max, findMaxInJaggedArray(item));
    }
    return Math.max(max, item);
  }, -Infinity);
}
let maxNumber = findMaxInJaggedArray(jaggedArray);
document.write(`Số lớn nhất trong mảng không đều: ${maxNumber}<br>`);

// 47. Sao chép sâu một mảng không đều với các số hoặc mảng khác vào một mảng mới
document.write("<h3>47. Sao chép sâu một mảng không đều:</h3>");
function deepCopyJaggedArray(arr) {
  return arr.map((item) => {
    if (Array.isArray(item)) {
      return deepCopyJaggedArray(item);
    }
    return item;
  });
}
let copiedArray = deepCopyJaggedArray(jaggedArray);
document.write(`Mảng sao chép sâu: [${JSON.stringify(copiedArray)}]<br>`);

// 48. Tạo một hàm trả về từ dài nhất trong một chuỗi
document.write("<h3>48. Tạo một hàm trả về từ dài nhất trong một chuỗi:</h3>");
function longestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
let longest = longestWord("Tìm từ dài nhất trong đoạn văn này");
document.write(`Từ dài nhất: ${longest}<br>`);

// 49. Xáo trộn một mảng các chuỗi
document.write("<h3>49. Xáo trộn một mảng các chuỗi:</h3>");
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
let shuffledArray = shuffleArray(["apple", "banana", "cherry", "date"]);
document.write(`Mảng sau khi xáo trộn: [${shuffledArray.join(", ")}]<br>`);

// 50. Tạo một hàm nhận n làm đối số và trả về một mảng gồm n số ngẫu nhiên từ 1 đến n. Các số phải là duy nhất trong mảng.
document.write("<h3>50. Tạo mảng số ngẫu nhiên duy nhất từ 1 đến n:</h3>");
function uniqueRandomNumbers(n) {
  let numbers = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
}
let randomNumbers = uniqueRandomNumbers(10);
document.write(
  `Mảng số ngẫu nhiên duy nhất: [${randomNumbers.join(", ")}]<br>`
);

// 51. Tìm tần suất của các chữ cái trong một chuỗi. Trả về kết quả dưới dạng mảng các mảng. Mỗi mảng con có 2 phần tử: chữ cái và số lần xuất hiện.
document.write("<h3>51. Tìm tần suất của các chữ cái trong một chuỗi:</h3>");
function letterFrequency(str) {
  let frequency = {};
  for (let char of str) {
    if (char.match(/[a-zA-Z]/)) {
      char = char.toLowerCase();
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }
  return Object.entries(frequency);
}
let frequencyArray = letterFrequency("Hello World");
document.write(
  `Tần suất các chữ cái: [${frequencyArray
    .map(([letter, count]) => `[${letter}, ${count}]`)
    .join(", ")}]<br>`
);

// 52. Tính toán Fibonacci(500) với độ chính xác cao (tất cả các chữ số)
document.write("<h3>52. Tính toán Fibonacci(500) với độ chính xác cao:</h3>");
function fibonacci(n) {
  let a = BigInt(0);
  let b = BigInt(1);
  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a.toString();
}
let fib500 = fibonacci(500);
document.write(`Fibonacci(500): ${fib500}<br>`);

// 53. Tính toán 70! với độ chính xác cao (tất cả các chữ số)
document.write("<h3>53. Tính toán 70! với độ chính xác cao:</h3>");
function factorials(n) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result.toString();
}
let factorial70 = factorials(70);
document.write(`70!: ${factorial70}<br>`);
