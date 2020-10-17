/*
	Javascript Functions:
	- A JavaScript function is a block of code designed to perform a particular task.
	- A JavaScript function is executed when "something" invokes it (calls it).

	creation of a function:
	function helloFunction(){
		console.log("hello")
	}

	invocation of the function:
	helloFunction()
}
*/

//creating a function called alertSomething that alerts "CCNY" when it is invoked
function alertSomething(){
	alert("CCNY");
}
//invoking the alertSomething function
alertSomething();

//creating a function called alertText that takes 1 argument, "text",
//and alerts "CCNY " and whatever text is input as an argument when the function is invoked
function alertText(text){
	alert("CCNY " + text);
}
//invoking the alertText function with "You Steal My Sunshine" as an argument
alertText("You Steal My Sunshine");

/*
	Explaining function arguments
	- Think of an argument as a variable that is declared for that function
	- Look at how it used during the creation of the alertText function
	- Then look at the invocation of the alertText function with the argument
	  that is meant to exhibit the behavior that you wrote for that "text" parameter
	- if there is no "return" at the end of a function, then that function returns no value
*/

//creating a function called logText that takes 1 argument, text,
//and logs that text that is an argument to the console when the function is invoked
function logText(text){
	console.log("text is : " + text);
}
//invocation of the logtextFunction with "hello" as an argument
logText("hello");

//creating the addNumbers function that takes 2 arguments
//which will be added together when the function is invoked, and that will also be the value of that function
function addNumbers(num1, num2){
	return num1 + num2;
}

//invocation of the addNumbers() method here
//you see that addNumbers() equals what it returns
console.log(addNumbers());
console.log("The sum number is " + addNumbers());

/*
	Explaining "return" in a function:
	- If you want the function to equal a value and use that value in your logic, you end the function with a return statement
	- "return" will always be at the end of a function, as you expect it to be the end value of the set of logic you put in the function
	- return will have the function be equal to the values that you have after return, like on line 50 here. That function equals num1 + num2
*/

//creating the multiplyNumbers function that takes 2 arguments
//which will be multiplied together when the function is invoked, and that will also be the value of that function
function multiplyNumbers(num1, num2){
	return num1 * num2;
}
//invocation of the multiplyNumbers function with 2 arguments
console.log(multiplyNumbers(5,5))
