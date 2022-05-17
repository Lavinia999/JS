(function($){
$.fn.slider = function(options){
    options = $.extended({
        slider : function(option){
            return $('<li>',{
                html : li.image()
            });
        },
        className : ''
    },options);

    return this.each(function(){
        var width = 670;
        var animationSpeed = 1000;
        var pause = 2090;
        var currentSlide = $(this);
        var $slider = $('#slider');
        var $slideContainer = $('.slides', $slider);
        var $slides = $('.slide', $slider);
    });
    var interval;
    
    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
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