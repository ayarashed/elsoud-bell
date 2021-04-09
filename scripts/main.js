
window.onscroll = function() {scrollFunction()};

var header = $(".navbar");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.navbar .navbar-brand img').attr('src','images/blue-logo (1).png');
      header.addClass("nav-colored");
      header.removeClass("nav-transparent");

  } 
  else {
    $('.navbar .navbar-brand img').attr('src','images/LOGO.png');
      header.addClass("nav-transparent");
      header.removeClass("nav-colored");
  }
}

$(document).ready(function(){
  
  /**********************************************************/
  $.validator.addMethod("nowhitespace", function (value, element) {
    return this.optional(element) || /^\S+$/i.test(value);
  }, "No white space please");
  $('#form').validate({
    rules:{
      name: {
        required: true,
        minlength: 2,
        lettersonly: true
      },
      email:{
        required: true,
        email: true
      },
      phone:{
        required: true,
        nowhitespace:true,
        number: true ,
        minlength:11,
        maxlength:11
      },
      familyname:{
        required: true,
        minlength: 2,
        lettersonly: true
      }
    },
    highlight: function highlight(element) {
      $(element).addClass("attention");
    },
    unhighlight: function unhighlight(element) {
      $(element).removeClass("attention");
    }
    /*,
    messages: {
      name: {
        minlength: "name shoud be contain more than 2 letter",
        required : "name is required"
      },
      familyname: {
        minlength: "name shoud be contain more than 2 letter",
        required : "family name is required"

      },
      email: {
        email: "invalid email",
        required : "email is required"
      },
      phone:{
        number:"phone number must be number only",
        minlength:"must be 11 number",
        maxlength:"must be 11 number",
        required : "phone is required"
      }
    }*/
  });
  /*********************************************************/
  $("#contact-myform").validate({
    rules: {
        uName: {
            required: true,
            minlength:3
        },
        fmName: {
          required: true,
          minlength:3
      },
      uEmail: {
        required: true,
        email: true
      },
      serSolution: {
          required: true,
      },
      message: {
        required: true,
    
  }
  },
      highlight: function highlight(element) {
        $(element).addClass("attention");
      },
      unhighlight: function unhighlight(element) {
        $(element).removeClass("attention");
      },
  });
});
/**********************************************************/
$(".navbar ul li a").hover(function(){
  this.css({
    "color" : "#0094DA"
  });
});

/*************************************************************** */
var left = $('.navbar-links').offset().left; 
$('.toggle-button').click(function(){ // Get the calculated left position
$(".navbar-links").css({left:left})  // Set the left to its calculated position
    .animate({"left":"0px"}, "slow");
});
$('.close').click(function(){ // Get the calculated left position
    $(".navbar-links").css({left:left})  // Set the left to its calculated position
        .animate({"left":"-100%"}, "slow");
});
/**************************************************************/
$('.navbar-toggler').click(function(){
  $(".navbar_modifier").css({
    "left": "100%"
  });
});
/********************************arabic and english btn***************** */
$( ".btn--ar" ).click(function() {
  $('#ink').attr('href' , "css/minifiedstyle/rtlstyle.min.css");
  $( 'body' ).attr( "dir", "rtl" );
  $(this).hide();
  $( ".btn--en" ).show();
  $('.toggle-button').addClass('left-toggle');
  $('.toggle-button').removeClass('right-toggle');
});
$( ".btn--en" ).click(function() {
  $('#ink').attr('href' , "css/minifiedstyle/ltrstyle.min.css");
  $( 'body' ).attr( "dir", "ltr" );
  $(this).hide();
  $('.toggle-button').addClass('right-toggle');
  $('.toggle-button').removeClass('left-toggle');
  $( ".btn--ar" ).show();
});
////////////////////////////////////////////owl carsoul for header//////////////////////////////////////

let direction = document.body.getAttribute('dir');
if (direction == 'ltr'){
  rightToLeft=false;
}
else{
  rightToLeft=true;
}
$('.owl-slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    autoplay:true,
    autoplayHoverPause: true,
    dots:true,
    nav: false,
    rtl:rightToLeft,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
});
/******************************************owl carsoul for our partners******************************************** */
$('.owl-ourpartners__slider').owlCarousel({
  loop:true,
  margin:0,
  items:8.1,
  autoplay:true,
  autoplayHoverPause: true,
  dots:false,
  nav: false,
  rtl:rightToLeft,
  responsive:{
      0:{
          items:1.1
      },
      767:{
          items:3.1
      },
      992:{
          items:8.1
      }
  }
});

/*****************************************************contact us form validation*****************/




