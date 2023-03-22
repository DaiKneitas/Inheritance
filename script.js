"use strict";

// ES6 Base Class

class BaseES6 {
  constructor(int) {
    if (typeof int === "number") {
      this.result = int;
    }
    if (typeof int !== "number") {
      this.result = 0;
      this.message = "Your input was not a number. Converting it to 0";
    }
  }
}

// --------------------------------------------------
// ES5 Base Class (Constructor function)

const BaseES5 = function (str) {
  if (typeof str !== "string") {
    this.string = "";
    this.message = "Your input was not a string. Converting it to '' ";
  }
  if (typeof str === "string") {
    this.string = str;
  }
};

// --------------------------------------------------
// ES6 IntBuilder Class

class IntBuilder extends BaseES6 {
  plus(...num) {
    for (let i in num) {
      if (typeof num[i] !== "number") {
        this.message = "Error: one of the arguments is not a number";
        this.result = 0;
        break;
      } else this.result += num[i];
    }
    return this;
  }

  minus(...num) {
    for (let i in num) {
      if (typeof num[i] !== "number") {
        this.message = "Error: one of the arguments is not a number";
        this.result = 0;
        break;
      } else this.result -= num[i];
    }
    return this;
  }

  multiply(num) {
    if (typeof num !== "number") {
      this.message = "Error: argument is not a number";
      this.result = 0;
    } else this.result *= num;
    return this;
  }

  divide(num) {
    if (num === 0) {
      this.message = "Cannot divide by zero!";
      this.result = 0;
    }
    if (typeof num !== "number") {
      this.message = "Error: argument is not a number";
      this.result = 0;
    } else this.result /= num;
    return this;
  }

  mod(num) {
    if (typeof num !== "number") {
      this.message = "Error: argument is not a number";
      this.result = 0;
    } else this.result %= num;
    return this;
  }

  static random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }

  get() {
    return this.result;
  }
}

//-----------------------------------------------------------
// ES5 StringBuilder

const StringBuilder = function (str) {
  BaseES5.call(this, str);
};

StringBuilder.prototype = Object.create(BaseES5.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.plus = function (...str) {
  this.string = this.string.concat(...str);
  return this;
};

StringBuilder.prototype.minus = function (n) {
  this.string = this.string.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (int) {
  let newStr = "";
  while (int > 0) {
    newStr += this.string;
    int--;
  }
  this.string = newStr;
  return this;
};

StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.string.length / n);
  this.string = this.string.slice(0, k);
  return this;
};

StringBuilder.prototype.remove = function (str) {
  let newStr = this.string.split(str).join("");
  this.string = newStr;
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.string = this.string.slice(from, from + n);
  return this;
};

StringBuilder.prototype.get = function () {
  return this.string;
};

const intBuilder = new IntBuilder(10);
const strBuilder = new StringBuilder("Hello");

// --------------------------------------------------
// For testing

// console.log(
//   intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get()
// );

// console.log(IntBuilder.random(10, 100));

// console.log(
//   strBuilder
//     .plus(" all", "!")
//     .minus(4)
//     .multiply(3)
//     .divide(4)
//     .remove("l")
//     .sub(1, 1)
//     .get()
// );
