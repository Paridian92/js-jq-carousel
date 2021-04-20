$(document).ready(function(){
  var burgermenu = $('.hamburger-menu');
  var aperto = true 

  $('i').click(function(){
    if(aperto){
      burgermenu.fadeOut();
    }else{
      burgermenu.fadeIn()
    }
    aperto = !aperto
    
  })

})



