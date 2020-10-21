/*

1. Add an audio or video tag, through javascript or html
2. Add the src of the audio tag through javascript

1. Add a button tag, through javascript or html
2. Add text to that button through javascript

1. add a div to the html
2. add an ordered list to that div

1. add a "a" tag to the html
2. add an href to that a tag through the javascript

*/
//1
$("audio").attr("src", "/Users/jaredthomas/Music/iTunes/iTunes Media/Music/Compilations/Kiss_ Ace Frehley (Remastered)/06 New York Groove.m4a")

//2
var button = $("<button>");
button.attr("id", "change-text-button");
button.text("Put whatever text you want for the button here");
$(".add-stuff-to-me").append(button)

$("#change-text-button").click(function(){
  $("#change-text-button").text("Text Changed")
});

//or

button.click(function(){
  button.text("Text Changed")
});

//3
var div = $("<div id='new-div'>");
$("body").append(div);

var ol = $("<ol>");

var liOne = $("<li>");
liOne.text("whatever you want to write");
ol.append(liOne);

var liTwo = $("<li>");
liTwo.text("whatever you want to write ... again");
ol.append(liTwo);

$("#new-div").append(ol);

//4
var aTag = $("<a>")
aTag.attr("href", "https://www.w3schools.com/jquery/")
aTag.attr("target", "_blank")
aTag.text("Jquery Basics")
$("body").append(aTag)
