window.onload = function() { 


let sliderWrapper = $('.slider__top--wrapper');
let sliderContent = $('.slider__top--content');

sliderWrapper.css({
    "height": sliderContent.height() - 17 + "px"
});
window.onresize = function() {
    sliderWrapper.css({
        "height": sliderContent.height() - 17 + "px"
    });
}

};