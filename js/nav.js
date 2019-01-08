window.addEventListener('load', function(){
    //HELPER FUNCTION
    $(window).on('scroll', function(){
        //console.log('scrolled');
        //ADDS CLASS CENTER TO NAV IF SCROLLED PASS 80PX
        if($(window).scrollTop() > 80){
            $('nav').addClass('scroll-nav');
            console.log('center');
        }else{
            $('nav').removeClass('scroll-nav');
        }
    });//END OF SCROLL EVENT LISTENER
});//END OF ON LOAD FUNCTION