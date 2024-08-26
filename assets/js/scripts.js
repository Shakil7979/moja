
// Owl Carousel Integration

$(document).ready(function(){ 
  $(".second_owl_carousel").owlCarousel({
    loop: true,
    center: true,
    dots: false,
    nav:false,
    items: 3,
    margin: 10, 
  });


  $(".second_owl_carousel_two").owlCarousel({
    loop: true,
    center: true,
    dots: false,
    nav:true,
    items: 3,
    margin: 10, 
    navText: ["<img src='assets/images/left.png'>","<img src='assets/images/right.png''>"]
  });


  // click first modal  
  $(document).on('click','.first_modal_show', function(){
    $('.third_model').hide();
    $('.second_model').hide();
    $('.first_modal').show();
  });

  // click second modal  
  $(document).on('click','.second_modal_show', function(){
    $('.second_model').show();
    $('.third_model').hide();
    $('.first_modal').hide();
  });

  // click third modal  
  $(document).on('click','.third_modal_show', function(){
    $('.third_model').show();
    $('.second_model').hide();
    $('.first_modal').hide();
  });

  // All modal Close 
  $(document).on('click','.close_btn', function(){
    $('.third_model').hide();
    $('.second_model').hide();
    $('.first_modal').hide();
  });

  // Bars btn 
  $(document).on('click','.bars_btn', function(){
    $('.menus_list').slideToggle(); 
    $(this).toggleClass('bars_btn_add');  
  });











});
