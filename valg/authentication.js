$(function(){
	$("#insertIcon").click(function(){
		$("#container").html("<h1>Tryk på skærmen for at komme igang med at stemme</h1><img src=hand.png></img>");
		$("#container").css("cursor", "pointer");
		setTimeout(clicker, 500);
	});
});

function clicker(){
	$("#container").click(function(){
			window.location = "index";
		});
}
