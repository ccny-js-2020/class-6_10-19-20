/*
  In order to access a single html element, you use:
  1. $('#id') accesses an html eleemnt with that id
  2. $('.className') - access all of the elements with that class name
  3. $('tag') - accesses all of the elements with that tag
*/

// vanilla js = document.getElementById('my-name').innerText = "Jared";
$('#my-name').text("Jared");

// vanilla js = document.getElementById('page-image').src = "https://m.media-amazon.com/images/M/MV5BMjA3ODEzMTk3N15BMl5BanBnXkFtZTcwNjk1MzY2Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg"
$('#page-image').attr("src", "https://m.media-amazon.com/images/M/MV5BMjA3ODEzMTk3N15BMl5BanBnXkFtZTcwNjk1MzY2Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg");

// vanilla js = document.getElementById('page-h2').innerText = "H2 TAG";
$('#page-h2').text("H2 Tag")

// vanillas js = document.getElementById('adding-html').innerHTML = "<p id='new-p-tag'>P Tag created through javascript</p><h3 id='new-h3-tag'>h3 tag created through javascript</h3><input type='submit'/>"
$('#adding-html').html("<p id='new-p-tag'>P Tag created through javascript</p><h3 id='new-h3-tag'>h3 tag created through javascript</h3><p id='whatever-p'></p><input type='submit'/>")

// vanillas js = document.getElementById('header-link').target = "_blank";
$("#header-link").attr("target", "_blank");

$('#whatever-p').text("hey you");
