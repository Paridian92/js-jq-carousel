$(function(){
  //creo l'evento click
  $('.next').click(nextImage);
  $('.prev').click(prevImage);

  function nextImage(){
    //creo la referenza dell'immagine e del pallino "active"
    var activeImg = $('.wrapper img.active');
    var activeCircle = $('.nav .active');

     //rimuovo la classe .active all'elemento attivo
     activeImg.removeClass('active');
     activeCircle.removeClass('active');

  
     //aggiungo all'elemento successivo img con next la classe "active"
      activeImg.next().addClass('active');
      activeCircle.next().addClass('active');


    //se l'elemento ha la classe last torno all'elemento first
    if(activeImg.hasClass('last')){
      //aggiungo active a first
      $('.wrapper img.first').addClass('active');
      $('.nav .active').addClass('active');

    }else{
      //se non è l'elemento last aggiungo active alla prossima immagine
      activeImg.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }

  }

  function prevImage(){
    //creo la referenza dell'immagine e del pallino "active"
    var activeImg = $('.wrapper img.active');
    var activeCircle = $('.nav.active');

     //rimuovo la classe .active all'elemento attivo
     activeImg.removeClass('active');
     activeCircle.removeClass('active');

     //aggiungo all'elemento precedente img con next la classe "active"
      activeImg.prev().addClass('active');
      activeCircle.prev().addClass('active');


    //se l'elemento ha la classe first torno all'elemento last
    if(activeImg.hasClass('first')){
      //aggiungo active a first
      $('.wrapper img.last').addClass('active');
      $('.nav.active').addClass('active');

    }else{
      //se non è l'elemento first aggiungo active alla precedente immagine
      activeImg.next('img').addClass('active');
      activeCircle.next('i').addClass('active');
    }
  }


});