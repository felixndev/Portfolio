

 if($(window).width() < 800){

    $('.projects-grid').slick({
        centerMode: false,
        slidesToShow:1,
        autoplay:false,
        arrows:true,
        infinite:false, 
        prevArrow: '<button class="slick-prev" type="button"><i class="fxi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next" type="button"><i class="fxi-chevron-right"></i></button>',

       
    })

 }
 
scrollButton();

$(this).on('scroll',function(){
    scrollButton()
})

$('.top-button').on('click', function(){
    $(window).scrollTop() > 100?
    window.scrollTo(0, 0):null;
})

function scrollButton(){
    let scrollPosition = $(window).scrollTop();
    scrollPosition <=100? 
    $('.top-button').css('opacity','0.3')
    :
    $('.top-button').css('opacity','1');
}

$('.about h1').on('click',function(){
    console.log($(this).scrollTop())
})

$('.lang-dropdown .button').on('click', function(){
    $('.lang-dropdown .options').css('display') ==  'none'?
    $('.lang-dropdown .options').css('display','block')
    :
    $('.lang-dropdown .options').css('display','none')
})

$(document).on('mouseup',function(e){
    var container = $('.lang-dropdown');
 
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length == 0){
        $('.lang-dropdown .options').css('display','none')
    }
});

$('.toggle-dark').on('click', function(){
    document.body.classList.toggle('dark');
    $('.toggle-dark i').toggleClass('fxi-lightbulb-on');
    $(this).toggleClass('active')
   
})


   
    

 

