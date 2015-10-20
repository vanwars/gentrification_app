var initialize = function () {
    $(document).foundation();
};

var hidePanels = function () {
    $("#splash").fadeOut("slow");
    $("#main-content-wrapper").addClass("visible");
};

var scroll = function (page) {
    hidePanels();
    var $el = $('#' + page.id);
    var container = $('#narrative'),
        scrollTo = $('#' + page.id);

    if (scrollTo.get(0)) {
        $('section').removeClass('active');
        container.scrollTop(
            scrollTo.offset().top - container.offset().top + container.scrollTop()
        );
    }
    $el.addClass('active');
    $el.css({
        'min-height': $(document).height()
    });
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

var showModal = function () {
    $(document).foundation();
    $('#shareModal').foundation('reveal', 'open');
};