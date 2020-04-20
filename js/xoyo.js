$('.zhuce-phone').on('click', function () {
    $('.phone-bottom').show().next().hide()
    $(this).addClass('active').next().removeClass('active')
})
$('.zhuce-ge').on('click', function () {
    $(this).addClass('active').prev().removeClass('active')
    $('.ge-bottom').show().prev().hide()
})
$('.haoli').mouseover(function () {
    $('.haoli .jian-left').show()
    $('.haoli .jian-right').show()
})
$('.haoli').mouseout(function () {
    $('.haoli .jian-left').hide()
    $('.haoli .jian-right').hide()
})
$('.down-li').mouseover(function () {
    $('.down-li .jian-left').show()
    $('.down-li .jian-right').show()
})
$('.down-li').mouseout(function () {
    $('.down-li .jian-left').hide()
    $('.down-li .jian-right').hide()
})
// 点击
let index = 0
$('.haoli .jian-right').on('click', function () {
    index++
    if (index > $('.haoli ul li').length - 1) {
        index = 0
    }
    $('.haoli ul li').eq(index).fadeIn(500).siblings().fadeOut()
    $('.haoli ol li').eq(index).addClass('active1').siblings().removeClass('active1')
})
$('.haoli .jian-left').on('click', function () {
    index--
    if (index < 0) {
        index = $('.haoli ul li').length
    }
    $('.haoli ul li').eq(index).fadeIn(500).siblings().fadeOut()
    $('.haoli ol li').eq(index).addClass('active1').siblings().removeClass('active1')
})
let index1 = 0
$('.down-li .jian-right').on('click', function () {
    index1++
    if (index1 > $('.down-li ul li').length - 1) {
        index1 = 0
    }
    $('.down-li ul li').eq(index1).fadeIn(500).siblings().fadeOut()
    $('.down-li ol li').eq(index1).addClass('active1').siblings().removeClass('active1')
})
$('.down-li .jian-left').on('click', function () {
    index1--
    if (index1 < 0) {
        index1 = $('.down-li ul li').length
    }
    $('.down-li ul li').eq(index1).fadeIn(500).siblings().fadeOut()
    $('.down-li ol li').eq(index1).addClass('active1').siblings().removeClass('active1')
})

let move = setInterval(function () {
    $('.haoli .jian-right').click()
}, 2000)
let move1 = setInterval(function () {
    $('.down-li .jian-right').click()
}, 2100)
$('.haoli ol li').click(function () {
    $(this).addClass('active1').siblings().removeClass('active1')
    let index = $(this).index()
    $('.haoli li').eq(index).fadeIn(500).siblings().fadeOut(500)
})
$('.down-li ol li').click(function () {
    $(this).addClass('active1').siblings().removeClass('active1')
    let index = $(this).index()
    $('.down-li li').eq(index).fadeIn(500).siblings().fadeOut(500)
})
$('.open').click(function () {
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
$('.word-daohang li').mouseover(function () {
    $(this).stop().animate({
        marginTop: 20
    }, 500)
})
$('.word-daohang li').mouseout(function () {
    $(this).stop().animate({
        marginTop: 0
    }, 500)
})
$('.word-daohang li').click(function () {
    let index = $(this).index()
    $('.word-video video').eq(index).show().siblings().hide()
})
let index2 = 0
$('.word-right').on('click', function () {
    index2++
    if (index2 > $('.word-video video').length - 1) {
        index2 = 0
    }
    if (index2 == 0) {
        $('.word-daohang li').eq(index2).css({
            'background-position': '-368px 0px'
        })
    } else {
        $('.word-daohang li').eq(0).css({
            'background-position': '0px 0px'
        })
    }
    if (index2 == 1) {
        $('.word-daohang li').eq(index2).css({
            'background-position': '-426px 0px'
        })
    } else {
        $('.word-daohang li').eq(1).css({
            'background-position': '-58px 0px'
        })
    }
    if (index2 == 2) {
        $('.word-daohang li').eq(index2).css({
            'background-position': '-481px 0px'
        })
    } else {
        $('.word-daohang li').eq(2).css({
            'background-position': '-114px 0px'
        })
    }
    if (index2 == 3) {
        $('.word-daohang li').eq(index2).css({
            'background-position': '-538px 0px'
        })
    } else {
        $('.word-daohang li').eq(3).css({
            'background-position': '-169px 0px'
        })
    }
    if (index2 == 4) {
        $('.word-daohang li').eq(index2).css({
            'background-position': '-593px 0px'
        })
    } else {
        $('.word-daohang li').eq(4).css({
            'background-position': '-226px 0px'
        })
    }
    if (index2 == 5) {
        $('.word-daohang li').eq(index2).css({
            'background-position': '-648px 0px'
        })
    } else {
        $('.word-daohang li').eq(5).css({
            'background-position': '-281px 0px'
        })
    }
    $('.word-video video').eq(index2).fadeIn(500).siblings().fadeOut()
    $('.word-daohang li').eq(index2).animate({
        marginTop: 20
    }, 500, function () {
        $('.word-daohang li').eq(index2).siblings().animate({
            marginTop: 0
        }, 20)
    })
})
$('.word-daohang li').eq(0).hover(function () {
    $(this).css({
        'background-position': '-368px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '0px 0px'
    })
})
$('.word-daohang li').eq(1).hover(function () {
    $(this).css({
        'background-position': '-426px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-58px 0px'
    })
})
$('.word-daohang li').eq(2).hover(function () {
    $(this).css({
        'background-position': '-481px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-114px 0px'
    })
})
$('.word-daohang li').eq(3).hover(function () {
    $(this).css({
        'background-position': '-538px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-169px 0px'
    })
})
$('.word-daohang li').eq(4).hover(function () {
    $(this).css({
        'background-position': '-593px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-226px 0px'
    })
})
$('.word-daohang li').eq(5).hover(function () {
    $(this).css({
        'background-position': '-648px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-281px 0px'
    })
})
let wordMove = setInterval(function () {
    $('.word-right').click()
}, 5000)
$('.zh-daohang li').eq(0).hover(function () {
    $(this).css({
        'background-position': '0px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '0px 0px'
    })
})
$('.zh-daohang li').eq(1).hover(function () {
    $(this).css({
        'background-position': '-88px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-88px 0px'
    })
})
$('.zh-daohang li').eq(2).hover(function () {
    $(this).css({
        'background-position': '-176px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-176px 0px'
    })
})
$('.zh-daohang li').eq(3).hover(function () {
    $(this).css({
        'background-position': '-264px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-264px 0px'
    })
})
$('.zh-daohang li').eq(4).hover(function () {
    $(this).css({
        'background-position': '-352px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-352px 0px'
    })
})
$('.zh-daohang li').eq(5).hover(function () {
    $(this).css({
        'background-position': '-440px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-440px 0px'
    })
})
$('.zh-daohang li').eq(6).hover(function () {
    $(this).css({
        'background-position': '-528px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-528px 0px'
    })
})
$('.zh-daohang li').eq(7).hover(function () {
    $(this).css({
        'background-position': '-616px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-616px 0px'
    })
})
$('.zh-daohang li').eq(8).hover(function () {
    $(this).css({
        'background-position': '-704px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-704px 0px'
    })
})
$('.zh-daohang li').eq(9).hover(function () {
    $(this).css({
        'background-position': '-792px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-792px 0px'
    })
})
$('.zh-daohang li').eq(10).hover(function () {
    $(this).css({
        'background-position': '-880px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-880px 0px'
    })
})
$('.zh-daohang li').eq(11).hover(function () {
    $(this).css({
        'background-position': '-968px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-968px 0px'
    })
})
$('.zh-daohang li').eq(12).hover(function () {
    $(this).css({
        'background-position': '-1056px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-1056px 0px'
    })
})
$('.zh-daohang li').eq(13).hover(function () {
    $(this).css({
        'background-position': '-1144px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-1141px 0px'
    })
})
$('.zh-daohang li').eq(14).hover(function () {
    $(this).css({
        'background-position': '-1232px -40px'
    })
}, function () {
    $(this).css({
        'background-position': '-1232px 0px'
    })
})
$('.zh-daohang li').click(function () {
    let index = $(this).index()
    $('.zh-hua img').eq(index).fadeIn(500).siblings().fadeOut(500)
})
let index4 = 0
$('.zh-right').on('click', function () {
    index4++
    if (index4 > $('.zh-hua img').length - 1) {
        index4 = 0
    }
    $('.zh-hua img').eq(index4).fadeIn(500).siblings().fadeOut()
    if (index4 == 0) {
        $('.zh-daohang li').eq(0).css({
            'background-position': '0px -40px'
        })
    } else {
        $('.zh-daohang li').eq(0).css({
            'background-position': '0px 0px'
        })
    }
    if (index4 == 1) {
        $('.zh-daohang li').eq(1).css({
            'background-position': '-88px -40px'
        })
    } else {
        $('.zh-daohang li').eq(1).css({
            'background-position': '-88px 0px'
        })
    }
    if (index4 == 2) {
        $('.zh-daohang li').eq(2).css({
            'background-position': '-176px -40px'
        })
    } else {
        $('.zh-daohang li').eq(2).css({
            'background-position': '-176px 0px'
        })
    }
    if (index4 == 3) {
        $('.zh-daohang li').eq(3).css({
            'background-position': '-264px -40px'
        })
    } else {
        $('.zh-daohang li').eq(3).css({
            'background-position': '-264px 0px'
        })
    }
    if (index4 == 4) {
        $('.zh-daohang li').eq(4).css({
            'background-position': '-352px -40px'
        })
    } else {
        $('.zh-daohang li').eq(4).css({
            'background-position': '-352px 0px'
        })
    }
    if (index4 == 5) {
        $('.zh-daohang li').eq(5).css({
            'background-position': '-440px -40px'
        })
    } else {
        $('.zh-daohang li').eq(5).css({
            'background-position': '-440px 0px'
        })
    }
    if (index4 == 6) {
        $('.zh-daohang li').eq(6).css({
            'background-position': '-528px -40px'
        })
    } else {
        $('.zh-daohang li').eq(6).css({
            'background-position': '-528px 0px'
        })
    }
    if (index4 == 7) {
        $('.zh-daohang li').eq(7).css({
            'background-position': '-616px -40px'
        })
    } else {
        $('.zh-daohang li').eq(7).css({
            'background-position': '-616px 0px'
        })
    }
    if (index4 == 8) {
        $('.zh-daohang li').eq(8).css({
            'background-position': '-704px -40px'
        })
    } else {
        $('.zh-daohang li').eq(8).css({
            'background-position': '-704px 0px'
        })
    }
    if (index4 == 9) {
        $('.zh-daohang li').eq(9).css({
            'background-position': '-792px -40px'
        })
    } else {
        $('.zh-daohang li').eq(9).css({
            'background-position': '-792px 0px'
        })
    }
    if (index4 == 10) {
        $('.zh-daohang li').eq(10).css({
            'background-position': '-880px -40px'
        })
    } else {
        $('.zh-daohang li').eq(10).css({
            'background-position': '-880px 0px'
        })
    }
    if (index4 == 11) {
        $('.zh-daohang li').eq(11).css({
            'background-position': '-968px -40px'
        })
    } else {
        $('.zh-daohang li').eq(11).css({
            'background-position': '-968px 0px'
        })
    }
    if (index4 == 12) {
        $('.zh-daohang li').eq(12).css({
            'background-position': '-1056px -40px'
        })
    } else {
        $('.zh-daohang li').eq(12).css({
            'background-position': '-1056px 0px'
        })
    }
    if (index4 == 13) {
        $('.zh-daohang li').eq(13).css({
            'background-position': '-1144px -40px'
        })
    } else {
        $('.zh-daohang li').eq(13).css({
            'background-position': '-1144px 0px'
        })
    }
    if (index4 == 14) {
        $('.zh-daohang li').eq(14).css({
            'background-position': '-1232px -40px'
        })
    } else {
        $('.zh-daohang li').eq(14).css({
            'background-position': '-1232px 0px'
        })
    }
})
let zhMove = setInterval(function () {
    $('.zh-right').click()
}, 4000)
$('.wanfa-daohang li').eq(0).hover(function () {
    $(this).css({
        'background-position': '-368px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '0px 0px'
    })
})
$('.wanfa-daohang li').eq(1).hover(function () {
    $(this).css({
        'background-position': '-426px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-58px 0px'
    })
})
$('.wanfa-daohang li').eq(2).hover(function () {
    $(this).css({
        'background-position': '-481px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-114px 0px'
    })
})
$('.wanfa-daohang li').eq(3).hover(function () {
    $(this).css({
        'background-position': '-538px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-169px 0px'
    })
})
$('.wanfa-daohang li').eq(4).hover(function () {
    $(this).css({
        'background-position': '-593px 0px'
    })
}, function () {
    $(this).css({
        'background-position': '-226px 0px'
    })
})
$('.wanfa-daohang li').click(function () {
    let index = $(this).index()
    $('.wanfa-hua img').eq(index).show().siblings().hide()
})

let wanfaIndex = 0
$('.wanfa-right').on('click', function () {
    wanfaIndex++
    if (wanfaIndex > $('.wanfa-hua img').length - 1) {
        wanfaIndex = 0
    }
    if (wanfaIndex == 0) {
        $('.wanfa-daohang li').eq(wanfaIndex).css({
            'background-position': '-368px 0px'
        })
    } else {
        $('.wanfa-daohang li').eq(0).css({
            'background-position': '0px 0px'
        })
    }
    if (wanfaIndex == 1) {
        $('.wanfa-daohang li').eq(wanfaIndex).css({
            'background-position': '-426px 0px'
        })
    } else {
        $('.wanfa-daohang li').eq(1).css({
            'background-position': '-58px 0px'
        })
    }
    if (wanfaIndex == 2) {
        $('.wanfa-daohang li').eq(wanfaIndex).css({
            'background-position': '-481px 0px'
        })
    } else {
        $('.wanfa-daohang li').eq(2).css({
            'background-position': '-114px 0px'
        })
    }
    if (wanfaIndex == 3) {
        $('.wanfa-daohang li').eq(wanfaIndex).css({
            'background-position': '-538px 0px'
        })
    } else {
        $('.wanfa-daohang li').eq(3).css({
            'background-position': '-169px 0px'
        })
    }
    if (wanfaIndex == 4) {
        $('.wanfa-daohang li').eq(wanfaIndex).css({
            'background-position': '-593px 0px'
        })
    } else {
        $('.wanfa-daohang li').eq(4).css({
            'background-position': '-226px 0px'
        })
    }
    $('.wanfa-hua img').eq(wanfaIndex).fadeIn(500).siblings().fadeOut()
    $('.wanfa-daohang li').eq(wanfaIndex).animate({
        marginTop: 20
    }, 500, function () {
        $('.wanfa-daohang li').eq(wanfaIndex).siblings().animate({
            marginTop: 0
        }, 20)
    })
})
$('.wanfa-daohang li').mouseover(function () {
    $(this).stop().animate({
        marginTop: 20
    }, 500)
})
$('.wanfa-daohang li').mouseout(function () {
    $(this).stop().animate({
        marginTop: 0
    }, 500)
})
let wanMove = setInterval(function () {
    $('.wanfa-right').click()
}, 3000)
$('.qg-open').click(function () {
    $('.qg-video').show()
    $('.qg-video video').trigger('play')
    $('body').css({
        "overflow-y": "hidden"
    })
})
$('.qg-close').click(function () {
    $('.qg-video').hide()
    $('.qg-video video').trigger('pause')
    $('body').css({
        "overflow-y": "scroll"
    })
})

$('.lou li').eq(0).click(function () {
    $('body,html').animate({
        scrollTop: $('.nav1').offset().top
    })
})
$('.lou li').eq(1).click(function () {
    let top = $('.menpai').offset().top
    $('body,html').animate({
        scrollTop: top
    }, 1000)
})
$('.lou li').eq(2).click(function () {
    $('body,html').animate({
        scrollTop: $('.word').offset().top
    }, 1000)
})
$('.lou li').eq(3).click(function () {
    $('body,html').animate({
        scrollTop: $('.zh').offset().top
    }, 1000)
})
$('.lou li').eq(4).click(function () {
    $('body,html').animate({
        scrollTop: $('.wanfa').offset().top
    }, 1000)
})
$('.lou li').eq(5).click(function () {
    $('body,html').animate({
        scrollTop: $('.qg').offset().top
    }, 1000)
})
$('.lou li').eq(6).click(function () {
    $('body,html').animate({
        scrollTop: $('.dazhan').offset().top
    }, 1000)
})
$(window).on('scroll', function () {
    if ($(this).scrollTop() >= $('.nav1').offset().top) {
        $('.lou').show()
    } else {
        $('.lou').hide()
    }
    if ($(this).scrollTop() >= $('.nav1').offset().top && $(this).scrollTop() < $('.menpai').offset().top) {
        $('.lou li').eq(0).css({
            'background-position': '-95px -12px'
        })
    } else {
        $('.lou li').eq(0).css({
            'background-position': '0px -12px'
        })
    }
    if ($(this).scrollTop() >= $('.menpai').offset().top && $(this).scrollTop() < $('.word').offset().top) {
        $('.lou li').eq(1).css({
            'background-position': '-95px -185px'
        })
    } else {
        $('.lou li').eq(1).css({
            'background-position': '0px -185px'
        })
    }
    if ($(this).scrollTop() >= $('.word').offset().top && $(this).scrollTop() < $('.zh').offset().top) {
        $('.lou li').eq(2).css({
            'background-position': '-95px -278px'
        })
    } else {
        $('.lou li').eq(2).css({
            'background-position': '0px -278px'
        })
    }
    if ($(this).scrollTop() >= $('.zh').offset().top && $(this).scrollTop() < $('.wanfa').offset().top) {
        $('.lou li').eq(3).css({
            'background-position': '-95px -370px'
        })
    } else {
        $('.lou li').eq(3).css({
            'background-position': '0px -370px'
        })
    }
    if ($(this).scrollTop() >= $('.wanfa').offset().top && $(this).scrollTop() < $('.qg').offset().top) {
        $('.lou li').eq(4).css({
            'background-position': '-95px -462px'
        })
    } else {
        $('.lou li').eq(4).css({
            'background-position': '0px -462px'
        })
    }
    if ($(this).scrollTop() >= $('.qg').offset().top && $(this).scrollTop() < $('.dazhan').offset().top) {
        $('.lou li').eq(5).css({
            'background-position': '-95px -554px'
        })
    } else {
        $('.lou li').eq(5).css({
            'background-position': '0px -554px'
        })
    }
    if ($(this).scrollTop() >= $('.dazhan').offset().top) {
        $('.lou li').eq(6).css({
            'background-position': '-95px -646px'
        })
    } else {
        $('.lou li').eq(6).css({
            'background-position': '0px -646px'
        })
    }
})