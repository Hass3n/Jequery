
/*****toggle card */
$('.card-title').click(function(e){


    $('.card-title').siblings('div.card-content').not( $(this).siblings('div')).slideUp(500);


     $(this).siblings('div').slideToggle('slow');


});



/********asidebar */
$(document).ready(function(){
    $('nav').css("left",`-${$('nav').outerWidth()}`)

})


$('.icon-menu').click(function(){

  
  $('nav').animate({left:"0px"},500);
  $('.head-icon ').animate({left:`${$('nav').outerWidth()}`},500)

});



$('.close').click(function(){

    $('nav').animate({left:`-${$('nav').outerWidth()}`},500)

    $('.head-icon ').animate({left:"0px"},500)

});

/***************Counter Time************** */


let countDate=new Date("July 27, 2024 13:59:59").getTime();


let counter=setInterval(() => {


    // get Date now
    let datenow=new Date().getTime();

    // get difffrence between two date
    let difdate=countDate-datenow;

    let days=Math.floor(difdate/ (1000*60*60*24));


    let hours=Math.floor((difdate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes=Math.floor((difdate % (1000 * 60 * 60)) / (1000 * 60));

    
    let seconds=Math.floor((difdate % (1000 * 60)) / (1000));

    $('.Day').html(days+'D');
    $('.hour').html(hours+'h');
    $('.minute').html(minutes+'m');
    $('.seconds').html(seconds+'s');


    if(difdate<= 0)
    {
        clearInterval(countDate)
    }

    
}, 1000);


/************form input************ */




$('textarea').on('keydown',function(e){


    if(e.key==='Backspace')
    {
       
        if(parseInt($('.count-char span').html()) < 100)
        {

            $('.count-char span').html( parseInt($('.count-char span').html()) + 1);

        }



    }


   else if(parseInt($('.count-char span').html()) > 0 )
    {

        $('.count-char span').html( parseInt($('.count-char span').html()) - (e.key.length));


    }

    else
    {
        $('.count-char span').html('your available character finished ')
    }




});


