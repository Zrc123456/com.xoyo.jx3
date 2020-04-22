$('.nav-bg').hover(function () {
    $(this).addClass('nav-bg1').parent().siblings().children('i').removeClass('nav-bg1')
})
let flag = true
$('.fixed-right li').eq(0).click(function () {
    if (flag) {
        $(this).css({
            'animation': 'rotate 5s linear infinite',
            'background-image': 'url(./img/audio_play.ca9ae290.png)'
        })
        $('audio')[0].play()
        flag = false
        // stopSound()
    } else {
        $(this).css({
            'background-image': 'url(./img/audio_pause.733099db.png)',
            'animation': 'none',
        })
        $('audio')[0].pause()
        flag = true
        // playSound()
    }
})
$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function move(anchorLick, index) {
            if (index == 2) {
                $('.gf-bottom li').eq(0).animate({
                    height: 560,
                    width: 445
                }, 100, function () {
                    $('.gf-bottom li').eq(1).animate({
                        height: 560,
                        width: 445
                    }, 100, function () {
                        $('.gf-bottom li').eq(2).animate({
                            height: 560,
                            width: 445
                        }, 100)
                    })
                })
                $('.gf-bottom li').mouseover(function () {
                    let gIndex = $(this).index()
                    if (gIndex == 0) {
                        var img = new Image();
                        img.src = "./img/role-big-bg-1.226e5f0a.jpg";
                        img.onload = function () {
                            //内容...
                            $('.second').css({
                                'background-image': `url(./img/role-big-bg-1.226e5f0a.jpg)`
                            })
                        }

                    }
                    if (gIndex == 1) {
                        var img = new Image();
                        img.src = "./img/role-big-bg-2.38d83fb5.jpg";
                        img.onload = function () {
                            //内容...
                            $('.second').css({
                                'background-image': `url(./img/role-big-bg-2.38d83fb5.jpg)`
                            })
                        }
                    }
                    if (gIndex == 2) {
                        var img = new Image();
                        img.src = "./img/role-big-bg-3.c0986e6b.jpg";
                        img.onload = function () {
                            //内容...
                            $('.second').css({
                                'background-image': `url(./img/role-big-bg-3.c0986e6b.jpg)`
                            })
                        }
                    }
                })
            } else {
                $('.gf-bottom li').css({
                    height: 0,
                    width: 0
                })
            }
        }
    });
});
