$(document).ready(function(){
	// this is to make sure that the checkboxes are not checked
	$("input[name=response]").prop('checked', false);
	
	$(".questions a").mouseenter(function() {
		$(this).css("background", "#1500FF");
		if ($(".question p").text() === "") {
			$(".question p").text("Click to see the question");
		}
	});
	$(".questions a").mouseleave(function() {
		$(this).css("background", "white");
		if ($(".question p").text() === "Click to see the question") {
			$(".question p").text("");
		}
	});
	
	$(".questions a#war").click(function() {
		if ($(".question p").text() === "Click to see the question") $(".question p").text("Sylvanas is the current Warcheif.");
		else alert("You must answer the current question.");
	});
	$(".questions a#exp").click(function() {
		if ($(".question p").text() === "Click to see the question") $(".question p").text("There are 8 WoW expansions.");
		else alert("You must answer the current question.");
	});
	$(".questions a#leg").click(function() {
		if ($(".question p").text() === "Click to see the question") $(".question p").text("Kil'Jaden is the leader of the Legion.");
		else alert("You must answer the current question.");
	});
	$(".questions a#cla").click(function() {
		if ($(".question p").text() === "Click to see the question") $(".question p").text("Druid has four different specs.");
		else alert("You must answer the current question.");
	});
	
	$("#subButton").click(function() {
		//$('input[name=Choose]').attr('checked',false);
		var value = $("input[name=response]:checked").val();
		if ($("#input1").is(":checked")) { // True
			switch($(".question p").text()) {
				case "Sylvanas is the current Warcheif.":
					$("#result").append("<li>Warcheif: Correct!</li>");
					$("#war").remove();
					break;
				case "There are 8 WoW expansions.":
					$("#result").append("<li>Expansion: Incorrect!</li>");
					$("#exp").remove();
					break;
				case "Kil'Jaden is the leader of the Legion.":
					$("#result").append("<li>Legion: Incorrect!</li>");
					$("#leg").remove();
					break;
				case "Druid has four different specs.":
					$("#result").append("<li>Class: Correct!</li>");
					$("#cla").remove();
					break;
				default:
					break;
			}
			$("#game").html('<img src="../images/victory.jpg"/>');
		}
		else if ($("#input2").is(":checked")) { // False
			switch($(".question p").text()) {
				case "Sylvanas is the current Warcheif.":
					$("#result").append("<li>Warcheif: Incorrect!</li>");
					$("#war").remove();
					break;
				case "There are 8 WoW expansions.":
					$("#result").append("<li>Expansion: Correct!</li>");
					$("#exp").remove();
					break;
				case "Kil'Jaden is the leader of the Legion.":
					$("#result").append("<li>Legion: Correct!</li>");
					$("#leg").remove();
					break;
				case "Druid has four different specs.":
					$("#result").append("<li>Class: Incorrect!</li>");
					$("#cla").remove();
					break;
				default:
					break;
			}
		}
		else {
			alert("You muse chose an answer!!");
		}
		
		// resetting
		$(".question p").text("");
		$("input[name=response]").prop('checked', false);
		//var value = $("input[name=response]:checked").val();
	});
	
});