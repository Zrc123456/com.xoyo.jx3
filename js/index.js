$('.nav li:nth-child(2)').hover(function () {
    $('.yxts').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.yxts').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(3)').hover(function () {
    $('.xw').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.xw').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(4)').hover(function () {
    $('.sp').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.sp').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(5)').hover(function () {

    $('.tr').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.tr').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(7)').hover(function () {

    $('.tl').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.tl').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(8)').hover(function () {

    $('.mb').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.mb').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.nav li:nth-child(10)').hover(function () {

    $('.kf').stop().slideDown(300).parent().siblings().children('div').slideUp(300)
}, function () {
    $('.kf').mouseleave(function () {
        $(this).slideUp(300)
    })
})
$('.main-bg img').click(function () {
    $('.men-video').show()
    $('.men-video').show()
    $('.men-video video').trigger('play')
    $('body').css({
        "overflow-y": "hidden"
    })
})
$('.men-video .close').click(function () {
    $('.men-video').hide()
    $('.men-video video').trigger('pause')
    $('body').css({
        "overflow-y": "scroll"
    })
})
let bannerIndex = 0
$('.banner-right').click(function () {
    bannerIndex++
    if (bannerIndex > $('.banner ul li').length - 1) {
        bannerIndex = 0
    }
    $('.banner ul').animate({
        left: -bannerIndex * 820
    }, 500)
    $('.banner ol li').eq(bannerIndex).attr('id', 'banner-active').siblings().removeAttr('id')
})
$('.banner-left').click(function () {
    bannerIndex--
    if (bannerIndex < 0) {
        bannerIndex = $('.banner ul li').length - 1
    }
    $('.banner ul').animate({
        left: -bannerIndex * 820
    }, 500)
    $('.banner ol li').eq(bannerIndex).attr('id', 'banner-active').siblings().removeAttr('id')
})
$('.banner ol li').click(function () {
    let index = $(this).index()
    $('.banner ul').animate({
        left: -index * 820
    }, 500)
    $(this).attr('id', 'banner-active').siblings().removeAttr('id')
})
let bannerMove = setInterval(function () {
    $('.banner-right').click()
}, 2000)
$('.about-top-left-top p').click(function () {
    if ($(this).index() == 1) {
        $(this).addClass('about-active').next().removeClass('about-active')
        $('.about-top-left-bottom').animate({
            left: 0
        }, 1000)
    }
    if ($(this).index() == 2) {
        $(this).addClass('about-active').prev().removeClass('about-active')
        $('.about-top-left-bottom').animate({
            left: -800
        }, 1000)
    }

})
$('.about-top-right-top li').click(function () {
    $(this).addClass('about-top-right-top-active').siblings().removeClass('about-top-right-top-active')
})