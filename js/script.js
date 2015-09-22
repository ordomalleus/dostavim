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

    //добовление в корзину
    $(function(){
        $(".price__basket").on('click', function() {
            var b_line_content_basket = $(this).parent().parent('.b-line__content');
            if ($(this).hasClass('price__basket--off')) {
                $(this).removeClass('price__basket--off');
                $(this).addClass('price__basket--on');
                b_line_content_basket.addClass('b-line__content--basket');
                //заглушка для иконки
                $(this).html('+');

            } else {
                $(this).removeClass('price__basket--on');
                $(this).addClass('price__basket--off');
                b_line_content_basket.removeClass('b-line__content--basket');
                //заглушка для иконки
                $(this).html('-');
            }
        });
    });

    //==========================================================


})