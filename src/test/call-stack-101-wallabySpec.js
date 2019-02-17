describe("calculator model", function() {
  beforeEach(function() {
    this.calculator = new Calculator2();
  });

  it("should add numbers", function() {
    expect(this.calculator.adde(2, 2)).toBe(4);
  });

  it("should multiply two numbers", function() {
    expect(this.calculator.multiply(5, 5)).toBe(25);
  })

  it("should square a number", function() {
    expect(this.calculator.square(5)).toBe(25);
  })
});
