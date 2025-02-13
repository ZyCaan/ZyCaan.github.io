const dbgbtn = $(`
    <button class="dbg-btn">Debug</button>`);

$(function () {
    dbgbtn.on("click", function () {
        $(":root").toggleClass("debug");
    });

    $("body").append(dbgbtn);

    $(window).on("scroll", function () {
       var sTop = $(window).scrollTop();

       if (sTop > 75) {
           $("header").addClass("scrolled");
       }
       else if (sTop < 75) {
           $("header").removeClass("scrolled");
       }
    });
});