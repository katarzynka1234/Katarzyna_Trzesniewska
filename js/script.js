

$(document).ready(function () {
    
    // == Read More/Less button - toggle effect ===//
    var btnReadMore = $('#read_more');
    var btnReadLess = $('#read_less');
    var moreAboutMe = $('.not-visible');

    btnReadLess.hide();

    btnReadMore.click(function(){
        moreAboutMe.show('slow');
        btnReadLess.show(); 
        btnReadMore.hide();       
    });

    btnReadLess.click(function(){
        moreAboutMe.hide('slow');
        btnReadLess.hide();
        btnReadMore.show();
    });     

    
    // === TECHNOLOGIES SECTION - iconS animation ===//
    
    // *** SCROLL MAGIC plugin ***//
    //Init ScrollMagic   
    var animatedEffect = 'fadeInDownBig'; 
    var controller = new ScrollMagic.Controller();    
  
    //build a scene
    var sceneOne = new ScrollMagic.Scene({
        triggerElement: '#technology'      
    })         
    .setClassToggle('.icon', animatedEffect)
    .addTo(controller); 
    
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#technology'
    })
    .setClassToggle('.icon2', animatedEffect)
    .addTo(controller);

    
});