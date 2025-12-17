$(function() {
// ここにjQueryを記述

// ドロップダウンメニュー

$('.gnav__list span').on('click',function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
});
$('.gnav__inner').on('click',function(){
    $(this).prev().toggleClass('active');
    $(this).slideToggle();
});

// スライドメニュー
$('#btn').on('click', function(){
    $('#btn__top').toggleClass('active');
    $('#btn__middle').toggleClass('active');
    $('#btn__bottom').toggleClass('active');

    $('#gnav').toggleClass('active')
    $('#gnav__mask').toggleClass('active')

});

$('#gnav a').on('click', function(){
    $('#btn__top').removeClass('active');
    $('#btn__middle').removeClass('active');
    $('#btn__bottom').removeClass('active');

    $('#gnav').removeClass('active')
    $('#gnav__mask').removeClass('active')
});

$('#gnav__mask').on('click', function(){
    $('#btn__top').removeClass('active');
    $('#btn__middle').removeClass('active');
    $('#btn__bottom').removeClass('active');

    $('#gnav').removeClass('active')
    $('#gnav__mask').removeClass('active')
});

$('.fadein').on('inview', function(){
    $(this).addClass('inview');
});

// 商品一覧

$(function(){
    $('.tab__all').addClass('active');
    $('.products__all').addClass('active');

    $('.tab__all').on('click', function(){
        $('.tab__list').removeClass('active');
        $('.products__item').removeClass('active');
        $(this).addClass('active');
        $('.products__all').addClass('active');
    });
    $('.tab__sofa').on('click', function(){
        $('.tab__list').removeClass('active');
        $('.products__item').removeClass('active');
        $(this).addClass('active');
        $('.products__sofa').addClass('active');
    });
    $('.tab__desk').on ('click', function(){
        $('.tab__list').removeClass('active');
        $('.products__item').removeClass('active');
        $(this).addClass('active');
        $('.products__desk').addClass('active');
    });
    $('.tab__chair').on ('click', function(){
        $('.tab__list').removeClass('active');
        $('.products__item').removeClass('active');
        $(this).addClass('active');
        $('.products__chair').addClass('active');
    });
    $('.tab__dining').on('click', function(){
        $('.tab__list').removeClass('active');
        $('.products__item').removeClass('active');
        $(this).addClass('active');
        $('.products__dining').addClass('active');
    });
});

// modal
$('.works__list1 .works__more').on('click', function(){
    $('body').css("over-flow-y", "hidden");
    $('.works__list1 .works__modal').addClass('active');
});

$('.works__list1 .works__modalMore').on('click', function(){
    $('body').css("over-flow-y", "auto");
    $('.works__list1 .works__modal').removeClass('active');
});

$('.works__list2 .works__more').on('click', function(){
    $('body').css("over-flow-y", "hidden");
    $('.works__list2 .works__modal').addClass('active');
});

$('.works__list2 .works__modalMore').on('click', function(){
    $('body').css("over-flow-y", "auto");
    $('.works__list2 .works__modal').removeClass('active');
});

$('.works__list3 .works__more').on('click', function(){
    $('body').css("over-flow-y", "hidden");
    $('.works__list3 .works__modal').addClass('active');
});

$('.works__list3 .works__modalMore').on('click', function(){
    $('body').css("over-flow-y", "auto");
    $('.works__list3 .works__modal').removeClass('active');
});

// スライドトグル

$('.faq__list dd').hide();
$('.faq__list dt').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});






});