$(function () {
	$("#info-btn").on("click", function () {
		$([document.body, document.documentElement]).animate({
			scrollTop: $("#main-header").offset().top
		}, 1000);
	});

	$("#menu-btn").on("click", function () {
		$([document.body, document.documentElement]).animate({
			scrollTop: 0
		}, 1000);
	});
});