var Calculator2 = function() {};

Calculator2.prototype.adde = function(a, b) {
  if (a === 0) return b;

  if (b === 0) return a;

  return a + b;
};

Calculator2.prototype.multiply = function(a, b) {
  return a * b;
};

Calculator2.prototype.square = function(n) {
  return Calculator2.prototype.multiply(n, n);
};

Calculator2.prototype.printSquare = function(n) {
  console.log(square(n));
};
