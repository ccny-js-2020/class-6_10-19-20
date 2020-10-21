/*
  Scope in if statements
  Scope in functions
  Scope with redefining variables
*/

//declaring a variable outside of the if statement
//this would be considered the global scope
var outsideOfIfStatment = "hello"

if("a" != "b"){
  //declaring a variable inside of the if statement
  var insideOfIfStatement = "beepbop";
  console.log(outsideOfIfStatment)

  //redefining outsideOfIfStatment variable value inside of if statement
  outsideOfIfStatment = "goodbye";
  console.log(outsideOfIfStatment);
} else {
  //this comes as undefined
  console.log(insideOfIfStatement);
}
//value of variable has changed, as it was redefined inside of the if statement
console.log(outsideOfIfStatment);
//this does have scope
console.log(insideOfIfStatement);


//declaring a variable outside of the creation of the function
var outsideOfFunction = "bop";
function sayWord(){
  //declaring a variable inside of the function
	var insideOfFunction = "beep";
  console.log(outsideOfFunction);

  //redefining a variable inside of the function
  outsideOfFunction = "bing";
  console.log(outsideOfFunction);
	console.log(insideOfFunction);
}

//invoking the sayWord function
sayWord();
console.log(outsideOfFunction);

//i logged this out because it will break the script since it is undefined here
//since it was declared inside of the function, it is only scoped inside of the function
//console.log(insideOfFunction)

var whatever = "hello"
function hello(){
  var whateverTwo = "goodbye";
  whatever = whateverTwo;
}
hello();
console.log(whatever);


var outsideOfForLoop = "Go";
for(var i = 0; i < 10; i++){
  var insideOfForLoop = "Stop";

  outsideOfForLoop = "Slow";
}

console.log(outsideOfForLoop);
console.log(insideOfForLoop);
