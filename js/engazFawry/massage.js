
 $(document).ready(function(){
    $("#warning_enjaz").modal('show');
});
$(window).scroll(function() {
    if ($('#counter').is(':visible')) {
        $('.count').each(function() {
          var $this = $(this),
          countTo = $this.attr('data-count');
        
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {

            duration: 800,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }

          });  
      });
    }
});