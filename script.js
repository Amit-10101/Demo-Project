let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// jjiji


$('#carouselExample').on('slide.bs.carousel', function (e) {

  
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});





$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
  $('a.thumb').click(function(event){
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();
      var title = $(this).attr("title");
      $('.modal-title').html(title);        
      content.html($(this).html());
      $(".modal-profile").modal({show:true});
  });

});