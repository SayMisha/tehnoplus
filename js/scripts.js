window.onload = function () {
    
    $('.hamburger').on('click', function () {
        $('.menu__language--button').toggleClass('menu__language--button--active');
        $('.menu__list').toggleClass('show');
        
        $('.overlay_menu').toggleClass('show');
    });
    let sliderWrapper = $('.slider__top--wrapper');
    let sliderContent = $('.slider__top--content');

    sliderWrapper.css({
        "height": sliderContent.height() - 17 + "px"
    });
    window.onresize = function () {
        sliderWrapper.css({
            "height": sliderContent.height() - 17 + "px"
        });
    }  
    function Slider3(content, items) {
        let isRun = false;
        this.content = content;
        this.items = items;
        let scrollingLeft = 0;

        this.next = function () {
            if (isRun) {
                return;
            }
            isRun = true;
            scrollingLeft = scrollingLeft + this.items[0].scrollWidth + parseInt(getComputedStyle(items[0]).marginRight);

            this.content.stop(true).animate({ scrollLeft: scrollingLeft }, function () {
                isRun = false;
            });
        }
        this.prev = function () {
            if (isRun) {
                return;
            }
            isRun = true;
            scrollingLeft = scrollingLeft - this.items[0].scrollWidth - parseInt(getComputedStyle(items[0]).marginRight);
            if(scrollingLeft < 0) {
                scrollingLeft = 0;
            }
            this.content.stop(true).animate({ scrollLeft: scrollingLeft }, function () {
                isRun = false;
            });
        }
    }
    
    
    let sliderProductMobile = new Slider3($('.products__list--wrapper'), $('.products__item'));
    
    $('.products__list--right').on('click', function(e){
        e.preventDefault();
        sliderProductMobile.next();
    })
    $('.products__list--left').on('click', function(e){
        e.preventDefault();
        sliderProductMobile.prev();
    })
    


    // function Slider(content, items) {
    //     let isRun = false;
    //     this.content = content;
    //     this.items = items;
    //     this.i = 0;

    //     this.next = function () {
    //         if (isRun) {
    //             return;
    //         }
    //         isRun = true;
    //         var computedStyle = getComputedStyle(items[0]);

    //         let iScroll = this.content[0].scrollLeft + this.items[0].scrollWidth + parseInt(computedStyle.marginRight);
    //         this.i++;
    //         if (this.i >= this.items.length) {
    //             this.i = 0;
    //             iScroll = 0;
    //         }
    //         this.content.stop(true).animate({ scrollLeft: iScroll }, function () {
    //             isRun = false;
    //         });

    //         function callBackScroll() {
    //             var indexLeft = indexforF;
    //             var indexLeftCallback;
    //             if (indexLeftCallback == indexLeft) {
    //                 this.i = 0;
    //             } else {
    //                 indexLeftCallback = indexLeft;
    //             }
    //         }
    //     }

    //     this.prev = function () {
    //         if (isRun) {
    //             return;
    //         }
    //         isRun = true;
    //         var computedStyle = getComputedStyle(items[0]);
    //         this.i = this.content[0].scrollLeft - this.items[0].scrollWidth - parseInt(computedStyle.marginRight) + 3;
    //         if (this.i < 0) {
    //             this.i = this.content[0].scrollWidth - this.items[0].scrollWidth - parseInt(computedStyle.marginRight);
    //         }
    //         this.content.stop(true).animate({ scrollLeft: this.i }, function () {
    //             isRun = false;
    //         });
    //     }
    // }


    for (let i = 0; i < $('.slider__top--item').length; i++) {
        $('.button__dots').append($('<div class="button__dot"></div>'));

    }
    $('.button__dot:first').addClass('button__active');
    let active = 0;

    let runIs = false;
    $('.slider__top--button--right').on('click', function () {
        if (runIs) {
            return;
        }
        runIs = true;

        $('.button__dot')[active].classList.remove('button__active');
        active++;
        if (active > $('.button__dot').length - 1) {
            active = 0;
        }
        $('.button__dot')[active].classList.add('button__active');

        $('.button__dot').animate({
            scrollLeft: 0
        }, function () {
            runIs = false;
        })
    })



    $('.slider__top--button--left').on('click', function () {
        if (runIs) {
            return;
        }
        runIs = true;

        $('.button__dot')[active].classList.remove('button__active');
        active--;
        if (active < 0) {
            active = $('.button__dot').length - 1;
        }
        $('.button__dot')[active].classList.add('button__active');

        $('.button__dot').animate({
            scrollLeft: 0
        }, function () {
            runIs = false;
        })
    })

    // var sliderTop = new Slider($('.slider__top--content'), $('.slider__top--item'));

    // $('.slider__top--button--right').on('click', function () {
    //     sliderTop.next();
    // });
    // $('.slider__top--button--left').on('click', function () {
    //     sliderTop.prev();
    // });

    // var mapSlider = new Slider($('.map__slider--content'), $('.map__slider--item'));
    // $('.map__slider__buttons--right').on('click', function () {
    //     mapSlider.next();
    // });
    // $('.map__slider__buttons--left').on('click', function () {
    //     mapSlider.prev();
    // });

    // var certificatesSlider = new Slider($('.certificates__img_content'), $('.certificates__img_item'));
    // $('.certificates__button--right').on('click', function () {
    //     certificatesSlider.next();
    // });
    // $('.certificates__button--left').on('click', function () {
    //     certificatesSlider.prev();
    // });



    $('.top__search--desktop').on('click', function () {
        $('input[id="search"]').toggleClass('show-search');
    });


    let productSlider1 = function (e) {
        let content = $('.products__list--wrapper');
        let items = $('.products__item');

        $('.products__list--right').on('click', function (e) {
            e.preventDefault();
        })
    }

    const formBalansi = $('.catalog__form--calc--balansi');
    const razmerBalansi = $('.razmer-balansi');
    const obemBalansi = $('.obem-balansi');

    formBalansi.on('submit', function (e) {
        e.preventDefault();
        if (razmerBalansi[0].value == "16" || razmerBalansi[0].value == "17") {
            var firstNomber = 1652;
        }
        var score = 'Цена составит:' + ' ' + parseInt(firstNomber * obemBalansi[0].value) + ',00 ₽';
        $('.calc_info').html(score);

    });


    var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs,function(input)
{
	var label	 = input.nextElementSibling,
	labelVal = label.innerHTML;
	input.addEventListener('change', function(e)
	{
		var fileName = '';
		if(this.files && this.files.length > 1)
			fileName = ( this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		else
			fileName = e.target.value.split( '\\' ).pop();
		if( fileName )
			label.querySelector('span').innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

function backToTop() {
	// Нашли кнопку
	let button = $('.button_up');
	// Следим за скролом window
	$(window).on('scroll', function() {
		// Если скрол виндоу больше 600, тогда появляется кнопка, если меньше - убираем
		if($(this).scrollTop() >= 600) {
			button.slideDown(400);
		} else {
			button.fadeOut(400);
		}
	})
	// По клику на кнопку отменяем стандартное событие и переносимся на верх
	button.on('click', function(e) {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 700);
	})
}
backToTop();



$('.social__button').on('click', function(e) {
    e.preventDefault();
    $('.modal__call-back').css({
        "display": "block"
    });
    $('.overlay').css({
        "display": "block"
    });
});
$('.overlay').on('click', function(e) {
    e.preventDefault();
    $('.modal__call-back').css({
        "display": "none"
    });
    $('.overlay').css({
        "display": "none"
    })
});
$('.modal__call-back--close').on('click', function(e) {
    e.preventDefault();
    $('.modal__call-back').css({
        "display": "none"
    });
    $('.overlay').css({
        "display": "none"
    })
});
$('.top__search--desktop').on('click', function(e) {
    e.preventDefault();
    if ($('.search__block--desktop input')[0].clientWidth == 0 && window.innerWidth > 1023) {
        $('.search__block--desktop input').animate({
            "width": "350px"
        });
        $('.search__block--desktop').css({
            "margin-left": "auto"
        });
        $('.top__nomber--desktop').css({
            "display": "none"
        });
    } else if ($('.search__block--desktop input')[0].clientWidth == 0 && window.innerWidth <= 1023) {
        $('.search__block--desktop input').animate({
            "width": "300px"
        });
        $('.search__block--desktop').css({
            "margin-left": "auto"
        });
        $('.top__nomber--desktop').css({
            "display": "none"
        });
            } else {
        $('.search__block--desktop input').animate({
            "width": "0px"
        });
        setTimeout(function() {
            $('.search__block--desktop').css({
                "margin-left": "0"
            });
        }, 300);
        setTimeout(function() {
            $('.top__nomber--desktop').css({
                "display": "block"
            });
        }, 300);
    }
});
$('.menu__language--button').on('click', function(e) {
    e.preventDefault();
    if(window.innerWidth <= 960) {
        $('.language__list').toggleClass('show');
    }
})



$('.top__search--mobile').on('click', function(e) {
    e.preventDefault();
    if ($('.top__search--mobile--wrapper input')[0].clientWidth === 0) {
        $('.top__search--mobile--wrapper input').animate({
            "width": "130px"
        });
        $('.top__search--mobile--wrapper').css({
            "margin-left": "auto"
        });
        $('.top__nomber--mobile').css({
            "display": "none"
        });
    } else {
        $('.top__search--mobile--wrapper input').animate({
            "width": "0px"
        });
        setTimeout(function() {
            $('.top__search--mobile--wrapper').css({
                "margin-left": "0"
            });
        }, 300);
        setTimeout(function() {
            $('.top__nomber--mobile').css({
                "display": "block"
            });
        }, 300);
    }
});




for (let i = 0; i < $('.productions__slider--item-wrapper').length; i++) {
    $('.productions__dots-nomber').append($('<div class="productions__dot"></div>'));
}
$('.productions__dot:first').addClass('productions__active');
let activeDot = 0;

let runIsDot = false;
$('.productions__dots--right').on('click', function () {
    if (runIsDot) {
        return;
    }
    runIsDot = true;

    $('.productions__dot')[activeDot].classList.remove('productions__active');
    activeDot++;
    if (activeDot > $('.productions__dot').length - 1) {
        activeDot = 0;
    }
    $('.productions__dot')[activeDot].classList.add('productions__active');

    $('.productions__dot').animate({
        scrollLeft: 0
    }, function () {
        runIsDot = false;
    })
})



$('.productions__dots--left').on('click', function () {
    if (runIsDot) {
        return;
    }
    runIsDot = true;

    $('.productions__dot')[activeDot].classList.remove('productions__active');
    activeDot--;
    if (activeDot < 0) {
        activeDot = $('.productions__dot').length - 1;
    }
    $('.productions__dot')[activeDot].classList.add('productions__active');

    $('.productions__dot').animate({
        scrollLeft: 0
    }, function () {
        runIsDot = false;
    })
});

let sliderTop = new SliderV2($('.slider__top--content'), $('.slider__top--item'));
let sliderProduction = new SliderV2($('.productions__slider'), $('.productions__slider--item-wrapper'));

function SliderV2(content, items) {
    let isRun = false;
    this.content = content;
    this.items = items;
    let scrollingLeft = 0;

    this.next = function () {
        if (isRun) {
            return;
        }
        isRun = true;
        scrollingLeft = scrollingLeft + this.content[0].clientWidth;
        if(scrollingLeft >= this.content[0].scrollWidth) {
            scrollingLeft = 0;
        }
        this.content.stop(true).animate({ scrollLeft: scrollingLeft }, function () {
            isRun = false;
        });
    }
    this.prev = function () {
        if (isRun) {
            return;
        }
        isRun = true;
        scrollingLeft = scrollingLeft - this.content[0].clientWidth;
        if(scrollingLeft < 0) {
            scrollingLeft = this.content[0].scrollWidth - this.content[0].clientWidth;
        }
        this.content.stop(true).animate({ scrollLeft: scrollingLeft }, function () {
            isRun = false;
        });
    }
}



$('.productions__dots--right').on('click', function(e) {
    e.preventDefault();
    sliderProduction.next();
})
$('.productions__dots--left').on('click', function(e) {
    e.preventDefault();
    sliderProduction.prev();
})
$('.slider__top--button--right').on('click', function(e) {
    e.preventDefault();
    sliderTop.next();
})
$('.slider__top--button--left').on('click', function(e) {
    e.preventDefault();
    sliderTop.prev();
})

let sliderCertificates = new SliderWithMargin($('.certificates__img_content'), $('.certificates__img_item'));
$('.certificates__button--right').on('click', function(e){
    e.preventDefault();
    sliderCertificates.next();
})
$('.certificates__button--left').on('click', function(e){
    e.preventDefault();
    sliderCertificates.prev();
})

let sliderMap = new SliderWithMargin($('.map__slider--content'), $('.map__slider--item'));
$('.map__slider__buttons--right').on('click', function(e){
    e.preventDefault();
    sliderMap.next();
})
$('.map__slider__buttons--left').on('click', function(e){
    e.preventDefault();
    sliderMap.prev();
})

function SliderWithMargin(content, items) {
    let isRun = false;
    this.content = content;
    this.items = items;
    let scrollingLeft = 0;
    let i = 0;

    this.next = function () {
        if (isRun) {
            return;
        }
        isRun = true;
        i++;
        scrollingLeft = scrollingLeft + this.items[0].scrollWidth + parseInt(getComputedStyle(items[0]).marginRight);
        if(i >= this.items.length) {
            scrollingLeft = 0;
            i = 0;
        }
        this.content.stop(true).animate({ scrollLeft: scrollingLeft }, function () {
            isRun = false;
        });
    }

    this.prev = function () {
        if (isRun) {
            return;
        }
        isRun = true;

        i--;
        scrollingLeft = scrollingLeft - this.items[0].scrollWidth - parseInt(getComputedStyle(items[0]).marginRight);
        if(i < 0) {
            scrollingLeft = this.content[0].scrollWidth - this.content[0].clientWidth;;
            i = this.items.length - 1;
        }
        this.content.stop(true).animate({ scrollLeft: scrollingLeft }, function () {
            isRun = false;
        });
    }
}




}