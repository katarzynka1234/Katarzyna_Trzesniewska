

$(document).ready(function () {
    
    // == Read More button - toggle effect ===//
    var btnReadMore = $('#read_more');
    var moreAboutMe = $('.not-visible');

    btnReadMore.click(function(){
        moreAboutMe.toggle('slow');
    }); 


    // === TECHNOLOGIES SECTION - iconS animation ===//
    
    // *** SCROLL MAGIC plugin ***//
    //Init ScrollMagic   
    var animatedEffect = 'fadeInDownBig'; 
    var controller = new ScrollMagic.Controller();    

    //animatedIcon.addClass('not-show');
    //build a scene
    var sceneOne = new ScrollMagic.Scene({
        triggerElement: '#technology'      
    })         
    .setClassToggle('#icon', animatedEffect)
    .addTo(controller); 
    
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#technology'
    })
    .setClassToggle('#icon2', animatedEffect)
    .addTo(controller);

    
});