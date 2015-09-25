$(window).load(function () {

    //==========================================================

    //Проверка на Touch

    //Первая функция для проверки
    /*
    function isTouch() {
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch (e) {
            return false;
        }
    }
    */
    //Вторая функция для проверки
    function is_touch_device() {
        return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    }

    //уберает класс у товара если не Touch
    $(function () {
        if (!is_touch_device()){
            $('.b-line__content--touch').each(function () {
                $(this).removeClass('b-line__content--touch');
            });
        }
    });

    //==========================================================

    //добовление в избранное
    $(function () {
        $(".price__favorites").on('click', function () {
            if ($(this).hasClass('price__favorites--off')) {
                $(this).removeClass('price__favorites--off');
                $(this).addClass('price__favorites--on');
                $(this).parent().find('.price__weight').addClass('price__weight--favorites');
            } else {
                $(this).removeClass('price__favorites--on');
                $(this).addClass('price__favorites--off');
                $(this).parent().find('.price__weight').removeClass('price__weight--favorites');
            }
        });
    });

    //==========================================================

    //добовление в корзину
    $(function () {
        $(".price__basket").on('click', function () {
            var b_line_content_basket = $(this).parent().parent('.b-line__content');
            if ($(this).hasClass('price__basket--off')) {
                $(this).removeClass('price__basket--off');
                $(this).addClass('price__basket--on');
                b_line_content_basket.addClass('b-line__content--basket');
                $(this).parent().find('.price__weight').addClass('price__weight--basket');
            } else {
                $(this).removeClass('price__basket--on');
                $(this).addClass('price__basket--off');
                b_line_content_basket.removeClass('b-line__content--basket');
                $(this).parent().find('.price__weight').removeClass('price__weight--basket');
            }
        });
    });

    //==========================================================

    //добовление новых 12 товаров
    $(function () {
        $(".b-page__button").on('click', function (event) {
            event.preventDefault();
            $('.b-page__tovar--hiden').each(function (i, elem) {
                if (i === 12) {
                    return false;
                } else {
                    $(this).removeClass('b-page__tovar--hiden');
                }
            });
        });
    });

    //==========================================================


})