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
            var b_line_content_basket = $(this).parent().parent('.b-line__content');
            if ($(this).hasClass('price__favorites--off')) {
                $(this).removeClass('price__favorites--off');
                $(this).addClass('price__favorites--on');
                $(this).parent().find('.price__weight').addClass('price__weight--favorites');
                b_line_content_basket.addClass('b-line__content--favorites');
            } else {
                $(this).removeClass('price__favorites--on');
                $(this).addClass('price__favorites--off');
                $(this).parent().find('.price__weight').removeClass('price__weight--favorites');
                b_line_content_basket.removeClass('b-line__content--favorites');
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
            if('300' <= $(window).width() && $(window).width() < '540') {

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
        //функция установки высоты первого уровня меню не ниже чем у второго уровня
    function setMenuLvlOneToLvlLast(){
        var FirstLi = $(".navbar__menu").children("ul.menu__level-1").find("li.level-1__li.active");
        var newCss = FirstLi.find("ul.level-2__ul").css('height');
        var oldCss = FirstLi.parent('.row--relative').css('height');
        if ($(window).width() >= '1060') {
            FirstLi.parent('.row--relative').css('min-height', newCss);
            //Установить заглушку на весь html
            var htmlHeight = $('html').height();
            var tempHeight = htmlHeight - parseInt(newCss) -155; //-155 высота хедера
            $('.border__menu--block').css('margin-top', newCss);
            $('.border__menu--block').css('height', tempHeight + 'px');
        }
        if('800' <= $(window).width() &&  $(window).width() < '1060') {
            //сбросит высоту 1 уровня меню
            FirstLi.parent('.row--relative').css('min-height', 380);
            FirstLi.parent('.row--relative').css('height', newCss);
            var htmlHeight = $('html').height();
            var tempHeight = htmlHeight - parseInt(newCss) -155; //-155 высота хедера
            //$('.border__menu--block').css('margin-top', newCss);
            $('.border__menu--block').css('height', tempHeight + 'px');
        }
        if('300' <= $(window).width() &&  $(window).width() < '800') {
            var htmlHeight = $('html').height();
            var tempHeight = htmlHeight - parseInt(newCss) -266; //высота хедера
            $('.border__menu--block').css('margin-top', newCss);
            $('.border__menu--block').css('height', tempHeight + 'px');
        }
    }
        //основная функция обработки меню при всех стостояниях
    function menuAll(liFirst){
        if ($(window).width() >= '1060') {
            //отменяем назначеные события
            liFirst.unbind();
            //сброс высоты
            //liFirst.parent().parent('.row--relative').css('min-height', 50);
            liFirst.hover(
                function(){
                    $(this).find("ul.level-2__ul").addClass('level-2__ul--block');
                    $(this).parent().find('li.level-1__li.active').removeClass('active');
                    $(this).addClass('active');
                    //$('.menu__level-1').addClass('menu__level-1--min-height-none');
                    $('.border__menu').addClass('border__menu--block');
                    setMenuLvlOneToLvlLast();
                },
                function(){
                    $(this).find("ul.level-2__ul").removeClass('level-2__ul--block');
                    $(this).removeClass('active');
                    $('.row--relative').css('min-height', 50);
                    //$('.menu__level-1').removeClass('menu__level-1--min-height-none');
                    $('.border__menu').removeClass('border__menu--block');
                    $('.border__menu--block').css('height', 0);
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
            //liFirst.unbind();
            setMenuLvlOneToLvlLast();
            liFirst.click(function() {
                if (!$(this).hasClass('active')) {
                    //находим li с классом active. Удаляем клас и удаляем div.treug
                    $(this).parent().find('li.level-1__li.active').find("ul.level-2__ul").css('display' , 'none');
                    $(this).parent().find('li.level-1__li.active').removeClass('active');
                    $(this).addClass('active');
                    $(this).find("ul.level-2__ul").css('display' , 'block');
                    setMenuLvlOneToLvlLast();
                    $('.menu__level-1').removeClass('menu__level-1--treug');
                    $('li.level-1__li.active').find('ul.level-2__ul').css('top', 50);
                }
            });
            $('.treug__mini--menu').click(function() {
                $('.menu__level-1').toggleClass('menu__level-1--treug');
                //ищем высоту 2 меню
                var topCss = $('.menu__level-1').css('height');
                console.log('1');
                $('li.level-1__li.active').find('ul.level-2__ul').css('top', topCss);
                //$('li.level-1__li.active').find('ul.level-2__ul').toggle();
            });

        }
        if('300' <= $(window).width() && $(window).width() < '540') {
            //liFirst.unbind();
            setMenuLvlOneToLvlLast();
            liFirst.click(function() {
                if (!$(this).hasClass('active')) {
                    //находим li с классом active. Удаляем клас и удаляем div.treug
                    $(this).parent().find('li.level-1__li.active').find("ul.level-2__ul").css('display' , 'none');
                    $(this).parent().find('li.level-1__li.active').removeClass('active');
                    $(this).addClass('active');
                    $(this).find("ul.level-2__ul").css('display' , 'block');
                    setMenuLvlOneToLvlLast();
                    $('.menu__level-1').removeClass('menu__level-1--treug');
                    $('li.level-1__li.active').find('ul.level-2__ul').css('top', 40);
                }
            });
            $('.treug__mini--menu').click(function() {
                $('.menu__level-1').toggleClass('menu__level-1--treug');
                //ищем высоту 2 меню
                var topCss = $('.menu__level-1').css('height');
                console.log('1');
                $('li.level-1__li.active').find('ul.level-2__ul').css('top', topCss);
                //$('li.level-1__li.active').find('ul.level-2__ul').toggle();
            });
        }
    }

        //скрыть показать меню при width <1060, появиться кнопка в меню

    $(function () {
        $(".header__toggle").on('click', function (event) {
            if('800' <= $(window).width() &&  $(window).width() < '1060') {
                event.preventDefault();
                $('.navbar__menu').toggle();
                $('.border__menu').toggleClass('border__menu--block');
                setMenuLvlOneToLvlLast();
            }
            //добовляем управление формой поиска
            if('300' <= $(window).width() &&  $(window).width() < '800') {
                event.preventDefault();
                $('.navbar__menu').toggle();
                $('.navbar__menu').toggleClass('navbar__munu--desktop-540');
                $('.header__search').toggle();
                $('.navbar__header').toggleClass('navbar__header--small-desctop');
                $('.border__menu').toggleClass('border__menu--block');
                setMenuLvlOneToLvlLast();
            }
        });
    });


        //выполняет функцию по первичному определению меню. Переопределяет если менялся размер экрана
    $(function () {
        var liFirst = $(".navbar__menu").children("ul.menu__level-1").find("li.level-1__li");
        menuAll(liFirst);
        $(window).resize(function(){
            menuAll(liFirst);
            //console.log();
        });
    });

    //==========================================================




})