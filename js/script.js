$(window).load(function () {

    //==========================================================
    //добовление в избранное
    $(function(){
        $(".price__favorites").on('click', function() {
            if ($(this).hasClass('price__favorites--off')) {
                $(this).removeClass('price__favorites--off');
                //$(this).removeClass('glyphicon-star-empty');
                //$(this).addClass('glyphicon-star');
                $(this).addClass('price__favorites--on');
            } else {
                $(this).removeClass('price__favorites--on');
                //$(this).removeClass('glyphicon-star');
                $(this).addClass('price__favorites--off');
                //$(this).addClass('glyphicon-star-empty');
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
                //$(this).removeClass('fa-shopping-cart');
                $(this).addClass('price__basket--on');
                //$(this).addClass('fa-cart-plus');
                b_line_content_basket.addClass('b-line__content--basket');
            } else {
                $(this).removeClass('price__basket--on');
                //$(this).removeClass('fa-cart-plus');
                $(this).addClass('price__basket--off');
                //$(this).addClass('fa-shopping-cart');
                b_line_content_basket.removeClass('b-line__content--basket');
            }
        });
    });

    //==========================================================

    //добовление новых 12 товаров
    $(function(){
        $(".b-page__button").on('click', function(event) {
            event.preventDefault();
            $('.b-page__tovar--hiden').each(function(i,elem) {
                if (i === 12) {
                    return false;
                } else {
                    $(this).removeClass('b-page__tovar--hiden');
                }
            });
        });
    });




})