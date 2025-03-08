//chaining in-built methods

function reverseString(str) {
  return str.split("").reverse().join("");
}

//or with spread operator

function reverseStringSpread(str) {
  return [...str].reverse().join("");
}

//the spread operator [...] like the split method .split() will spread the characters of the string into array elements.

//take a str
//loop through a str? with a for loop
function reverseStringForLoop(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
