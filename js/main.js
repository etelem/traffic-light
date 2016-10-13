

// document.getElementById("stopButton").onclick = function(){
// 	document.getElementById("stopLight").style.backgroundColor = "red";
// 	document.getElementById("slowLight").style.backgroundColor = "";
// 	document.getElementById("goLight").style.backgroundColor = "";

// }



// document.getElementById("slowButton").onclick = function(){
// 	document.getElementById("stopLight").style.backgroundColor = "";
// 	document.getElementById("slowLight").style.backgroundColor = "yellow";
// 	document.getElementById("goLight").style.backgroundColor = "";

// }

// document.getElementById("goButton").onclick = function(){
// 	document.getElementById("stopLight").style.backgroundColor = "";
// 	document.getElementById("slowLight").style.backgroundColor = "";
// 	document.getElementById("goLight").style.backgroundColor = "green";

// }

	$("#stopButton").on("click", function () {
	$("#stopLight").css("background-color","red");
	$("#slowLight").css("background-color","");
	$("#goLight").css("background-color","");

});

	$("#slowButton").on("click", function () {
	$("#stopLight").css("background-color","");
	$("#slowLight").css("background-color","yellow");
	$("#goLight").css("background-color","")

});

	$("#goButton").on("click", function () {
	$("#stopLight").css("background-color","");
	$("#slowLight").css("background-color","");
	$("#goLight").css("background-color","green")

});