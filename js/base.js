function getSize() {
	if ($("article > div.catalog > div").lenght!=0) {
		$("article > div.catalog").css({"min-height" : "auto"});
		setInterval (function() {
			$("article > div.catalog").css({"min-height" : $("article > div.catalog > div").outerHeight() + "px"});
			}, 300);
		}
	}

function resize() {
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
	getSize();
	}
