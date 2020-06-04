 $(document).ready(function()

   {
     $('#name').hide();
     $('#name').delay(1500).fadeIn(1500);
     $(".navbar").hide();

     $(function() {
       $(window).scroll(function() {

         if ($(this).scrollTop() > 500) {
           $('.navbar').fadeIn();
         } else {
           $('.navbar').fadeOut();
         }
       });
     });

     $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
       if (this.hash !== "") {
         event.preventDefault();

         var hash = this.hash;

         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 900, function() {

           window.location.hash = hash;
         });
       } 
     });
   });