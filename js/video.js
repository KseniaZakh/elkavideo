$(document).ready(function() {
	$("section.swiper > ul > li > span").on("click", function() {
	setTimeout(function(){
		$("section.swiper > ul > li > video").get(0).play();
	}, 300);
	});
$("section.swiper > ul > li > span").click();

});
