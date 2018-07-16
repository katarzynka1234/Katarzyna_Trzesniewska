

$(document).ready(function () {   

    var btnReadMore = $('#read_more');
    var moreAboutMe = $('.not-visible'); 


    btnReadMore.click(function(){
        moreAboutMe.toggle('slow');
    });     

});