window.onload = function () {
    $('.hamburger').on('click', function () {
        $('.menu__language--button').toggleClass('menu__language--button--active');
        $('.menu__list').toggleClass('show');
    })

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


    function Slider(content, items) {

        let isRun = false;

        this.content = content;
        this.items = items;
        this.i = 0;

        this.next = function () {
            if (isRun) {
                return;
            }
            isRun = true;
            var computedStyle = getComputedStyle(items[0]);
            console.log(computedStyle);
            // this.i = this.content[0].scrollLeft + this.items[0].scrollWidth + parseInt(computedStyle.marginRight);
            // console.log(this.items.length)
            console.log(this.i);
            // console.log(this.content);



            let iScroll = this.content[0].scrollLeft + this.items[0].scrollWidth + parseInt(computedStyle.marginRight);
            this.i++;
            if (this.i >= this.items.length) {
                this.i = 0;
                iScroll = 0;
            }
            this.content.stop(true).animate({ scrollLeft: iScroll }, function () {
                isRun = false;
            });

            function callBackScroll() {
                var indexLeft = indexforF;
                var indexLeftCallback;
                if (indexLeftCallback == indexLeft) {
                    this.i = 0;
                } else {
                    indexLeftCallback = indexLeft;
                }
            }
        }

        this.prev = function () {
            if (isRun) {
                return;
            }
            isRun = true;
            var computedStyle = getComputedStyle(items[0]);
            this.i = this.content[0].scrollLeft - this.items[0].scrollWidth - parseInt(computedStyle.marginRight) + 3;
            console.log(this.i);
            if (this.i < 0) {
                this.i = this.content[0].scrollWidth - this.items[0].scrollWidth - parseInt(computedStyle.marginRight);
            }
            this.content.stop(true).animate({ scrollLeft: this.i }, function () {
                isRun = false;
            });
        }
    }


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
        console.log($('.button__dot').length);
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

    // for (let i = 0; i < $('.button__dot').length; i++) {
    //     $('.button__dot')[i].onclick = function () {
    //         if (this.classList.contains('button__active')) {
    //             return;
    //         } else {
    //             $('.button__dot').removeClass('button__active');
    //             this.classList.add('button__active')
    //             $('.slider__top--content').animate({ scrollLeft: $('.slider__top--item')[0].clientWidth * i });
    //             active = i;
    //         }
    //     }
    // }




    var sliderTop = new Slider($('.slider__top--content'), $('.slider__top--item'));

    $('.slider__top--button--right').on('click', function () {
        sliderTop.next();
    });
    $('.slider__top--button--left').on('click', function () {
        sliderTop.prev();
    });

    var mapSlider = new Slider($('.map__slider--content'), $('.map__slider--item'));
    $('.map__slider__buttons--right').on('click', function () {
        mapSlider.next();
    });
    $('.map__slider__buttons--left').on('click', function () {
        mapSlider.prev();
    });

    var certificatesSlider = new Slider($('.certificates__img_content'), $('.certificates__img_item'));
    $('.certificates__button--right').on('click', function () {
        certificatesSlider.next();
    });
    $('.certificates__button--left').on('click', function () {
        certificatesSlider.prev();
    });



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










    $('.top__search--mobile').on('click', function () {
        $('.top__nomber--mobile').toggleClass('top__nomber--mobile-no');
        $('#search-mobile').toggleClass('show');
    });




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







// $('.menu__language--button').on('click', function (e) {
//     e.preventDefault();
//     $('.language__list').slideToggle(200);
// })




}

