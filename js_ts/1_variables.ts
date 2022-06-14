/**
 * Know the difference between var and let and const
 */

var variable = "Hello World";
const constant = "I'm a constant";

{
  variable = "test";
  var variable2 = "test2";
  let theLet = "good day";
  constant = "hi";
}

console.log({
  variable,
  variable2,
  theLet
  constant,
});
