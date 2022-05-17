(function($){
$.fn.LaviniaSlider = function(options) {
    const $slider = $('#slider');
    const $slideContainer = $('.slides', $slider);
    const $slides = $('.slide', $slider);
    let currentSlide = 1;
    let interval;

    options = $.extend({
        width: 670,
        animationSpeed: 1000,
        pause: 2090,
    }, options);

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-=' + options.width}, options.animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, options.pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
};

}(jQuery));