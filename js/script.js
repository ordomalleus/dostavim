$(window).load(function () {

    //==========================================================

    //Проверка на Touch на странице товаров
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

    //добовление в избранное на странице товаров
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

    //добовление в корзину на странице товаров
    $(function () {
        $(".price__basket").on('click', function () {
            var b_line_content_basket = $(this).parent().parent('.b-line__content');
            if ($(this).hasClass('price__basket--off')) {
                $(this).removeClass('price__basket--off');
                $(this).addClass('price__basket--on');
                b_line_content_basket.addClass('b-line__content--basket');
                $(this).parent().find('.price__weight').addClass('price__weight--basket');
                b_line_content_basket.find('.content__images').append("<div class='test__lol'></div>");
            } else {
                $(this).removeClass('price__basket--on');
                $(this).addClass('price__basket--off');
                b_line_content_basket.removeClass('b-line__content--basket');
                $(this).parent().find('.price__weight').removeClass('price__weight--basket');
                b_line_content_basket.find('.test__lol').remove();
            }
        });
    });

    //==========================================================

    //добовление новых 12 товаров на странице товаров
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

    //скрипт для меню
        //функция установки высоты первого уровня меню не ниже чем у второго уровня при 800 < width <1060
    function setMenuLvlOneToLvlLast(){
        var FirstLi = $(".navbar__menu").children("ul.menu__level-1").find("li.level-1__li.active");
        var newCss = FirstLi.find("ul.level-2__ul").css('height');
        var oldCss = FirstLi.parent('.row--relative').css('height');
        if(newCss >= oldCss){
            FirstLi.parent('.row--relative').css('min-height', newCss);
        } else{
            //сбросит высоту 1 уровня меню
            FirstLi.parent('.row--relative').css('min-height', 320);
        }
    }
        //основная функция обработки меню при всех стостояниях
    function menuAll(liFirst){
        if ($(window).width() >= '1060') {
            //отменяем назначеные события
            liFirst.unbind();
            //сброс высоты
            liFirst.parent('.row--relative').css('min-height', 50);
            liFirst.hover(
                function(){
                    $(this).find("ul.level-2__ul").stop(false,true).fadeIn(300);
                },
                function(){
                    $(this).find("ul.level-2__ul").stop(false,true).fadeOut(300);
                }
            );
        }
        if('800' <= $(window).width() &&  $(window).width() < '1060') {
            //установим одинаковую высоту разных уровней меню
            setMenuLvlOneToLvlLast();
            //отменяем назначеные события
            liFirst.unbind();
            liFirst.click(function() {
                if (!$(this).hasClass('active')) {
                    //находим li с классом active. Удаляем клас и удаляем div.treug
                    $(this).parent().find('li.level-1__li.active').find("ul.level-2__ul").css('display' , 'none');
                    $(this).parent().find('li.level-1__li.active').removeClass('active').find('.treug').remove();
                    $(this).addClass('active').append("<div class='treug'></div>");
                    $(this).find("ul.level-2__ul").css('display' , 'block');
                    setMenuLvlOneToLvlLast();
                }
            });
        }
        if('540' <= $(window).width() && $(window).width() < '800') {
            var lol = '540-800';
            console.log(lol);

        }
        if($(window).width() && $(window).width() < '540') {
            var lol = '300-540';
            console.log(lol);

        }
    }

        //скрыть показать меню при width <1060, появиться кнопка в меню
    $(function () {
        $(".header__toggle").on('click', function (event) {
            event.preventDefault();
            $('.navbar__menu').toggle(300);
            setMenuLvlOneToLvlLast();
        });
    });

        //выполняет функцию по первичному определению меню. Переопределяет если менялся размер экрана
    $(function () {
        var liFirst = $(".navbar__menu").children("ul.menu__level-1").find("li.level-1__li");
        menuAll(liFirst);
        $(window).resize(function(){
            menuAll(liFirst);
        });
    });
    /*
    $(function () {
        $(".navbar__menu").children("ul.menu__level-1").find("li.level-1__li").hover(
            function(){
                var test = $(this).find("ul.level-2__ul");
                test.stop(false,true).fadeIn(300);
                var new_height = test.css('height');
                test.parent().parent('.row--relative').css('min-height', new_height);
                //console.log(test);
            },
            function(){
                var test = $(this).find("ul.level-2__ul");
                test.stop(false,true).fadeOut(300);
            }
        );
    });*/

    //==========================================================




})