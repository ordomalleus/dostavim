$(window).load(function () {

    //==========================================================
    //добовление в избранное
    $(function(){
        $(".price__favorites").on('click', function() {
            if ($(this).hasClass('price__favorites--off')) {
                $(this).removeClass('price__favorites--off');
                $(this).addClass('price__favorites--on');
                //заглушка для иконки
                $(this).html('+');
            } else {
                $(this).removeClass('price__favorites--on');
                $(this).addClass('price__favorites--off');
                //заглушка для иконки
                $(this).html('-');
            }
        });
    });
    //==========================================================





    //==========================================================



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



    //======================================================



})