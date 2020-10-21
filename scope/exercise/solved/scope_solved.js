/*
 Create a script that does the following:
 • declares and assigns a global variable to an integer
• defines a function that contains a local variable and returns
the value of that local variable + the global variable
• finally, calls the function and prints out its return value
*/

var globalInt = 132;

function containsLocalVar(){
	var localInt = 53463;
	return globalInt + localInt;
}

console.log(globalInt);
console.log(containsLocalVar())
