// this is the use of the javascript to display the num value
function displaynum(n1){
	calcform.pritam.value=calcform.pritam.value+n1;
}
// this is fo the reseting input field
$("#reset").bind("click", function() {
  $("input[type=text], textarea").val("");
});