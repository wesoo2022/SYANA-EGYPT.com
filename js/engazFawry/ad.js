
$(document).ready(function(){ 

    // $(".owl-carousel").owlCarousel();
  
  
    $('.owl-carousel').owlCarousel({
      loop:true,
      rtl:true,
      nav:false,
      autoplay:true,
      autoplayHoverPause:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:4,
              nav:false,
              loop:true
          }
      }
  });
        
    $('.marquee').show();
  
  
    $('.marquee').marquee({
        //speed in milliseconds of the marquee
        duration: 20000,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
  
        pauseOnHover: true,
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
    // $(".getUserModal").on('click', function () {
  
    //     var user_id = $(this).data('user');
  
    //       var token = $("input[name='_token']").val();
    //       $.ajax({
    //           url: "vendorData",
    //           method: 'POST',
    //           data: {user_id:user_id, _token:token},
    //           success: function(data) {
    //             $("#ajaxRespons").html(data.options);
    //           }
    //       });
      
    //     $('#userModal').modal('show');
  
    // });
  
    // $('#userModal').on('hidden.bs.modal', function () {
    //     $("#ajaxRespons").html('');
    // });
  });


