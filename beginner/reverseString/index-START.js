//Given a string of text, write an algorithm that returns the text received in a reversed format. E.g

function reverseString(text) {
  //... spread opertor and split can do the same thing
  return [...text].reverse().join("");
}

module.exports = reverseString;
