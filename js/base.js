function getSize() {
	if ($("article > div.catalog > div").lenght!=0) {
		$("article > div.catalog").css({"min-height" : "auto"});
		setInterval (function() {
			$("article > div.catalog").css({"min-height" : $("article > div.catalog > div").outerHeight() + "px"});
			}, 300);
		}
	}

function resize() {
	if ($("div.container > section.swiper > ul > li > video").lenght!=0) {
		if ($("div.container > section.swiper > ul > li > video").hasClass("landscape")) {
			$("div.container > section.swiper > ul > li > video").removeClass("landscape");
			}
		if ($("div.container > section.swiper > ul > li > video").hasClass("portrait")) {
			$("div.container > section.swiper > ul > li > video").removeClass("portrait");
			}
		if (1.8 > $(window).width()/$(window).height()) {
			$("div.container > section.swiper > ul > li > video").addClass("portrait");
			}
		else {
			$("div.container > section.swiper > ul > li > video").addClass("landscape");
			}
		}


	if ($("div.container > header > div > ul").hasClass("opened")) {
		$("div.container > header > div > ul").removeClass("opened");
		$("div.container > nav").removeClass("opened");
		}
	if ($("div.container > div.form:visible").length!=0) {
		$("div.container > div.form > form").css("top", (($(window).height()-$("div.container > div.form > form").outerHeight())/2)+$(window).scrollTop()+"px");
		$("div.container > div.form > form").css("left", (($(window).width()-$("div.container > div.form > form").outerWidth())/2)+$(window).scrollLeft()+"px");
		}
	if ($("div.container > div.choose:visible").length!=0) {
		if ($("div.container > div.choose").hasClass("show")) {
			$("div.container > div.choose").removeClass("show").addClass("hide");
			}
		}
	if ($("div.container > div.video:visible").length!=0) {
		$("div.container > div.video > div").css("top", (($(window).height()-$("div.container > div.video > div").outerHeight())/2)+$(window).scrollTop()+"px");
		$("div.container > div.video > div").css("left", (($(window).width()-$("div.container > div.video > div").outerWidth())/2)+$(window).scrollLeft()+"px");
		}

		// added
		if (window.matchMedia("(min-width: 1161px)").matches) {
			$("div.container > nav > div").css({"width" : $("header > div").outerWidth() - $("header > div > a.phone").width() -
			$("header > div > button.open-form").width() + $(window).scrollLeft() - 160 + "px"});
			}
			else {
				$("div.container > nav > div").css({"width" : 270 + "px"});
			}

			if (window.matchMedia("(max-width: 1160px)").matches) {
				$("div.container > nav > div > div").css("top", ($(window).height() - $("div.container > header").outerHeight()) + $(window).scrollTop() - 60 + "px");
				}
				else {
					$("div.container > nav > div > div").css({"top" : 25 + "px"});
				}

		// end of added
	getSize();
	}
