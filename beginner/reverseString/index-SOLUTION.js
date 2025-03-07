//chaining in-built methods

function reverseString(str) {
  return str.split("").reverse().join("");
}

//or with spread operator

function reverseStringTwo(str) {
  return [...str].reverse().join("");
}
