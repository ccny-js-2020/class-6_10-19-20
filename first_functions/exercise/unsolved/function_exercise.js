/*
• Declare a function that takes any string as an argument and
  console logs to the user the text they've entered, invoke
  it after it has been declared
*/
//insert code here
//<------------------------------------------------------->
//var input = prompt("Here is the text you entered")
function logString(text){
  console.log(text)
}
// logString(input)
//<------------------------------------------------------->

/*
• Declare a function that takes no arguments but prints something
  to the console, invoke it after it has been declared
*/
//insert code here
//<------------------------------------------------------->
function doThis(){
  console.log("do this")
}
doThis();


//<------------------------------------------------------->

/*
• Declare a function that takes 2 arguments and returns the value of those 2
  arguments concatanated together
*/
//insert code here
//<------------------------------------------------------->
function concatanateStrings(arg1, arg2){
  console.log(arg1)
  console.log(arg2)
  console.log(arg1 + arg2);
  var concatanated = arg1 + arg2;
  return concatanated;
}
// concatanateStrings("Bob", "Saget")
concatanateStrings("Bob", "Saget");

//<------------------------------------------------------->

/*
• Declare a function that receives an input of door
  1, 2 or 3. Depending upon which virtual "door" was entered, the
  function will tell the user they've received a different "prize"
  in an alert. Try running it after it has been declared a few times
  with each door option.
*/
//insert code here
//<------------------------------------------------------->
function playDoorGame(doorNumber){
  if(doorNumber == 1){
    alert("you've won a rookie Honus Wagner card");
  } else if (doorNumber == 2){
    alert("you've won a tesla");
  } else if (doorNumber == 3){
    alert("you've won a box of sand");
  } else {
    alert("Wrong door number entered")
  }
}

playDoorGame(3)


//<------------------------------------------------------->
