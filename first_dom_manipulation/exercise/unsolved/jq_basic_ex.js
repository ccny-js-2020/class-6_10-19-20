/*

1. Create an array outside of the onclick function
2. Create a name input and a button to add the name
3. Append the text in the input to the dom once the button is clicked
4. Add the name to the array that you created
5. Loop through the array and log all of the names added

1. Create a number variable outside of the onclick function
2. increment that number with the appropriate on click, and append the changed number to the dom
3. Make num decrease with appropriate button

*/

//declaring a variable to an integer for later user
var num = 0;

function incrementNumber(){
	num++;
	document.getElementById('span-element').innerText = num;
}

function decrementNumber(){
	num--;
	document.getElementById('span-element').innerText = num;
}
