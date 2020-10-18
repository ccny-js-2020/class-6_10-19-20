//look for addNums() function being called by an onclick in the html
//the addNums() function is attached to the onclick of the button with an id of 'add'
//the function in the html has to match the function in the javascript
//inside this function is the logic that will be executed once button that has the addNums() function attached to the onclick is clicked
function addNums(){
	//accessing the element in the dom with an id of 'input_one'
	//getting the value of an element with an id of 'input_one' once the button is clicked and storing it in a variable
	var num1 = document.getElementById('input_one').value;
	//accessing the element in the dom with an id of 'input_two'
	//getting the value of an element with an id of 'input_two' once the button is clicked and storing it in a variable
	var num2 = document.getElementById('input_two').value;
	//accessing the element in the dom with an id of 'result' and changing the inner html of that element to the addition of the value of both inputs
	document.getElementById('result').innerHTML = (parseInt(num1) + parseInt(num2));
}

//look for addStrings() function being called by an onclick in the html
//the addStrings() function is attached to the onclick of the button with an id of 'addStrings'
//the function in the html has to match the function in the javascript
//inside this function is the logic that will be executed once button that has the addStrings() function attached to the onclick is clicked
function addStrings(){
	//accessing the element in the dom with an id of 'input_three'
	//getting the value of an element with an id of 'input_three' once the button is clicked and storing it in a variable
	var string1 = document.getElementById('input_three').value;
	//accessing the element in the dom with an id of 'input_four'
	//getting the value of an element with an id of 'input_four' once the button is clicked and storing it in a variable
	var string2 = document.getElementById('input_four').value;
	//accessing the element in the dom with an id of 'result-strings' and changing the text of that element to the addition of the value of both inputs
	document.getElementById('result-strings').innerText = (string1 + " " + string2);
}
