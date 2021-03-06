$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		if($(this).val() !== "") {
			var todoText = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		}
	}
});

$("#plus").click(function() {
	$("input[type='text']").fadeToggle();
	$("i", this).toggleClass("fa fa-plus fa fa-minus");
}) 
