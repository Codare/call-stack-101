var Calculator3 = function() {};

Calculator3.prototype.add = function(a, b) {
  if (a === 0) return b;

  if (b === 0) return a;

  return a + b;
};

Calculator3.prototype.multiply = function(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  return a * b;
};

Calculator3.prototype.subtract = function(a, b) {
  return a - b;
};

Calculator3.prototype.divide = function(a, b) {
  if (b === 0) throw new Error("Attempt to divide by zero");
  return a / b;
};
