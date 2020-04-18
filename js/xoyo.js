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
    console.log(index2);

    $('.word-video video').eq(index2).fadeIn(500).siblings().fadeOut()

    $('.word-daohang li').eq(index2).animate({
        marginTop: 20
    }, 500, function () {
        $('.word-daohang li').eq(index2).siblings().animate({
            marginTop: 0
        }, 20)
    })
})
let wordMove = setInterval(function () {
    $('.word-right').click()
}, 5000)