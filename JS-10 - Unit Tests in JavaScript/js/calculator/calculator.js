var add = function(a, b) {
    return a + b;
}
var subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if(b===0)
  {
    return undefined;
  }else {
    return a / b;
  }
 
}

function multiply(a, b){
  return a * b;
}

module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};