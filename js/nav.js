$(document).ready(function() {
	$("div.container > header > div > ul").click(function() {
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$("div.container > nav").removeClass("opened");
			}
		else {
			$(this).addClass("opened");
			$("div.container > nav").addClass("opened");
			if (!$("nav > div > div").hasClass("search")) {
				$("nav > div > div").addClass("search");
			}
			}
		});


// added
		resize();
	$("nav > div > div > form > button").on("click", function() {
		if (!$("nav > div > div").hasClass("search")) {
			$("nav > div > div").addClass("search");
			}
			else {
				$("nav > div > div > form").submit();
			}
		});

	return false;
	});


	$(document).mouseup(function(e) {
	if (!$("nav > div > div").is(e.target) && $("nav > div > div").has(e.target).length === 0) {
		if ($(window).width() >= 1161) {
			if ($("nav > div > div").hasClass("search")) {
				$("nav > div > div").removeClass("search");
				// clear($("nav > div > div > form > input.clear"));
				}
			}
				clear($("nav > div > div > form > input.clear"));
    	}
    return false;
	});
	// end of added
