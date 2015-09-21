$(window).load(function () {

    //======================================================
    //Паралакс эффекты
    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    $('#content-section-1').parallax("50%", 0.2);
    $('#section-4 .content-section-4').parallax("50%", 0.1);
    //$('.bg').parallax("50%", 0.4);
    //$('#third').parallax("50%", 0.3);

    //================================================

    //WOW эффекты
    $(function () {
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true,       // act on asynchronously loaded content (default is true)
                callback: function (box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                }
            }
        );
        wow.init();
    });
    //======================================================

    //owl-section-7
    $(function () {
        var owl = $("#owl-info");
        owl.owlCarousel({
            singleItem: true,
            navigation: true,
            pagination: false,
            navigationText: ["", ""],
            autoHeight: true,
        });
        //======================================================
        //Фикс OWL слайдера
        var myHeight = $(window).width();
        if (myHeight > 320){
            $("#owl-info .owl-wrapper-outer").css('height', 757);
        }
        if (myHeight > 1100){
            $("#owl-info .owl-wrapper-outer").css('height', 486);
        }
        if (myHeight <= 320){
            $("#owl-info .owl-wrapper-outer").css('height', 645);
        }
        //======================================================
    });
    //owl-section-7 slyd-1
    $(function () {
        var owlSlyd1 = $("#owl-slyd-1");
        owlSlyd1.owlCarousel({
            singleItem: true,
            navigation: false,
            autoPlay: true,
        });
    });
    //owl-section-7 slyd-2
    $(function () {
        var owlSlyd2 = $("#owl-slyd-2");
        owlSlyd2.owlCarousel({
            singleItem: true,
            navigation: false,
            autoPlay: true,
        });
    });

    //==========================================================

    //крутилка вертелка текстов )
    $(".quad-text .rotate").textrotator({
        animation: "spin", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 3000 // How many milliseconds until the next word show.
    });

    //==========================================================

    //фиксация меню при скроле
    $(function () {
        var offset = $("nav.navbar").offset();
        $(window).scroll(function () {
            if ($(window).scrollTop() > offset.top) {
                $("nav.navbar").addClass("navbar-fixed-top");
                $("#about").css('padding-top', 90);
            } else {
                $("nav.navbar").removeClass("navbar-fixed-top");
                $("#about").css('padding-top', 40);
            }
        });
    });

    //==========================================================

    //отриосвка % скила в зависимости от значения атрибута data
    $(function () {
        $(".skillbar").each(function () {
            var a = $(this).find(".skillbar-percent").data('skillbarPercent');
            $(this).find(".skillbar-bar").css("width", a);
            $(this).find(".skillbar-percent").html(a);
        });
    });

    //================================================

    //WOW эффекты с счетчиком
    $(function () {
        var wowCount = new WOW(
            {
                boxClass: 'wow-count',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true,       // act on asynchronously loaded content (default is true)
                callback: function (box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated

                    //==========================================================
                    //count-to счетчик внутри wow эффектов
                    $('.count h4').countTo();
                }
            }
        );
        wowCount.init();
    });

    //======================================================



})