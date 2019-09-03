$(document).ready(function() {
	$("div.container > header > div > ul").click(function() {
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$("div.container > nav").removeClass("opened");
			}
		else {
			$(this).addClass("opened");
			$("div.container > nav").addClass("opened");
			}
		});


// added
		resize();
	$("nav > div > div > form > button").on("click", function() {
		if (!$("nav > div > div").hasClass("search")) {
			$("nav > div > div").addClass("search");
			}
		});
		// end of added
	return false;
	});

	// added
	$(document).mouseup(function(e) {
	if (!$("nav > div > div").is(e.target) && $("nav > div > div").has(e.target).length === 0) {
		if ($("nav > div > div").hasClass("search")) {
			$("nav > div > div").removeClass("search");
			}
    	}
    return false;
	});
	// end of added
