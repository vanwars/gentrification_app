var hidePanels = function () {
    $("#splash").fadeOut("slow");
    $("#main-content-wrapper").addClass("visible");
    $('#myModal').foundation('reveal', 'close');
};

var scroll = function (page) {
    hidePanels();
    var container = $('#narrative'),
        scrollTo = $('#' + page.id);

    if (scrollTo.get(0)) {
        $('section').removeClass('active');
        container.scrollTop(
            scrollTo.offset().top - container.offset().top + container.scrollTop()
        );
        /*container.animate({
            scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
        });*/
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

var showModal = function () {
    $('#myModal').foundation('reveal', 'open');
    /*console.log('foundation');
    setTimeout(function () {
        alert("close");
        $('#myModal').foundation('reveal', 'close');
    }, 2500);*/
    //$('myModal').show();
};