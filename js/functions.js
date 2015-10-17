var hideSplashScreen = function () {
    $("#splash").fadeOut("slow");
    $("#main-content-wrapper").addClass("visible");
};

var scroll = function (page) {
    hideSplashScreen();
    var container = $('#narrative'),
        scrollTo = $('#' + page.id);

    if (scrollTo.get(0)) {
        $('section').removeClass('active');
        container.animate({
            scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
        });
    }
    $('#' + page.id).addClass('active');
};

var animateLogo = function () {
    var target = $("#logo");
    if (target.get(0)) {
        setTimeout(function () {
            target.addClass("show");
        }, 500);
        setTimeout(function(){
            target.fadeIn();
            target.addClass("move-left");
            $(".target").addClass("show");
        }, 1500);
    }
};