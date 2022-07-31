// Load More Btn
      $(document).ready(function(){
        $(".card").slice(0,3).fadeIn();
        $(".load-more").click(function(){
          $(".card").slice(0,12).fadeIn();
          $(this).fadeOut();
        });
      });
     