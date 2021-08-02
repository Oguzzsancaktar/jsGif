var imageArr = null;
var activeImage = 0;
var gifInterval = null;




function mouseEnter() {

    gifInterval = setInterval(() => {

        for (let i = 0; i < imageArr.length; i++) {
            $(imageArr[i]).removeClass('active')
        }

        activeImage++;
        if (activeImage < imageArr.length) {

        } else {
            activeImage = 0;
        }

        $(imageArr[activeImage]).addClass('active')


    }, 1500)
}

function mouseLeave() {
    clearInterval(gifInterval);
    activeImage = 0;
    for (let i = 0; i < imageArr.length; i++) {
        $(imageArr[i]).removeClass('active')
    }

    $(imageArr[activeImage]).addClass('active')
}




function generateGif(type, aciveFirstTime) {
    let gifHTML = ``
    gifHTML = `
    <img src="./assets/${type}/1.png" alt="./assets/${type}/1.png" class="hover__slider__image">
    <img src="./assets/${type}/2.png" alt="./assets/${type}/2.png" class="hover__slider__image">
    <img src="./assets/${type}/3.png" alt="./assets/${type}/3.png" class="hover__slider__image">
    <img src="./assets/${type}/4.png" alt="./assets/${type}/4.png" class="hover__slider__image">
    `
    $(".hover__slider").html(gifHTML)
    imageArr = $('.hover__slider__image')

    aciveFirstTime()
}

generateGif("art", aciveFirstTime)



function aciveFirstTime() {
    $(imageArr[activeImage]).addClass('active')
}
