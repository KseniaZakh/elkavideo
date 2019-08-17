function shake() {
	$("div.loading").hide();
	if ($("div.form:visible").length!=0) {
 		$("div.form > form").addClass("shake");
   		}
	return false;
	}

function clear(elements) {
	elements.each(function() {
		if ($(this).val()) {
			$(this).val("");
			}
		if ($(this).next("span").hasClass("selected")) {
			$(this).next("span").removeClass("selected");
			}
		if ($(this).hasClass("error")) {
			$(this).removeClass("error");
			}
		if ($(this).hasClass("success")) {
			$(this).removeClass("success");
			}
		});
	return false;
	}

function isName(user_name) {
	var regex = new RegExp(/^([а-яА-Яa-zA-Z _.-]{3,30})+$/);
  	return regex.test(user_name);
	}

function isEmail(user_email) {
	var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  	return regex.test(user_email);
	}

$(function() {
	ymaps.ready(init);
	function init() {
  		ymaps.geolocation.get({provider:"yandex"}).then(function(res) {
    		var g = res.geoObjects.get(0);
			$("div.form > form > input[name=user_country]").val(g.getCountry());
    		$("div.form > form > input[name=user_region]").val(g.getAdministrativeAreas()[0]);
    		$("div.form > form > input[name=user_city]").val(g.getLocalities()[0]);
  			})
   		.catch(function (err) {
    		console.log("Не удалось установить местоположение", err);
  			});
		}
	});

$(document).ready(function() {
	$(".open-form").on("click", function() {
		if ($("span.button.feedback").hasClass("active")) {
			$("span.button.feedback").removeClass("active");
			}
		if ($("div.form").length!=0) {
			clear($("input.clear"));
			clear($("textarea.clear"));
			$("div.form > form > span.submit").css({"display" : "block"});
			if ($("div.form > form > span.submit").hasClass("active")) {
				$("div.form > form > span.submit").removeClass("active");
				}
			$("div.form > form > div > span").css({"display" : "none"});
			if ($("div.form > form > div > span."+$(this).data("form")).length!=0) {
				$("div.form > form > div > span."+$(this).data("form")).css({"display" : "block"});
				}
			$("div.form > form > span.header").html($(this).data("name"));
			$("div.form > form > span.submit > button").html($(this).data("submit"));
			$("div.form > form > div > p > span").html($(this).data("submit"));
			$("div.form > form > input[name=order_name]").val($(this).data("name"));
			$("div.form > form > input[name=order_type]").val($(this).data("form"));
			$("div.form > form > div > div."+$(this).data("form")).show();
			if (!$("div.form").hasClass("show")) {
				$("div.form").addClass("show");
				resize();
				}
			}
		});
	$("span.button.feedback > button").on("click", function() {
		if ($("span.button.feedback").hasClass("active")) {
			if ($("div.form").length!=0) {
				$("div.form > form > span.submit").css({"display" : "block"});
				if ($("div.form > form > span.submit").hasClass("active")) {
					$("div.form > form > span.submit").removeClass("active");
					}
				$("div.form > form > div > span").css({"display" : "none"});
					if ($("div.form > form > div > span."+$(this).data("form")).length!=0) {
					$("div.form > form > div > span."+$(this).data("form")).css({"display" : "block"});
					}
				$("div.form > form > span.header").html($(this).data("name"));
				$("div.form > form > span.submit > button").html($(this).data("submit"));
				$("div.form > form > div > p > span").html($(this).data("submit"));
				$("div.form > form > input[name=order_name]").val($(this).data("name"));
				$("div.form > form > input[name=order_type]").val($(this).data("form"));
				$("div.form > form > div > div."+$(this).data("form")).show();
				if (!$("div.form").hasClass("show")) {
					$("div.form").addClass("show");
					resize();
					}
				clear($("footer > div > ul > li > div.field.input.choose.feedback > input.choose"));
				$("span.button.feedback").removeClass("active");
				}
			}
		});
	$("div.field.textarea > textarea").on("propertychange change click keyup input paste",function() {
		if (!$(this).val()) {
			$(this).next("span").removeClass("selected");
			}
		else {
			$(this).next("span").addClass("selected");
			}
		});
	$("div.field.input > input[type=text]").on("propertychange change click keyup input paste",function() {
		var element = this;
		setTimeout(function () {
			if (!$(element).val()) {
				$(element).next("span").removeClass("selected");
				if ($(element).hasClass("error")) {
					$(element).removeClass("error");
					}
				if ($(element).hasClass("success")) {
					$(element).removeClass("success");
					}
				}
			else {
				$(element).next("span").addClass("selected");
				if ($(element).hasClass("require")) {
					if ($(element).attr("name") == "user_name") {
						var result = isName($(element).val());
						}
					if ($(element).attr("name") == "user_email") {
						var result = isEmail($(element).val());
						}
					if ($(element).attr("name") == "user_phone") {
						var result = $(element).inputmask("isComplete");
						}
					if ($(element).hasClass("choose")) {
						var result = $(element).val().length;
						}
					if (!result) {
						if (!$(element).hasClass("error")) {
							$(element).removeClass("success").addClass("error");
							}
						}
					else {
						if (!$(element).hasClass("success")) {
							$(element).removeClass("error").addClass("success");
							}
						}
					}
				}
			var require = $("div.form > form > input[name=order_type]").val();
			if ($("div.field.input."+require+" > input.require").length != $("div.field.input."+require+" > input.require.success").length) {
				if ($("span.submit").hasClass("active")) {
					$("span.submit").removeClass("active");
					}
				}
			else {
				if (!$("span.submit").hasClass("active")) {
					$("span.submit").addClass("active");
					}
				}
			}, 100);
		});
	$("div.field.input.choose > input").on("click", function() {
		var offset = $(this).offset();
		$("div.container > div.choose > ul."+$(this).data("list")).css({"display" : "block", "left" : +(offset.left-15)+ "px", "top" : +(offset.top+25)+ "px"});
		if ($("div.container > div.choose").hasClass("hide")) {
			$("div.container > div.choose").removeClass("hide").addClass("show");
			}
		});

	$("div.container > div.choose").on("click", function() {
		$("div.container > div.choose > ul").css({"display" : "none"});
		$("div.container > div.choose").addClass("hide");
		});

	$("div.container > div.choose > ul > li").on("click", function() {
		$("div.form > form > input[name=order_item]").val($(this).data("item"));
		$("div.field.input.choose."+$(this).data("choose")+" > input.choose").val($(this).html()).change();
		$("div.container > div.choose > ul").css({"display" : "none"});
		if ($("div.container > div.choose").hasClass("show")) {
			$("div.container > div.choose").removeClass("show").addClass("hide");
			}
		if ($(this).data("choose") == "feedback") {
			if (!$("footer > div > ul > li > span.button").hasClass("active") && $("div.field.input.choose."+$(this).data("choose")+" > input.choose").val()) {
				$("footer > div > ul > li > span.button").addClass("active");
				}
			}
		});
	$("div.form > form > button").on("click", function() {
		if ($("div.form:visible").length!=0) {
			if ($("span.button.feedback").hasClass("active")) {
				$("span.button.feedback").removeClass("active");
				}
			if ($("div.form").hasClass("show")) {
				$("div.form").removeClass("show");
				}
			$("div.form > form > div > span").css({"display" : "none"});
			$("div.form > form > div > div.field").hide();
			clear($("input.clear"));
			clear($("textarea.clear"));
			}
		});
	$("div.form > form > span.submit").on("click", function() {
		if ($(this).hasClass("active")) {
			$("div.loading").show();
			$("div.form > form").removeClass("shake").addClass("shake");
			$("div.form > form").submit();
			}
		});
	$("input.phone").inputmask("+7 (999) 999-99-99");
	clear($("input.clear"));
	clear($("textarea.clear"));
	return false;
	});
