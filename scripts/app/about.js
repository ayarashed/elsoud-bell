 ////////////////////////////pages nav bar////////////////////////////////

window.onscroll = function() {scrollFunction()};

var header = $(".navbar");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.navbar .navbar-brand img').attr('src','../images/blue-logo (1).png');
      header.addClass("nav-colored");
      header.removeClass("nav-transparent");

  } 
  else {
    $('.navbar .navbar-brand img').attr('src','../images/LOGO.png');
      header.addClass("nav-transparent");
      header.removeClass("nav-colored");
  }
}
/*********************************story success collapse button **********************************/
let btn = document.querySelectorAll('.btn-collaps');
let ContentText = document.querySelectorAll('.accordion-body');
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", function(){
        let content = this.parentElement.nextElementSibling.children[0];
        content.classList.toggle("appear");
        for(var i=0 ; i < ContentText.length ; i++){
            if(content.id !== ContentText[i].id){
               ContentText[i].classList.remove("appear"); 
            }
        }    
        /*if (btn[index].innerHTML== `Read more <span><i class="fas fa-angle-down"></i></span>`)
        {
          btn[index].innerHTML = `Read Less <span><i class="fas fa-angle-up"></i></span>`;
        }
        else if ( btn[index].innerHTML = `Read Less <span><i class="fas fa-angle-up"></i></span>`)
        {
          btn[index].innerHTML== `Read more <span><i class="fas fa-angle-down"></i></span>`
        }*/
        });
}
/********************************************************************************/
$( ".btn--ar" ).click(function() {
  $('#ink').attr('href' , "../css/minifiedstyle/rtlstyle.min.css");
  $( 'body' ).attr( "dir", "rtl" );
  $(this).hide();
  $( ".btn--en" ).show();
});
$( ".btn--en" ).click(function() {
  $('#ink').attr('href' , "../css/minifiedstyle/ltrstyle.min.css");
  $( 'body' ).attr( "dir", "ltr" );
  $(this).hide();
  $( ".btn--ar" ).show();
});

  