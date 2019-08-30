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
	return false;
	});
