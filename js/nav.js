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
		if (window.matchMedia("(min-width: 1161px)").matches) {
			$("nav > div > div").on("click", function() {
				$(this).addClass("search");
			});

	// end of added
		}

		resize();
	$("nav > div > div > form > button").on("click", function() {
		if (!$("nav > div > div").hasClass("search")) {
			$("nav > div > div").addClass("search");
			}
		});
	return false;
	});

	$(document).mouseup(function(e) {
	if (!$("nav > div > div").is(e.target) && $("nav > div > div").has(e.target).length === 0) {
		if ($("nav > div > div").hasClass("search")) {
			$("nav > div > div").removeClass("search");
			}
    	}
    return false;
	});
