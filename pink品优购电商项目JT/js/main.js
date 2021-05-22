let allButtons = $('#buttons > li')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        let p = index * (-980)
        $('.imglb>img').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

let n = 0
let size = allButtons.length
allButtons.eq(n % size).trigger('click')

let timerId = setTimer()

$('.imglb').on('mouseenter blur', function () {
    window.clearInterval(timerId)
})
$('.imglb').on('mouseleave focus', function () {
    timerId = setTimer()
})


//页面失去焦点定时器停止
onblur = function () {
    window.clearInterval(timerId);
}
//页面获取焦点时重启定时器
onfocus = function () {
    timerId = setTimer();
}

function activeButton($button) {
    $button.addClass('red')
        .siblings('.red').removeClass('red')
}



function setTimer() {
    return setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
            .addClass('red')
            .siblings('.red').removeClass('red')

    }, 3000)
}
