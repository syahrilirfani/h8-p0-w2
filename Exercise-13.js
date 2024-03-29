/** 
    Logic Challenge - X dan O

    Problem
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
    Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
    dan false jika tidak
**/

function xo(str) {
  // you can only write your code here!
  var x = 0,
    o = 0;
  for (counter = 0; counter < str.length; counter++) {
    if (str[counter] === "x") {
      x++;
    } else if (str[counter] === "o") {
      o++;
    }
  }

  return x === o;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true