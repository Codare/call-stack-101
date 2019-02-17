module.exports = () => {
  return {
    files: [
      "style/calculator.css",
      { pattern: "lib/jquery.js", instrument: false },
      "src/*.js",
      "test/helper/template.js"
    ],
    tests: [
      "src/call-stack-101/call-stack-101-wallabySpec.js",
      "test/*Spec.js"
    ],
    env: {
      kind: "chrome"
    },
    debug: true
  };
};
