const os = require('os')

console.log(os.hostname())

function hello() {
  return 'Hello';
}

console.log(hello())

function add(num1, num2) {
  return num1 + num2;
}

sum = add(2, 5)
console.log(sum)
